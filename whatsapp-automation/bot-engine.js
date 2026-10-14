/**
 * JUNO Kitchen & Co. - WhatsApp Automation State Machine
 * Handles multi-turn conversational ordering for each WhatsApp user.
 */
import { CONFIG } from './config.js';

const userSessions = new Map();

export function processIncomingMessage(fromPhone, incomingText) {
  const phone = fromPhone.replace(/[^0-9]/g, '');
  const text = (incomingText || '').trim();
  const lower = text.toLowerCase();

  // Retrieve or initialize user session
  if (!userSessions.has(phone) || lower === 'hi' || lower === 'hello' || lower === 'restart' || lower === 'menu') {
    userSessions.set(phone, {
      phone: phone,
      step: 'greeting',
      cart: [],
      pendingItem: null,
      selectedSize: null,
      selectedPrice: null,
      orderType: null
    });
  }

  const session = userSessions.get(phone);

  // If first message or restart, send welcome menu
  if (session.step === 'greeting') {
    session.step = 'choose_category';
    return {
      text: `👋 *Namaste! Welcome to ${CONFIG.restaurant.name}* 🍛\n` +
            `📍 *${CONFIG.restaurant.address}*\n` +
            `✨ *"${CONFIG.restaurant.tagline}"*\n\n` +
            `⚡ *PROMISE: WE DELIVER / PREPARE IN ONLY 20 MINUTES!* ⏱️\n\n` +
            `Please select what you would like to order today:\n` +
            `1️⃣ Biryani Section 🍚\n` +
            `2️⃣ Veg Starters 🥦\n` +
            `3️⃣ Non-Veg Starters 🍗\n` +
            `4️⃣ Noodles 🍜\n` +
            `5️⃣ Rice Items 🍛\n` +
            `6️⃣ Special Combos 🎁\n\n` +
            `_Reply with 1, 2, 3, 4, 5, or 6:_`
    };
  }

  // STEP 1: Category selection
  if (session.step === 'choose_category') {
    if (lower === '1' || lower.includes('biryani')) {
      return showCategoryItems(session, 'biryani', 'Biryani Section 🍚');
    } else if (lower === '2' || lower.includes('veg starter')) {
      return showCategoryItems(session, 'veg_starters', 'Veg Starters 🥦');
    } else if (lower === '3' || lower.includes('non veg') || lower.includes('non-veg')) {
      return showCategoryItems(session, 'nonveg_starters', 'Non-Veg Starters 🍗');
    } else if (lower === '4' || lower.includes('noodle')) {
      return showCategoryItems(session, 'noodles', 'Noodles Section 🍜');
    } else if (lower === '5' || lower.includes('rice')) {
      return showCategoryItems(session, 'rice', 'Rice Items 🍛');
    } else if (lower === '6' || lower.includes('combo')) {
      return showCombos(session);
    } else {
      return {
        text: `Please reply with a valid section number (1 to 6):\n` +
              `1️⃣ Biryani Section 🍚\n2️⃣ Veg Starters 🥦\n3️⃣ Non-Veg Starters 🍗\n4️⃣ Noodles 🍜\n5️⃣ Rice Items 🍛\n6️⃣ Special Combos 🎁`
      };
    }
  }

  // STEP 2: Item selection inside section
  if (session.step === 'choose_item') {
    const items = session.currentCategoryItems || [];
    const index = parseInt(lower, 10) - 1;

    if (!isNaN(index) && items[index]) {
      const item = items[index];
      session.pendingItem = item;

      // Check if item has both Small and Full
      if (item.prices && item.prices.S && item.prices.F) {
        session.step = 'choose_size';
        return {
          text: `You picked *${item.name}*!\n\n` +
                `Please select portion size:\n` +
                `1️⃣ Small - ₹${item.prices.S}\n` +
                `2️⃣ Full - ₹${item.prices.F}\n\n` +
                `_Reply 1 for Small, 2 for Full:_`
        };
      } else {
        session.selectedSize = item.prices?.F ? 'Full' : (item.prices?.S ? 'Small' : 'Standard');
        session.selectedPrice = item.price || item.prices?.F || item.prices?.S;
        return askSpiceLevel(session);
      }
    } else {
      return { text: `⚠️ Invalid dish number. Please reply with a valid number from the menu list:` };
    }
  }

  // STEP 3: Portion Size Selection
  if (session.step === 'choose_size') {
    const item = session.pendingItem;
    if (lower === '1' || lower === 'small' || lower === 's') {
      session.selectedSize = 'Small';
      session.selectedPrice = item.prices.S;
      return askSpiceLevel(session);
    } else if (lower === '2' || lower === 'full' || lower === 'f') {
      session.selectedSize = 'Full';
      session.selectedPrice = item.prices.F;
      return askSpiceLevel(session);
    } else {
      return {
        text: `Please choose portion for *${item.name}*:\n1️⃣ Small - ₹${item.prices.S}\n2️⃣ Full - ₹${item.prices.F}`
      };
    }
  }

  // STEP 4: Spice Level Selection
  if (session.step === 'choose_spice') {
    let spice = 'Medium';
    let spiceName = 'Medium Spicy 🌶️🌶️';
    if (lower === '1' || lower.includes('no') || lower.includes('mild')) {
      spice = 'Mild';
      spiceName = 'No Spicy (Mild) 🌶️';
    } else if (lower === '2' || lower.includes('medium')) {
      spice = 'Medium';
      spiceName = 'Medium Spicy 🌶️🌶️';
    } else if (lower === '3' || lower.includes('spicy') || lower.includes('hot')) {
      spice = 'Spicy';
      spiceName = 'Spicy 🌶️🌶️🌶️';
    }

    const item = session.pendingItem;
    const size = session.selectedSize || 'Full';
    const price = session.selectedPrice;

    session.cart.push({
      name: item.name,
      size: size,
      price: price,
      spice: spice,
      spiceName: spiceName,
      qty: 1
    });

    session.step = 'after_add';
    const subtotal = session.cart.reduce((sum, i) => sum + (i.price * i.qty), 0);

    return {
      text: `✅ Added *${item.name}* (${size}) - *${spiceName}* to your order!\n\n` +
            `🛒 *Current Items in Cart: ${session.cart.length}*\n` +
            `💰 *Current Total: ₹${subtotal}*\n\n` +
            `What would you like to do next?\n` +
            `1️⃣ Add More Items\n` +
            `2️⃣ Order Now / Checkout 🛎️\n\n` +
            `_Reply 1 to add more, or 2 to checkout:_`
    };
  }

  // STEP 5: After Add (Add More or Checkout)
  if (session.step === 'after_add') {
    if (lower === '1' || lower.includes('more') || lower.includes('add')) {
      session.step = 'choose_category';
      return {
        text: `Please choose section to add more items:\n` +
              `1️⃣ Biryani Section 🍚\n2️⃣ Veg Starters 🥦\n3️⃣ Non-Veg Starters 🍗\n4️⃣ Noodles 🍜\n5️⃣ Rice Items 🍛\n6️⃣ Special Combos 🎁`
      };
    } else if (lower === '2' || lower.includes('order') || lower.includes('checkout') || lower.includes('now')) {
      return promptOrderType(session);
    } else {
      return {
        text: `Please reply with:\n1️⃣ Add More Items\n2️⃣ Order Now / Checkout 🛎️`
      };
    }
  }

  // STEP 6: Order Option Selection (1: Advance Booking, 2: Home Delivery, 3: Direct Call)
  if (session.step === 'choose_order_type') {
    const subtotal = session.cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
    const advanceAmount = Math.ceil(subtotal / 2);
    const balanceAmount = subtotal - advanceAmount;

    if (lower === '1' || lower.includes('advance') || lower.includes('dine') || lower.includes('restaurant')) {
      session.orderType = 'Advance';
      session.step = 'collect_details';
      return {
        text: `🍽️ *ADVANCE BOOKING (EATING IN RESTAURANT)*\n` +
              `━━━━━━━━━━━━━━━━━━━━━━\n` +
              `Total Food Bill: *₹${subtotal}*\n` +
              `💰 *50% Advance Payable Now: ₹${advanceAmount}*\n` +
              `💵 *Balance Due at Table: ₹${balanceAmount}*\n\n` +
              `⚡ *20-MINUTE LIVE PREPARATION:* Kitchen prepares food hot & fresh in 20 minutes as soon as advance is confirmed!\n\n` +
              `📲 *PLEASE SCAN BHARATPE QR TO PAY 50% ADVANCE:*\n` +
              `• Merchant: *${CONFIG.payment.merchantName}*\n` +
              `• UPI ID: *${CONFIG.payment.upiId}*\n\n` +
              `_Please reply with your Name, Phone Number, and 12-Digit UPI UTR No. to confirm your table:_`,
        image: CONFIG.payment.scannerImageUrl
      };
    } else if (lower === '2' || lower.includes('delivery') || lower.includes('home')) {
      session.orderType = 'Delivery';
      session.step = 'collect_details';
      return {
        text: `🛵 *HOME DELIVERY IN BODUPPAL*\n` +
              `━━━━━━━━━━━━━━━━━━━━━━\n` +
              `Total Bill: *₹${subtotal}* (Cash / UPI on Delivery)\n\n` +
              `⚡ *PROMISE: WE WILL DELIVER IN ONLY 20 MINUTES!* ⏱️\n\n` +
              `Please reply with your:\n` +
              `*Name, Contact Number, and Complete Boduppal Delivery Address:*`
      };
    } else if (lower === '3' || lower.includes('call') || lower.includes('pickup')) {
      session.orderType = 'Call';
      session.step = 'collect_details';
      return {
        text: `📞 *DIRECT CALL / COUNTER PICKUP*\n` +
              `━━━━━━━━━━━━━━━━━━━━━━\n` +
              `Total Bill: *₹${subtotal}*\n\n` +
              `⚡ *Food will be packed hot in 20 minutes!*\n` +
              `Owner Helpline: *${CONFIG.restaurant.ownerPhone}*\n\n` +
              `Please reply with your *Name and Phone Number* for counter pickup:`
      };
    } else {
      return {
        text: `Please choose a valid order option (1, 2, or 3):\n` +
              `1️⃣ Advance Booking (50% Pay)\n2️⃣ Home Delivery\n3️⃣ Direct Call Order`
      };
    }
  }

  // STEP 7: Final Confirmation & 20-Minute Promise
  if (session.step === 'collect_details') {
    const customerDetails = text;
    const subtotal = session.cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
    const advanceAmount = Math.ceil(subtotal / 2);
    const balanceAmount = subtotal - advanceAmount;
    const orderType = session.orderType || 'Delivery';

    let orderTypeTitle = "🛵 Home Delivery";
    if (orderType === 'Advance') orderTypeTitle = "🍽️ Advance Booking (Table Reserved)";
    if (orderType === 'Call') orderTypeTitle = "📞 Direct Call / Counter Pickup";

    let confirmMsg = `🎉 *ORDER CONFIRMED WITH ${CONFIG.restaurant.name}!* 🎉\n` +
                     `━━━━━━━━━━━━━━━━━━━━━━\n` +
                     `📍 *${CONFIG.restaurant.address}*\n\n` +
                     `⚡ *WE WILL DELIVER / PREPARE IN ONLY 20 MINUTES!* ⏱️\n` +
                     `━━━━━━━━━━━━━━━━━━━━━━\n` +
                     `🏷️ *Order Type:* ${orderTypeTitle}\n` +
                     `👤 *Customer Info:* ${customerDetails}\n` +
                     `📱 *Customer Phone:* ${phone}\n` +
                     `━━━━━━━━━━━━━━━━━━━━━━\n` +
                     `📋 *ITEMS ORDERED:*\n`;

    session.cart.forEach((item, idx) => {
      confirmMsg += `${idx + 1}. *${item.name}* (${item.size}) - ₹${item.price}\n   • Taste: *${item.spiceName}*\n`;
    });

    confirmMsg += `━━━━━━━━━━━━━━━━━━━━━━\n`;
    confirmMsg += `💰 *Total Bill: ₹${subtotal}*\n`;

    if (orderType === 'Advance') {
      confirmMsg += `💳 *50% Advance Token:* ₹${advanceAmount} (Paid via BharatPe QR)\n`;
      confirmMsg += `💵 *Balance Payable at Table:* ₹${balanceAmount}\n`;
    }

    confirmMsg += `━━━━━━━━━━━━━━━━━━━━━━\n`;
    confirmMsg += `📞 *OWNER DIRECT CONTACT:*\n`;
    confirmMsg += `Owner Hotline: *${CONFIG.restaurant.ownerPhone}*\n`;
    confirmMsg += `(Customer can call anytime to track delivery status)\n`;
    confirmMsg += `━━━━━━━━━━━━━━━━━━━━━━\n`;
    confirmMsg += `🙏 Thank you! Your food is now sizzling in our kitchen. We'll deliver in 20 minutes!`;

    // Clear session for next order
    session.step = 'completed';

    return {
      text: confirmMsg,
      notifyOwner: {
        ownerNumber: CONFIG.restaurant.whatsapp,
        message: `📢 *NEW INCOMING BOT ORDER!*\n` + confirmMsg
      }
    };
  }

  return { text: `Type *hi* or *menu* to start a new order with ${CONFIG.restaurant.name}.` };
}

function showCategoryItems(session, categoryId, categoryTitle) {
  const items = CONFIG.menu[categoryId] || [];
  session.currentCategoryItems = items;
  session.step = 'choose_item';

  let msg = `✨ *${CONFIG.restaurant.name} - ${categoryTitle}*\n━━━━━━━━━━━━━━━━━━━━━━\n`;
  items.forEach((item, idx) => {
    let priceText = '';
    if (item.prices.S && item.prices.F) {
      priceText = `Small: ₹${item.prices.S} | Full: ₹${item.prices.F}`;
    } else {
      priceText = `₹${item.prices.F || item.prices.S}`;
    }
    msg += `${idx + 1}️⃣ *${item.name}* - ${priceText}\n`;
  });
  msg += `━━━━━━━━━━━━━━━━━━━━━━\n_Reply with the Dish Number (1, 2, 3...) to order:_`;

  return { text: msg };
}

function showCombos(session) {
  const combos = CONFIG.menu.combos || [];
  session.currentCategoryItems = combos;
  session.step = 'choose_item';

  let msg = `🎁 *${CONFIG.restaurant.name} - Special Combos (Best Offers!)*\n━━━━━━━━━━━━━━━━━━━━━━\n`;
  combos.forEach((combo, idx) => {
    msg += `${idx + 1}️⃣ *${combo.name}* - *₹${combo.price}*\n   • ${combo.includes}\n`;
  });
  msg += `━━━━━━━━━━━━━━━━━━━━━━\n_Reply with the Combo Number (1, 2, or 3) to order:_`;

  return { text: msg };
}

function askSpiceLevel(session) {
  session.step = 'choose_spice';
  const item = session.pendingItem;
  const size = session.selectedSize || 'Full';

  return {
    text: `🌶️ *Please select Spice Level for ${item.name} (${size}):*\n\n` +
          `1️⃣ No Spicy (Mild 🌶️)\n` +
          `2️⃣ Medium Spicy (🌶️🌶️ Classic)\n` +
          `3️⃣ Spicy (🌶️🌶️🌶️ Hot & Fiery)\n\n` +
          `_Reply with 1, 2, or 3:_`
  };
}

function promptOrderType(session) {
  session.step = 'choose_order_type';
  const subtotal = session.cart.reduce((sum, i) => sum + (i.price * i.qty), 0);

  return {
    text: `🛎️ *SELECT ORDER TYPE - ${CONFIG.restaurant.name}*\n` +
          `━━━━━━━━━━━━━━━━━━━━━━\n` +
          `Total Food Bill: *₹${subtotal}*\n\n` +
          `Please select your option:\n\n` +
          `1️⃣ *Advance Booking* (Dine-in Table Booking with 50% Token Scanner)\n` +
          `2️⃣ *Home Delivery* (Direct to Doorstep in Boduppal - 20 Mins)\n` +
          `3️⃣ *Direct Call Order* (Hot Counter Pickup)\n\n` +
          `_Reply with 1, 2, or 3:_`
  };
}
