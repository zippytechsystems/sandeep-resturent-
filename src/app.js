/**
 * Reddy's Daily Treats - Luxury Five-Star Website Logic
 * Handles menu rendering, size toggles, cart management,
 * WhatsApp order compilation, live status, and lightbox.
 */

// Embedded default menu data fallback to support offline / direct file opening
const DEFAULT_MENU_DATA = {
  "restaurant": {
    "name": "JUNO Kitchen & Co.",
    "subtitle": "Biryani • Fast Food • Juices • Mocktails • Shakes",
    "tagline": "Good Food Good Vibes",
    "phone": "+91 90145 61737",
    "whatsapp": "+919014561737",
    "location": "Canara Nagar, Boduppal, Hyderabad, Telangana 500092",
    "mapsUrl": "https://maps.google.com/?q=Canara+Nagar+Boduppal+Hyderabad",
    "timings": "11:30 AM - 11:30 PM (Open All 7 Days)",
    "currency": "₹"
  },
  "categories": [
    { "id": "biryani", "name": "Biryani's", "icon": "utensils" },
    { "id": "starters", "name": "Starters", "icon": "flame" },
    { "id": "noodles", "name": "Noodles", "icon": "soup" },
    { "id": "rice", "name": "Rice", "icon": "wheat" },
    { "id": "combos", "name": "Combos", "icon": "gift" },
    { "id": "momos", "name": "Momo's", "icon": "sparkles", "comingSoon": true },
    { "id": "milkshakes", "name": "Milkshakes", "icon": "cup-soda", "comingSoon": true },
    { "id": "cold-drinks", "name": "Cold Drinks", "icon": "glass-water", "comingSoon": true }
  ],
  "items": [
    {
      "id": "chicken-biryani",
      "name": "Chicken Biryani",
      "category": "biryani",
      "veg": false,
      "signature": true,
      "description": "Fragrant long-grain basmati with succulent spiced chicken cooked in authentic Hyderabadi dum style.",
      "image": "./images/menu/chicken-biryani.jpg",
      "prices": { "S": 130, "F": 220 }
    },
    {
      "id": "family-pack-biryani",
      "name": "Family Pack Biryani",
      "category": "biryani",
      "veg": false,
      "signature": false,
      "description": "Hearty copper handi biryani feast for 3-4 people, served with creamy raita and spicy mirchi ka salan.",
      "image": "./images/menu/family-pack-biryani.jpg",
      "prices": { "F": 460 }
    },
    {
      "id": "jumbo-pack-biryani",
      "name": "Jumbo Pack Biryani",
      "category": "biryani",
      "veg": false,
      "signature": false,
      "description": "Grand feast portion loaded with tender chicken pieces, boiled eggs, and royal saffron aroma for large gatherings.",
      "image": "./images/menu/jumbo-pack-biryani.jpg",
      "prices": { "F": 690 }
    },
    {
      "id": "fried-piece-biryani",
      "name": "Fried Piece Biryani",
      "category": "biryani",
      "veg": false,
      "signature": true,
      "description": "Classic fragrant dum rice topped with crispy golden fried chicken pieces, caramelized onions and lemon.",
      "image": "./images/menu/fried-piece-biryani.jpg",
      "prices": { "S": 140, "F": 240 }
    },
    {
      "id": "veg-manchurian",
      "name": "Veg Manchurian",
      "category": "starters",
      "veg": true,
      "signature": false,
      "description": "Crispy vegetable balls tossed in rich dark soy-garlic gravy with fresh scallion garnish.",
      "image": "./images/menu/veg-manchurian.jpg",
      "prices": { "S": 70, "F": 120 }
    },
    {
      "id": "chicken-lollipop",
      "name": "Chicken Lollipop",
      "category": "starters",
      "veg": false,
      "signature": true,
      "description": "Crisp frenched chicken drumettes coated in fiery Indo-Chinese glaze with delicate scallions.",
      "image": "./images/menu/chicken-lollipop.jpg",
      "prices": { "S": 120 }
    },
    {
      "id": "chicken-65",
      "name": "Chicken 65",
      "category": "starters",
      "veg": false,
      "signature": true,
      "description": "Iconic Hyderabadi crispy spiced red chicken tossed with curry leaves, slit green chillies, and lemon.",
      "image": "./images/menu/chicken-65.jpg",
      "prices": { "S": 130, "F": 220 }
    },
    {
      "id": "chicken-manchurian",
      "name": "Chicken Manchurian",
      "category": "starters",
      "veg": false,
      "signature": false,
      "description": "Tender chicken chunks tossed in a glossy savoury garlic, ginger, and soy sauce glaze.",
      "image": "./images/menu/chicken-manchurian.jpg",
      "prices": { "S": 120, "F": 200 }
    },
    {
      "id": "chilli-chicken",
      "name": "Chilli Chicken",
      "category": "starters",
      "veg": false,
      "signature": false,
      "description": "Classic wok-tossed spicy chicken with crunchy bell peppers, diced onions, and green chillies.",
      "image": "./images/menu/chilli-chicken.jpg",
      "prices": { "S": 130, "F": 220 }
    },
    {
      "id": "ginger-chicken",
      "name": "Ginger Chicken",
      "category": "starters",
      "veg": false,
      "signature": false,
      "description": "Golden crispy chicken pieces infused with julienned fresh ginger, aromatic curry leaves, and spices.",
      "image": "./images/menu/ginger-chicken.jpg",
      "prices": { "S": 130, "F": 220 }
    },
    {
      "id": "veg-noodles",
      "name": "Veg Noodles",
      "category": "noodles",
      "veg": true,
      "signature": false,
      "description": "Classic Hakka noodles tossed with crunchy julienned vegetables and subtle oriental seasonings.",
      "image": "./images/menu/veg-noodles.jpg",
      "prices": { "S": 70, "F": 120 }
    },
    {
      "id": "veg-manchurian-noodles",
      "name": "Veg Manchurian Noodles",
      "category": "noodles",
      "veg": true,
      "signature": false,
      "description": "Wok noodles paired with crispy veg manchurian dumplings bathed in rich garlic soy gravy.",
      "image": "./images/menu/veg-manchurian-noodles.jpg",
      "prices": { "S": 80, "F": 130 }
    },
    {
      "id": "veg-schezwan-noodles",
      "name": "Veg Schezwan Noodles",
      "category": "noodles",
      "veg": true,
      "signature": false,
      "description": "Fiery stir-fried noodles seasoned with house-made Schezwan sauce, red chilli flakes, and spring onion.",
      "image": "./images/menu/veg-schezwan-noodles.jpg",
      "prices": { "S": 90, "F": 140 }
    },
    {
      "id": "egg-noodles",
      "name": "Egg Noodles",
      "category": "noodles",
      "veg": false,
      "signature": false,
      "description": "Delicate wheat noodles stir-fried with fluffy scrambled eggs, crisp veggies, and crushed pepper.",
      "image": "./images/menu/egg-noodles.jpg",
      "prices": { "S": 80, "F": 130 }
    },
    {
      "id": "chicken-noodles",
      "name": "Chicken Noodles",
      "category": "noodles",
      "veg": false,
      "signature": false,
      "description": "Savory wok noodles loaded with tender chicken slices, fresh vegetables, and savory wok aroma.",
      "image": "./images/menu/chicken-noodles.jpg",
      "prices": { "S": 90, "F": 159 }
    },
    {
      "id": "chicken-schezwan-noodles",
      "name": "Chicken Schezwan Noodles",
      "category": "noodles",
      "veg": false,
      "signature": false,
      "description": "Spicy wok noodles packed with chicken strips tossed in spicy red chilli garlic Schezwan blend.",
      "image": "./images/menu/chicken-schezwan-noodles.jpg",
      "prices": { "S": 100, "F": 169 }
    },
    {
      "id": "veg-fried-rice",
      "name": "Veg Fried Rice",
      "category": "rice",
      "veg": true,
      "signature": false,
      "description": "Aromatic basmati rice wok-tossed with finely diced carrots, beans, and capsicum.",
      "image": "./images/menu/veg-fried-rice.jpg",
      "prices": { "S": 70, "F": 120 }
    },
    {
      "id": "jeera-rice",
      "name": "Jeera Rice",
      "category": "rice",
      "veg": true,
      "signature": false,
      "description": "Fluffy basmati tempered with toasted cumin seeds, pure desi ghee, and fresh coriander.",
      "image": "./images/menu/jeera-rice.jpg",
      "prices": { "S": 70, "F": 120 }
    },
    {
      "id": "veg-manchurian-rice",
      "name": "Veg Manchurian Rice",
      "category": "rice",
      "veg": true,
      "signature": false,
      "description": "Stir-fried veg rice served alongside savory veg manchurian dumplings in lush gravy.",
      "image": "./images/menu/veg-manchurian-rice.jpg",
      "prices": { "S": 80, "F": 140 }
    },
    {
      "id": "veg-schezwan-rice",
      "name": "Veg Schezwan Rice",
      "category": "rice",
      "veg": true,
      "signature": false,
      "description": "Spicy and tangy Schezwan fried rice loaded with crisp garden vegetables.",
      "image": "./images/menu/veg-schezwan-rice.jpg",
      "prices": { "S": 80, "F": 140 }
    },
    {
      "id": "veg-paneer-rice",
      "name": "Veg Paneer Rice",
      "category": "rice",
      "veg": true,
      "signature": false,
      "description": "Fragrant fried rice loaded with golden seared paneer cubes and crunchy bell peppers.",
      "image": "./images/menu/veg-paneer-rice.jpg",
      "prices": { "S": 100, "F": 180 }
    },
    {
      "id": "egg-fried-rice",
      "name": "Egg Fried Rice",
      "category": "rice",
      "veg": false,
      "signature": false,
      "description": "Wok-tossed rice with golden scrambled egg ribbons and fresh green spring onions.",
      "image": "./images/menu/egg-fried-rice.jpg",
      "prices": { "S": 80, "F": 140 }
    },
    {
      "id": "egg-manchurian-rice",
      "name": "Egg Manchurian Rice",
      "category": "rice",
      "veg": false,
      "signature": false,
      "description": "Delicious egg fried rice accompanied by a rich savory manchurian sauce reduction.",
      "image": "./images/menu/egg-manchurian-rice.jpg",
      "prices": { "S": 90, "F": 160 }
    },
    {
      "id": "egg-schezwan-fried-rice",
      "name": "Egg Schezwan Fried Rice",
      "category": "rice",
      "veg": false,
      "signature": false,
      "description": "Spicy Schezwan tossed egg fried rice with aromatic peppers and chilli aromatics.",
      "image": "./images/menu/egg-schezwan-fried-rice.jpg",
      "prices": { "S": 90, "F": 160 }
    },
    {
      "id": "chicken-fried-rice",
      "name": "Chicken Fried Rice",
      "category": "rice",
      "veg": false,
      "signature": false,
      "description": "Satisfying fried rice tossed with tender shredded chicken, egg, and fresh scallions.",
      "image": "./images/menu/chicken-fried-rice.jpg",
      "prices": { "S": 90, "F": 160 }
    },
    {
      "id": "chicken-schezwan-fried-rice",
      "name": "Chicken Schezwan Fried Rice",
      "category": "rice",
      "veg": false,
      "signature": false,
      "description": "Fiery wok-tossed chicken fried rice in signature Schezwan pepper sauce.",
      "image": "./images/menu/chicken-schezwan-fried-rice.jpg",
      "prices": { "S": 100, "F": 170 }
    },
    {
      "id": "biryani-combo",
      "name": "Biryani Royal Combo",
      "category": "combos",
      "veg": false,
      "signature": true,
      "isCombo": true,
      "bestValue": true,
      "comboIncludes": ["Chicken Biryani (Full)", "2x Chicken Lollipops", "2x Chilled Cold Drinks"],
      "description": "The ultimate treat: Full Chicken Biryani + 2 Chicken Lollipops + 2 Chilled Cold Drinks.",
      "image": "./images/menu/biryani-combo.jpg",
      "prices": { "F": 280 }
    },
    {
      "id": "veg-combo",
      "name": "Veg Feast Combo",
      "category": "combos",
      "veg": true,
      "signature": false,
      "isCombo": true,
      "bestValue": true,
      "comboIncludes": ["Veg Manchurian", "Veg Rice or Noodles", "Veg Paneer Rice", "2x Chilled Cold Drinks"],
      "description": "Vegetarian feast: Veg Manchurian + Veg Rice or Noodles + Veg Paneer Rice + 2 Chilled Cold Drinks.",
      "image": "./images/menu/veg-combo.jpg",
      "prices": { "F": 229 }
    },
    {
      "id": "nonveg-combo",
      "name": "Non-Veg Deluxe Combo",
      "category": "combos",
      "veg": false,
      "signature": true,
      "isCombo": true,
      "bestValue": true,
      "comboIncludes": ["Chicken Manchurian", "Chicken Rice or Noodles", "Small Chicken Biryani", "2x Chilled Cold Drinks"],
      "description": "Mega combo: Chicken Manchurian + Chicken Rice or Noodles + Small Chicken Biryani + 2 Chilled Cold Drinks.",
      "image": "./images/menu/nonveg-combo.jpg",
      "prices": { "F": 319 }
    }
  ],
  "gallery": [
    { "id": "gallery-1", "title": "Royal Dining Ambiance", "subtitle": "Luxury five-star experience in Boduppal", "image": "./images/gallery/gallery-1.jpg" },
    { "id": "gallery-2", "title": "Live Wok Artistry", "subtitle": "High-heat authentic Indo-Chinese wok mastery", "image": "./images/gallery/gallery-2.jpg" },
    { "id": "gallery-3", "title": "Traditional Dum Feast", "subtitle": "Slow-cooked copper handi biryani", "image": "./images/gallery/gallery-3.jpg" },
    { "id": "gallery-4", "title": "Charcoal & Spices", "subtitle": "Freshly ground secret spice blends", "image": "./images/gallery/gallery-4.jpg" }
  ]
};

class ReddysApp {
  constructor() {
    this.data = DEFAULT_MENU_DATA;
    this.selectedCategory = 'all';
    this.selectedDiet = 'all'; // 'all', 'veg', 'nonveg'
    this.searchQuery = '';
    this.itemSizeSelections = {}; // itemId -> 'S' | 'F'
    this.cart = [];
    this.orderType = 'Takeaway'; // 'Takeaway' | 'Delivery'
    
    this.init();
  }

  async init() {
    // Attempt dynamic fetch of menu.json if served over HTTP
    try {
      const res = await fetch('./data/menu.json').catch(() => fetch('./menu.json'));
      if (res && res.ok) {
        const fetched = await res.json();
        if (fetched && fetched.items && fetched.items.length > 0) {
          this.data = fetched;
        }
      }
    } catch (e) {
      console.log('Using pre-bundled menu data');
    }

    // Ensure 'all' is always the first category
    const hasAll = this.data.categories.some(c => c.id === 'all');
    if (!hasAll) {
      this.data.categories.unshift({ id: 'all', name: 'All Treats', icon: 'sparkles' });
    }

    // Initialize item size selections
    this.data.items.forEach(item => {
      // Fix image paths to relative ./images/ if starts with /images/
      if (item.image && item.image.startsWith('/images/')) {
        item.image = '.' + item.image;
      }
      if (item.prices.S) {
        this.itemSizeSelections[item.id] = 'S';
      } else {
        this.itemSizeSelections[item.id] = 'F';
      }
    });

    if (this.data.gallery) {
      this.data.gallery.forEach(g => {
        if (g.image && g.image.startsWith('/images/')) {
          g.image = '.' + g.image;
        }
      });
    }

    // Load saved cart from localStorage
    this.loadCart();

    // Render initial views
    this.updateLiveStatus();
    this.renderCategoryTabs();
    this.renderSignatureDishes();
    this.renderCombosSpotlight();
    this.renderMenuGrid();
    this.renderGallery();
    this.updateCartUI();
    this.attachEventListeners();

    // Refresh live status every minute
    setInterval(() => this.updateLiveStatus(), 60000);
  }

  // Live status badge calculation for Hyderabad time (IST: UTC+5:30)
  updateLiveStatus() {
    const now = new Date();
    // Convert to IST
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    const istTime = new Date(utc + (3600000 * 5.5));
    
    const hours = istTime.getHours();
    const minutes = istTime.getMinutes();
    const currentMinutes = hours * 60 + minutes;

    // 11:30 AM (690 mins) to 11:30 PM (1410 mins)
    const openMinutes = 11 * 60 + 30; // 690
    const closeMinutes = 23 * 60 + 30; // 1410

    const isOpen = currentMinutes >= openMinutes && currentMinutes <= closeMinutes;

    const badgeContainer = document.getElementById('live-status-badge');
    const badgeText = document.getElementById('live-status-text');
    const badgeDot = document.getElementById('live-status-dot');

    if (badgeContainer && badgeText && badgeDot) {
      if (isOpen) {
        badgeText.textContent = "OPEN NOW • Serving Fresh Hot Treats";
        badgeDot.className = "w-2.5 h-2.5 rounded-full bg-emerald-400 pulse-active inline-block mr-2";
        badgeContainer.className = "inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 text-xs tracking-wider uppercase font-semibold";
      } else {
        badgeText.textContent = "CURRENTLY CLOSED • OPENS AT 11:30 AM (Pre-order on WhatsApp)";
        badgeDot.className = "w-2.5 h-2.5 rounded-full bg-amber-400 inline-block mr-2";
        badgeContainer.className = "inline-flex items-center px-4 py-1.5 rounded-full bg-amber-950/70 border border-amber-500/40 text-amber-300 text-xs tracking-wider uppercase font-semibold";
      }
    }
  }

  renderCategoryTabs() {
    const container = document.getElementById('category-tabs-container');
    if (!container) return;

    container.innerHTML = this.data.categories.map(cat => {
      const isActive = this.selectedCategory === cat.id;
      const comingSoonBadge = cat.comingSoon ? '<span class="ml-1 text-[10px] text-amber-400 uppercase tracking-widest font-normal">Soon</span>' : '';
      return `
        <button 
          type="button"
          data-category="${cat.id}"
          class="category-tab-btn flex-shrink-0 px-5 py-2.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 flex items-center gap-1.5 border ${
            isActive 
              ? 'bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-gray-950 font-bold border-amber-300 shadow-lg shadow-amber-500/20' 
              : 'bg-gray-900/60 text-gray-300 hover:text-white hover:bg-gray-800/80 border-amber-500/20'
          }"
        >
          <span>${cat.name}</span>
          ${comingSoonBadge}
        </button>
      `;
    }).join('');

    // Attach click events
    container.querySelectorAll('.category-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const catId = btn.getAttribute('data-category');
        this.selectedCategory = catId;
        this.renderCategoryTabs();
        this.renderMenuGrid();
      });
    });
  }

  renderSignatureDishes() {
    const container = document.getElementById('signature-dishes-grid');
    if (!container) return;

    const signatureItems = this.data.items.filter(item => item.signature);

    container.innerHTML = signatureItems.map(item => {
      const selectedSize = this.itemSizeSelections[item.id] || (item.prices.S ? 'S' : 'F');
      const currentPrice = item.prices[selectedSize] || item.prices.F || item.prices.S;
      const isDual = item.prices.S && item.prices.F;

      return `
        <div class="glass-panel glass-panel-hover rounded-2xl overflow-hidden flex flex-col group border border-amber-500/20" id="sig-card-${item.id}">
          <div class="relative aspect-[4/3] overflow-hidden bg-gray-950">
            <img 
              src="${item.image}" 
              alt="${item.name}" 
              loading="lazy"
              onerror="this.onerror=null; this.src='./images/hero-biryani.jpg';"
              class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-80"></div>
            
            <!-- Veg / NonVeg Tag -->
            <div class="absolute top-3 left-3 flex items-center gap-2">
              <span class="${item.veg ? 'veg-dot-box' : 'nonveg-dot-box'} shadow-lg backdrop-blur-sm bg-black/60">
                <span class="${item.veg ? 'veg-dot' : 'nonveg-triangle'}"></span>
              </span>
              <span class="text-[11px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-sm text-gray-300 border border-white/10">
                ${item.veg ? 'Pure Veg' : 'Non-Veg'}
              </span>
            </div>

            <!-- Crown / Signature Badge -->
            <div class="absolute top-3 right-3">
              <span class="px-2.5 py-1 rounded-full text-[10px] tracking-wider font-bold uppercase bg-amber-500/90 text-gray-950 shadow-md flex items-center gap-1">
                ★ Chef's Special
              </span>
            </div>

            <!-- Price in Image corner -->
            <div class="absolute bottom-3 right-3 bg-black/80 backdrop-blur-md px-3 py-1 rounded-lg border border-amber-500/30">
              <span class="text-xs text-amber-300/70 font-sans mr-1">from</span>
              <span class="text-lg font-bold font-serif text-amber-300" id="sig-price-${item.id}">₹${currentPrice}</span>
            </div>
          </div>

          <div class="p-5 flex-1 flex flex-col justify-between">
            <div>
              <h3 class="font-serif text-lg md:text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                ${item.name}
              </h3>
              <p class="text-gray-400 text-xs md:text-sm mt-1.5 line-clamp-2 font-sans leading-relaxed">
                ${item.description}
              </p>
            </div>

            <div class="mt-4 pt-3 border-t border-amber-500/10 flex items-center justify-between gap-3">
              <!-- Portion Selector if dual -->
              ${isDual ? `
                <div class="portion-switch">
                  <button 
                    type="button"
                    data-item-btn="${item.id}"
                    data-size="S"
                    class="portion-btn ${selectedSize === 'S' ? 'active' : ''}"
                    onclick="app.toggleSize('${item.id}', 'S')"
                  >Small</button>
                  <button 
                    type="button"
                    data-item-btn="${item.id}"
                    data-size="F"
                    class="portion-btn ${selectedSize === 'F' ? 'active' : ''}"
                    onclick="app.toggleSize('${item.id}', 'F')"
                  >Full</button>
                </div>
              ` : `
                <span class="text-xs text-gray-400 font-sans">
                  ${item.isCombo ? 'Feast Portion' : 'Standard Portion'}
                </span>
              `}

              <button 
                type="button"
                class="btn-gold !py-2 !px-4 !text-xs"
                onclick="app.addToCart('${item.id}')"
              >
                <span>Add</span>
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  renderCombosSpotlight() {
    const container = document.getElementById('combos-spotlight-container');
    if (!container) return;

    const combos = this.data.items.filter(item => item.category === 'combos');

    container.innerHTML = combos.map(combo => {
      const includesList = (combo.comboIncludes || []).map(inc => `
        <li class="flex items-center gap-2 text-xs md:text-sm text-gray-300">
          <svg class="w-4 h-4 text-amber-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
          <span>${inc}</span>
        </li>
      `).join('');

      return `
        <div class="relative glass-panel rounded-3xl overflow-hidden border border-amber-500/30 flex flex-col group hover:border-amber-400 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10">
          <!-- Best Value Ribbon -->
          <div class="absolute top-0 right-0 z-20">
            <div class="shimmer-badge text-gray-950 font-bold text-[11px] tracking-wider uppercase py-1 px-5 rounded-bl-xl shadow-lg flex items-center gap-1">
              <span>★ BEST VALUE</span>
            </div>
          </div>

          <div class="relative aspect-[16/10] overflow-hidden bg-gray-950">
            <img 
              src="${combo.image}" 
              alt="${combo.name}" 
              loading="lazy"
              onerror="this.onerror=null; this.src='./images/hero-biryani.jpg';"
              class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-[#111122] via-transparent to-transparent"></div>
            
            <div class="absolute bottom-3 left-4">
              <span class="${combo.veg ? 'veg-dot-box' : 'nonveg-dot-box'} mr-2 shadow-md bg-black/60">
                <span class="${combo.veg ? 'veg-dot' : 'nonveg-triangle'}"></span>
              </span>
              <span class="text-xs font-semibold text-gray-300 bg-black/70 px-2.5 py-1 rounded-full border border-white/10">
                ${combo.veg ? 'Vegetarian Platter' : 'Non-Veg Royal Platter'}
              </span>
            </div>
          </div>

          <div class="p-6 flex-1 flex flex-col justify-between">
            <div>
              <div class="flex items-baseline justify-between">
                <h3 class="font-serif text-xl md:text-2xl font-bold text-white group-hover:text-amber-300 transition-colors">
                  ${combo.name}
                </h3>
                <span class="text-2xl font-bold font-serif text-amber-400 ml-2">₹${combo.prices.F}</span>
              </div>
              <p class="text-gray-400 text-xs md:text-sm mt-2 font-sans">
                ${combo.description}
              </p>

              <div class="mt-4 pt-4 border-t border-amber-500/15">
                <p class="text-[11px] uppercase tracking-wider text-amber-300/80 font-semibold mb-2">Combo Platter Includes:</p>
                <ul class="space-y-1.5">
                  ${includesList}
                </ul>
              </div>
            </div>

            <div class="mt-6 pt-4 border-t border-amber-500/10">
              <button 
                type="button"
                class="btn-gold w-full !py-3 !text-sm"
                onclick="app.addToCart('${combo.id}')"
              >
                <span>Order Combo for ₹${combo.prices.F}</span>
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  renderMenuGrid() {
    const container = document.getElementById('menu-items-grid');
    const emptyState = document.getElementById('menu-empty-state');
    const comingSoonSection = document.getElementById('coming-soon-categories');
    if (!container) return;

    // Filter items
    let filtered = this.data.items;

    // Category filter
    if (this.selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === this.selectedCategory);
    }

    // Diet filter
    if (this.selectedDiet === 'veg') {
      filtered = filtered.filter(item => item.veg === true);
    } else if (this.selectedDiet === 'nonveg') {
      filtered = filtered.filter(item => item.veg === false);
    }

    // Search query filter
    if (this.searchQuery.trim() !== '') {
      const q = this.searchQuery.toLowerCase();
      filtered = filtered.filter(item => 
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
      );
    }

    // Toggle coming soon preview section if selected
    const isSpecialCategory = ['momos', 'milkshakes', 'cold-drinks'].includes(this.selectedCategory);
    if (comingSoonSection) {
      if (isSpecialCategory) {
        comingSoonSection.classList.remove('hidden');
      } else {
        comingSoonSection.classList.add('hidden');
      }
    }

    if (filtered.length === 0) {
      container.innerHTML = '';
      if (emptyState && !isSpecialCategory) emptyState.classList.remove('hidden');
      return;
    }

    if (emptyState) emptyState.classList.add('hidden');

    container.innerHTML = filtered.map(item => {
      const selectedSize = this.itemSizeSelections[item.id] || (item.prices.S ? 'S' : 'F');
      const currentPrice = item.prices[selectedSize] || item.prices.F || item.prices.S;
      const isDual = item.prices.S && item.prices.F;
      const isCombo = item.isCombo || item.category === 'combos';

      return `
        <div class="glass-panel glass-panel-hover rounded-2xl overflow-hidden flex flex-col group border border-amber-500/15" id="card-${item.id}">
          <!-- Food Image with aspect 4:3 -->
          <div class="relative aspect-[4/3] overflow-hidden bg-gray-950">
            <img 
              src="${item.image}" 
              alt="${item.name}" 
              loading="lazy"
              onerror="this.onerror=null; this.src='./images/hero-biryani.jpg';"
              class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-[#111122] via-transparent to-transparent opacity-80"></div>
            
            <!-- Veg / Non-Veg dot symbol -->
            <div class="absolute top-3 left-3 flex items-center gap-1.5">
              <span class="${item.veg ? 'veg-dot-box' : 'nonveg-dot-box'} shadow-md bg-black/60 backdrop-blur-sm">
                <span class="${item.veg ? 'veg-dot' : 'nonveg-triangle'}"></span>
              </span>
            </div>

            <!-- Best Value Ribbon if combo -->
            ${isCombo ? `
              <div class="absolute top-3 right-3">
                <span class="shimmer-badge text-gray-950 text-[10px] tracking-wider uppercase font-extrabold px-2.5 py-1 rounded-full shadow">
                  ★ Best Value
                </span>
              </div>
            ` : ''}

            <!-- Price Badge on Image Corner -->
            <div class="absolute bottom-3 right-3 bg-black/85 backdrop-blur-md px-3 py-1 rounded-lg border border-amber-500/30">
              <span class="text-base md:text-lg font-bold font-serif text-amber-300" id="price-display-${item.id}">₹${currentPrice}</span>
            </div>
          </div>

          <!-- Content Details -->
          <div class="p-5 flex-1 flex flex-col justify-between">
            <div>
              <div class="flex items-start justify-between gap-2">
                <h3 class="font-serif text-base md:text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                  ${item.name}
                </h3>
              </div>
              <p class="text-gray-400 text-xs md:text-sm mt-1.5 font-sans line-clamp-2 leading-relaxed">
                ${item.description}
              </p>
            </div>

            <!-- Bottom action row: Size Switcher + Add to Cart -->
            <div class="mt-4 pt-3 border-t border-amber-500/10 flex items-center justify-between gap-2">
              ${isDual ? `
                <div class="portion-switch">
                  <button 
                    type="button"
                    data-item-btn="${item.id}"
                    data-size="S"
                    class="portion-btn ${selectedSize === 'S' ? 'active' : ''}"
                    onclick="app.toggleSize('${item.id}', 'S')"
                  >Small (₹${item.prices.S})</button>
                  <button 
                    type="button"
                    data-item-btn="${item.id}"
                    data-size="F"
                    class="portion-btn ${selectedSize === 'F' ? 'active' : ''}"
                    onclick="app.toggleSize('${item.id}', 'F')"
                  >Full (₹${item.prices.F})</button>
                </div>
              ` : `
                <span class="text-xs text-amber-300/80 font-medium">
                  ${item.prices.F ? 'Full Portion' : 'Standard'}
                </span>
              `}

              <button 
                type="button"
                class="btn-gold !py-2 !px-3.5 !text-xs"
                onclick="app.addToCart('${item.id}')"
                aria-label="Add ${item.name} to order"
              >
                <span>Add</span>
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  renderGallery() {
    const container = document.getElementById('gallery-grid-container');
    if (!container) return;

    container.innerHTML = this.data.gallery.map(item => {
      return `
        <div 
          class="relative rounded-2xl overflow-hidden aspect-[4/3] glass-panel cursor-pointer group border border-amber-500/20"
          onclick="app.openLightbox('${item.image}', '${item.title}', '${item.subtitle}')"
        >
          <img 
            src="${item.image}" 
            alt="${item.title}" 
            loading="lazy"
            onerror="this.onerror=null; this.src='./images/hero-biryani.jpg';"
            class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-end p-5">
            <span class="text-xs text-amber-300 uppercase tracking-widest font-semibold">${item.subtitle}</span>
            <h4 class="font-serif text-lg font-bold text-white mt-0.5">${item.title}</h4>
            <span class="text-[11px] text-gray-300 mt-2 inline-flex items-center gap-1">
              Click to view full photo
              <svg class="w-3.5 h-3.5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path></svg>
            </span>
          </div>
        </div>
      `;
    }).join('');
  }

  toggleSize(itemId, size) {
    this.itemSizeSelections[itemId] = size;
    const item = this.data.items.find(i => i.id === itemId);
    if (!item) return;

    const newPrice = item.prices[size];

    // Update in signature grid if present
    const sigPriceEl = document.getElementById(`sig-price-${itemId}`);
    if (sigPriceEl) sigPriceEl.textContent = `₹${newPrice}`;

    // Update in menu grid if present
    const priceDisplayEl = document.getElementById(`price-display-${itemId}`);
    if (priceDisplayEl) priceDisplayEl.textContent = `₹${newPrice}`;

    // Update all matching portion buttons across the page
    document.querySelectorAll(`[data-item-btn="${itemId}"]`).forEach(btn => {
      if (btn.getAttribute('data-size') === size) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  addToCart(itemId) {
    const item = this.data.items.find(i => i.id === itemId);
    if (!item) return;

    const size = this.itemSizeSelections[itemId] || (item.prices.S ? 'S' : 'F');
    const price = item.prices[size] || item.prices.F || item.prices.S;
    const sizeLabel = size === 'S' ? 'Small' : 'Full';
    const defaultSpice = 'Medium'; // Default spice: Medium Spicy

    // Check if matching item + size + spice already in cart
    const existingIndex = this.cart.findIndex(c => c.id === itemId && c.size === size && (c.spice || 'Medium') === defaultSpice);

    if (existingIndex > -1) {
      this.cart[existingIndex].qty += 1;
    } else {
      this.cart.push({
        id: item.id,
        name: item.name,
        category: item.category,
        size: size,
        sizeLabel: sizeLabel,
        price: price,
        qty: 1,
        spice: defaultSpice,
        image: item.image,
        veg: item.veg
      });
    }

    this.saveCart();
    this.updateCartUI();
    this.showToast(`Added ${item.name} (${sizeLabel}) to your order!`);
  }

  setSpiceLevel(index, spice) {
    if (!this.cart[index]) return;
    this.cart[index].spice = spice;
    this.saveCart();
    this.updateCartUI();
    const spiceLabel = spice === 'Mild' ? 'No Spicy' : (spice === 'Spicy' ? 'Spicy' : 'Medium Spicy');
    this.showToast(`Taste set to ${spiceLabel}`);
  }

  setOrderType(type) {
    this.orderType = type; // 'Advance' | 'Delivery' | 'Call'

    // Update active highlight on 3-way selector buttons
    const btnAdvance = document.getElementById('label-order-advance');
    const btnDelivery = document.getElementById('label-order-delivery');
    const btnCall = document.getElementById('label-order-call');

    [btnAdvance, btnDelivery, btnCall].forEach(btn => {
      if (btn) {
        btn.classList.remove('bg-amber-500/20', 'border-amber-400/50', 'bg-emerald-500/20', 'border-emerald-400/50', 'bg-blue-500/20', 'border-blue-400/50');
      }
    });

    if (type === 'Advance' && btnAdvance) {
      btnAdvance.classList.add('bg-amber-500/20', 'border-amber-400/50');
    } else if (type === 'Delivery' && btnDelivery) {
      btnDelivery.classList.add('bg-emerald-500/20', 'border-emerald-400/50');
    } else if (type === 'Call' && btnCall) {
      btnCall.classList.add('bg-blue-500/20', 'border-blue-400/50');
    }

    // Toggle specific section blocks
    const advanceSection = document.getElementById('advance-payment-section');
    const deliveryBlock = document.getElementById('delivery-address-block');
    const callBlock = document.getElementById('call-order-block');
    const advanceFooterRow = document.getElementById('advance-footer-row');

    if (advanceSection) {
      if (type === 'Advance') {
        advanceSection.classList.remove('hidden');
      } else {
        advanceSection.classList.add('hidden');
      }
    }

    if (deliveryBlock) {
      if (type === 'Delivery') {
        deliveryBlock.classList.remove('hidden');
      } else {
        deliveryBlock.classList.add('hidden');
      }
    }

    if (callBlock) {
      if (type === 'Call') {
        callBlock.classList.remove('hidden');
      } else {
        callBlock.classList.add('hidden');
      }
    }

    if (advanceFooterRow) {
      if (type === 'Advance') {
        advanceFooterRow.classList.remove('hidden');
      } else {
        advanceFooterRow.classList.add('hidden');
      }
    }

    this.updateCartUI();
  }

  copyUPI() {
    const upiId = 'BHARATPE2I0U0D1W7A42341@unitype';
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(upiId).then(() => {
        this.showToast('📋 UPI ID Copied: BHARATPE2I0U0D1W7A42341@unitype');
      }).catch(() => {
        this.fallbackCopyUPI(upiId);
      });
    } else {
      this.fallbackCopyUPI(upiId);
    }
  }

  fallbackCopyUPI(text) {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    this.showToast('📋 UPI ID Copied: ' + text);
  }

  updateQuantity(index, delta) {
    if (!this.cart[index]) return;
    this.cart[index].qty += delta;
    if (this.cart[index].qty <= 0) {
      this.cart.splice(index, 1);
    }
    this.saveCart();
    this.updateCartUI();
  }

  removeFromCart(index) {
    if (!this.cart[index]) return;
    this.cart.splice(index, 1);
    this.saveCart();
    this.updateCartUI();
  }

  clearCart() {
    this.cart = [];
    this.saveCart();
    this.updateCartUI();
  }

  saveCart() {
    try {
      localStorage.setItem('juno_cart_v2', JSON.stringify(this.cart));
    } catch (e) {}
  }

  loadCart() {
    try {
      const saved = localStorage.getItem('juno_cart_v2') || localStorage.getItem('reddys_cart');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          this.cart = parsed.map(item => ({
            ...item,
            spice: item.spice || 'Medium'
          }));
        }
      }
    } catch (e) {
      this.cart = [];
    }
  }

  updateCartUI() {
    const totalCount = this.cart.reduce((sum, item) => sum + item.qty, 0);
    const subtotal = this.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const advanceAmount = Math.ceil(subtotal / 2);
    const balanceAmount = subtotal - advanceAmount;

    // Update count badges
    document.querySelectorAll('.cart-badge-count').forEach(el => {
      el.textContent = totalCount;
      el.style.display = totalCount > 0 ? 'inline-flex' : 'none';
    });

    // Update floating pill total
    const floatingTotal = document.getElementById('floating-cart-total');
    if (floatingTotal) floatingTotal.textContent = `₹${subtotal}`;

    // Update cart drawer items
    const listContainer = document.getElementById('cart-items-list');
    const emptyMsg = document.getElementById('cart-empty-message');
    const subtotalEl = document.getElementById('cart-subtotal');
    const grandTotalEl = document.getElementById('cart-grand-total');

    if (subtotalEl) subtotalEl.textContent = `₹${subtotal}`;
    if (grandTotalEl) grandTotalEl.textContent = `₹${subtotal}`;

    // Update Advance 50% numbers
    const advanceBadge = document.getElementById('advance-amount-badge');
    const payNowText = document.getElementById('advance-pay-now-text');
    const balanceText = document.getElementById('advance-balance-text');
    const advanceFooterTotal = document.getElementById('cart-advance-total');
    const directUpiBtn = document.getElementById('direct-upi-pay-btn');

    if (advanceBadge) advanceBadge.textContent = `Pay ₹${advanceAmount}`;
    if (payNowText) payNowText.textContent = `₹${advanceAmount}`;
    if (balanceText) balanceText.textContent = `₹${balanceAmount}`;
    if (advanceFooterTotal) advanceFooterTotal.textContent = `₹${advanceAmount}`;
    if (directUpiBtn) {
      directUpiBtn.href = `upi://pay?pa=BHARATPE2I0U0D1W7A42341@unitype&pn=Yellamla%20Sandeep&am=${advanceAmount}&cu=INR&tn=JUNO%20Advance%20Booking`;
    }

    if (listContainer && emptyMsg) {
      if (this.cart.length === 0) {
        listContainer.innerHTML = '';
        emptyMsg.classList.remove('hidden');
      } else {
        emptyMsg.classList.add('hidden');
        listContainer.innerHTML = this.cart.map((item, idx) => {
          const spice = item.spice || 'Medium';
          return `
            <div class="p-3 rounded-xl bg-gray-900/60 border border-amber-500/15 space-y-2.5">
              <div class="flex items-center gap-3">
                <img src="${item.image}" alt="${item.name}" onerror="this.onerror=null; this.src='./images/hero-biryani.jpg';" class="w-14 h-14 rounded-lg object-cover bg-gray-950 flex-shrink-0" />
                <div class="flex-1 min-w-0">
                  <div class="flex items-center gap-1.5">
                    <span class="${item.veg ? 'veg-dot-box' : 'nonveg-dot-box'} !w-3.5 !h-3.5 flex-shrink-0">
                      <span class="${item.veg ? 'veg-dot' : 'nonveg-triangle'} !w-1.5 !h-1.5"></span>
                    </span>
                    <h4 class="font-serif text-sm font-bold text-white truncate">${item.name}</h4>
                  </div>
                  <p class="text-[11px] text-amber-300/80 mt-0.5">
                    ${item.sizeLabel} • ₹${item.price} each
                  </p>
                  <div class="text-xs font-semibold text-white mt-0.5">
                    Total: ₹${item.price * item.qty}
                  </div>
                </div>

                <!-- Quantity Stepper -->
                <div class="flex items-center bg-gray-950 rounded-lg border border-amber-500/20 px-1 py-0.5 gap-2">
                  <button 
                    type="button"
                    class="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-white text-sm"
                    onclick="app.updateQuantity(${idx}, -1)"
                  >-</button>
                  <span class="text-xs font-bold text-amber-300 w-4 text-center">${item.qty}</span>
                  <button 
                    type="button"
                    class="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-white text-sm"
                    onclick="app.updateQuantity(${idx}, 1)"
                  >+</button>
                </div>

                <!-- Remove Button -->
                <button 
                  type="button"
                  class="text-gray-500 hover:text-red-400 p-1"
                  onclick="app.removeFromCart(${idx})"
                  title="Remove item"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                </button>
              </div>

              <!-- Spice Customization Options (No Spicy, Medium, Spicy) -->
              <div class="pt-2 border-t border-gray-800 flex items-center justify-between text-[11px]">
                <span class="text-gray-400 font-medium">Spice Level:</span>
                <div class="flex items-center gap-1">
                  <button 
                    type="button" 
                    onclick="app.setSpiceLevel(${idx}, 'Mild')" 
                    class="px-2 py-0.5 rounded text-[10px] transition-colors ${spice === 'Mild' ? 'bg-amber-400 text-gray-950 font-bold shadow' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}"
                    title="No Spicy / Mild"
                  >🌶️ No Spicy</button>
                  <button 
                    type="button" 
                    onclick="app.setSpiceLevel(${idx}, 'Medium')" 
                    class="px-2 py-0.5 rounded text-[10px] transition-colors ${spice === 'Medium' ? 'bg-amber-400 text-gray-950 font-bold shadow' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}"
                    title="Medium Spicy"
                  >🌶️🌶️ Medium</button>
                  <button 
                    type="button" 
                    onclick="app.setSpiceLevel(${idx}, 'Spicy')" 
                    class="px-2 py-0.5 rounded text-[10px] transition-colors ${spice === 'Spicy' ? 'bg-red-500 text-white font-bold shadow' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}"
                    title="Spicy"
                  >🌶️🌶️🌶️ Spicy</button>
                </div>
              </div>
            </div>
          `;
        }).join('');
      }
    }
  }

  openCart() {
    const backdrop = document.getElementById('cart-drawer-backdrop');
    const drawer = document.getElementById('cart-drawer');
    if (backdrop && drawer) {
      backdrop.classList.add('open');
      drawer.classList.add('open');
      document.body.style.overflow = 'hidden';
      // Ensure initial order type is initialized
      this.setOrderType(this.orderType || 'Delivery');
    }
  }

  closeCart() {
    const backdrop = document.getElementById('cart-drawer-backdrop');
    const drawer = document.getElementById('cart-drawer');
    if (backdrop && drawer) {
      backdrop.classList.remove('open');
      drawer.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  sendWhatsAppOrder() {
    if (this.cart.length === 0) {
      alert("Your order cart is empty! Please add some delicious treats first.");
      return;
    }

    const customerName = (document.getElementById('order-customer-name')?.value || '').trim();
    const customerPhone = (document.getElementById('order-customer-phone')?.value || '').trim();
    const customerAddress = (document.getElementById('order-customer-address')?.value || '').trim();
    const customerNotes = (document.getElementById('order-customer-notes')?.value || '').trim();
    const customerUtr = (document.getElementById('order-customer-utr')?.value || '').trim();
    const orderType = this.orderType || 'Delivery';

    if (!customerPhone) {
      alert("Please enter your WhatsApp/Mobile number so we can confirm your order and contact you!");
      document.getElementById('order-customer-phone')?.focus();
      return;
    }

    if (orderType === 'Delivery' && !customerAddress) {
      alert("Please provide your delivery address in Boduppal so our delivery person can reach you in 20 minutes!");
      document.getElementById('order-customer-address')?.focus();
      return;
    }

    const subtotal = this.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const advanceAmount = Math.ceil(subtotal / 2);
    const balanceAmount = subtotal - advanceAmount;

    let orderTypeTitle = "🛵 Home Delivery (Doorstep)";
    if (orderType === 'Advance') orderTypeTitle = "🍽️ Advance Booking (Restaurant Dine-in / Table)";
    if (orderType === 'Call') orderTypeTitle = "📞 Direct Call / Counter Pickup";

    let msg = `✨ *NEW ORDER - JUNO KITCHEN & CO.* ✨\n`;
    msg += `📍 *Canara Nagar, Boduppal, Hyderabad*\n`;
    msg += `✨ *"Good Food Good Vibes"*\n`;
    msg += `━━━━━━━━━━━━━━━━━━━━━━\n`;
    msg += `🏷️ *ORDER TYPE:* ${orderTypeTitle}\n`;
    if (customerName) msg += `👤 *Customer Name:* ${customerName}\n`;
    msg += `📱 *Customer Mobile:* ${customerPhone}\n`;
    if (orderType === 'Delivery') {
      msg += `🏠 *Delivery Address:* ${customerAddress}\n`;
    }
    msg += `━━━━━━━━━━━━━━━━━━━━━━\n`;
    msg += `📋 *ITEMS ORDERED & SPICE LEVELS:*\n`;

    this.cart.forEach((item, index) => {
      const vegTag = item.veg ? '🌱' : '🍗';
      const spiceEmoji = item.spice === 'Mild' ? '🌶️ No Spicy (Mild)' : (item.spice === 'Spicy' ? '🌶️🌶️🌶️ Spicy' : '🌶️🌶️ Medium Spicy');
      msg += `${index + 1}. ${vegTag} *${item.name}* (${item.sizeLabel})\n`;
      msg += `   • Qty: ${item.qty} × ₹${item.price} = *₹${item.price * item.qty}*\n`;
      msg += `   • Taste: *${spiceEmoji}*\n`;
    });

    msg += `━━━━━━━━━━━━━━━━━━━━━━\n`;
    if (customerNotes) {
      msg += `📝 *Cooking Notes:* ${customerNotes}\n`;
      msg += `━━━━━━━━━━━━━━━━━━━━━━\n`;
    }
    msg += `💰 *TOTAL BILL: ₹${subtotal}*\n`;

    if (orderType === 'Advance') {
      msg += `━━━━━━━━━━━━━━━━━━━━━━\n`;
      msg += `💳 *50% ADVANCE BOOKING PAYMENT:*\n`;
      msg += `   • 50% Advance Token: *₹${advanceAmount}* (Paid via BharatPe QR)\n`;
      msg += `   • Balance at Table: *₹${balanceAmount}*\n`;
      if (customerUtr) {
        msg += `   • UPI UTR / Ref No: *${customerUtr}*\n`;
      } else {
        msg += `   • UPI Ref: *Screenshot attached / Paid via BharatPe*\n`;
      }
    }

    msg += `━━━━━━━━━━━━━━━━━━━━━━\n`;
    msg += `⚡ *20-MINUTE DELIVERY GUARANTEE:* ⚡\n`;
    msg += `⏱️ *We will deliver / have food ready in ONLY 20 MINUTES!*\n`;
    msg += `━━━━━━━━━━━━━━━━━━━━━━\n`;
    msg += `📞 *CONTACT DETAILS:*\n`;
    msg += `• Customer Number: *${customerPhone}*\n`;
    msg += `• Owner Hotline: *+91 90145 61737*\n`;
    msg += `━━━━━━━━━━━━━━━━━━━━━━\n`;
    msg += `Please confirm my order. Thank you! 🙏`;

    const encoded = encodeURIComponent(msg);
    const rawNumber = "919014561737";
    const waUrl = `https://wa.me/${rawNumber}?text=${encoded}`;

    window.open(waUrl, '_blank');
  }

  // =========================================================================
  // WHATSAPP AUTOMATION BOT SIMULATOR ENGINE
  // =========================================================================
  openBotModal() {
    const modal = document.getElementById('whatsapp-bot-modal');
    if (modal) {
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
      if (!this.botInitialized) {
        this.initBot();
      }
    }
  }

  closeBotModal() {
    const modal = document.getElementById('whatsapp-bot-modal');
    if (modal) {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  initBot() {
    this.botInitialized = true;
    this.botState = {
      step: 'greeting',
      cart: [],
      pendingItem: null,
      orderType: 'Delivery',
      customer: { name: '', phone: '', address: '', utr: '' }
    };

    const container = document.getElementById('bot-messages-container');
    if (container) {
      // Clear previous bot messages while preserving date & encryption chips
      container.querySelectorAll('.bot-bubble-wrapper').forEach(el => el.remove());
    }

    this.sendBotGreeting();
  }

  sendBotGreeting() {
    const greetingMsg = `👋 *Namaste! Welcome to JUNO Kitchen & Co.* 🍛\n📍 *Canara Nagar, Boduppal, Hyderabad*\n✨ *"Good Food Good Vibes"*\n⚡ *We deliver / prepare in ONLY 20 MINUTES!* ⏱️\n\nPlease select what you would like to explore today:\n1️⃣ Biryani Section 🍚\n2️⃣ Veg Starters 🥦\n3️⃣ Non-Veg Starters 🍗\n4️⃣ Noodles 🍜\n5️⃣ Rice Items 🍛\n6️⃣ Special Combos 🎁\n\n_Reply with 1, 2, 3, 4, 5, or 6 (or tap below)_`;

    this.appendBotMessage(greetingMsg, null, [
      { text: "1. Biryani", val: "1" },
      { text: "2. Veg Starters", val: "2" },
      { text: "3. Non-Veg Starters", val: "3" },
      { text: "4. Noodles", val: "4" },
      { text: "5. Rice Items", val: "5" },
      { text: "6. Combos", val: "6" }
    ]);
    this.botState.step = 'choose_category';
  }

  appendBotMessage(text, imageSrc = null, chips = []) {
    const container = document.getElementById('bot-messages-container');
    if (!container) return;

    const wrapper = document.createElement('div');
    wrapper.className = 'bot-bubble-wrapper flex items-start gap-2 max-w-[92%] sm:max-w-[85%]';
    
    const now = new Date();
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    let imageHtml = '';
    if (imageSrc) {
      imageHtml = `
        <div class="mb-2 rounded-lg overflow-hidden border border-white/10 bg-black/40">
          <img src="${imageSrc}" alt="JUNO item" class="w-full max-h-48 object-cover" onerror="this.src='/images/hero-biryani.jpg'" />
        </div>
      `;
    }

    const formattedText = text.replace(/\n/g, '<br/>')
      .replace(/\*(.*?)\*/g, '<strong>$1</strong>')
      .replace(/_(.*?)_/g, '<em>$1</em>');

    wrapper.innerHTML = `
      <div class="wa-msg-bot p-3 rounded-2xl text-xs space-y-1">
        ${imageHtml}
        <div class="text-[#e9edef] leading-relaxed">${formattedText}</div>
        <div class="text-[10px] text-gray-400 text-right mt-1">${timeStr}</div>
      </div>
    `;

    container.appendChild(wrapper);
    container.scrollTop = container.scrollHeight;

    this.renderBotChips(chips);
  }

  appendUserMessage(text) {
    const container = document.getElementById('bot-messages-container');
    if (!container) return;

    const wrapper = document.createElement('div');
    wrapper.className = 'bot-bubble-wrapper flex justify-end ml-auto max-w-[85%]';
    
    const now = new Date();
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    wrapper.innerHTML = `
      <div class="wa-msg-user p-3 rounded-2xl text-xs space-y-1">
        <div class="text-white leading-relaxed font-medium">${text}</div>
        <div class="text-[10px] text-emerald-200 text-right flex items-center justify-end gap-1 mt-0.5">
          <span>${timeStr}</span>
          <span>✓✓</span>
        </div>
      </div>
    `;

    container.appendChild(wrapper);
    container.scrollTop = container.scrollHeight;
  }

  renderBotChips(chips) {
    const chipsBar = document.getElementById('bot-quick-chips');
    if (!chipsBar) return;

    if (!chips || chips.length === 0) {
      chipsBar.innerHTML = '';
      chipsBar.classList.add('hidden');
      return;
    }

    chipsBar.classList.remove('hidden');
    chipsBar.innerHTML = chips.map(chip => `
      <button 
        type="button" 
        onclick="app.handleBotUserReply('${chip.val}')"
        class="wa-chip px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap flex-shrink-0"
      >
        ${chip.text}
      </button>
    `).join('');
  }

  handleBotFormSubmit() {
    const input = document.getElementById('bot-user-input');
    if (!input) return;
    const text = input.value.trim();
    if (!text) return;
    input.value = '';
    this.handleBotUserReply(text);
  }

  handleBotUserReply(text) {
    this.appendUserMessage(text);
    const lower = text.toLowerCase().trim();

    // Support typing 'hi' or 'menu' to reset anytime
    if (lower === 'hi' || lower === 'hello' || lower === 'restart' || lower === 'menu') {
      this.initBot();
      return;
    }

    const step = this.botState.step;

    // STEP 1: Category selection
    if (step === 'choose_category') {
      if (lower === '1' || lower.includes('biryani')) {
        this.showBotCategoryItems('biryani', 'Biryani Section 🍚');
      } else if (lower === '2' || lower.includes('veg starter')) {
        this.showBotCategoryItems('starters', 'Veg Starters 🥦', true);
      } else if (lower === '3' || lower.includes('non veg starter') || lower.includes('non-veg')) {
        this.showBotCategoryItems('starters', 'Non-Veg Starters 🍗', false);
      } else if (lower === '4' || lower.includes('noodle')) {
        this.showBotCategoryItems('noodles', 'Noodles Section 🍜');
      } else if (lower === '5' || lower.includes('rice')) {
        this.showBotCategoryItems('rice', 'Rice Items 🍛');
      } else if (lower === '6' || lower.includes('combo')) {
        this.showBotCombos();
      } else {
        this.appendBotMessage("Please choose a valid number (1 to 6) or tap one of the options below:", null, [
          { text: "1. Biryani", val: "1" },
          { text: "2. Veg Starters", val: "2" },
          { text: "3. Non-Veg Starters", val: "3" },
          { text: "4. Noodles", val: "4" },
          { text: "5. Rice Items", val: "5" },
          { text: "6. Combos", val: "6" }
        ]);
      }
      return;
    }

    // STEP 2: Item selection inside category
    if (step === 'choose_item') {
      const items = this.botState.currentCategoryItems || [];
      const index = parseInt(lower, 10) - 1;

      if (!isNaN(index) && items[index]) {
        const item = items[index];
        this.botState.pendingItem = item;

        // If item has dual sizes (S and F), prompt size first
        if (item.prices.S && item.prices.F) {
          this.botState.step = 'choose_size';
          this.appendBotMessage(`You selected *${item.name}*!\n\nPlease choose portion size:\n1️⃣ Small - ₹${item.prices.S}\n2️⃣ Full - ₹${item.prices.F}`, item.image, [
            { text: `1. Small (₹${item.prices.S})`, val: "Small" },
            { text: `2. Full (₹${item.prices.F})`, val: "Full" }
          ]);
        } else {
          // Single size (Full / Standard)
          this.botState.selectedSize = item.prices.F ? 'F' : 'S';
          this.botState.selectedPrice = item.prices.F || item.prices.S;
          this.botState.selectedSizeLabel = item.prices.F ? 'Full' : 'Standard';
          this.askBotSpiceLevel();
        }
      } else {
        this.appendBotMessage("Invalid dish number. Please select from the list or tap an option below.");
      }
      return;
    }

    // STEP 3: Size selection (Small or Full)
    if (step === 'choose_size') {
      const item = this.botState.pendingItem;
      if (lower === '1' || lower === 'small' || lower === 's') {
        this.botState.selectedSize = 'S';
        this.botState.selectedPrice = item.prices.S;
        this.botState.selectedSizeLabel = 'Small';
        this.askBotSpiceLevel();
      } else if (lower === '2' || lower === 'full' || lower === 'f') {
        this.botState.selectedSize = 'F';
        this.botState.selectedPrice = item.prices.F;
        this.botState.selectedSizeLabel = 'Full';
        this.askBotSpiceLevel();
      } else {
        this.appendBotMessage(`Please choose portion size for *${item.name}*:\n1️⃣ Small (₹${item.prices.S})\n2️⃣ Full (₹${item.prices.F})`, null, [
          { text: `Small (₹${item.prices.S})`, val: "Small" },
          { text: `Full (₹${item.prices.F})`, val: "Full" }
        ]);
      }
      return;
    }

    // STEP 4: Spice level selection
    if (step === 'choose_spice') {
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

      const item = this.botState.pendingItem;
      const sizeLabel = this.botState.selectedSizeLabel || 'Full';
      const price = this.botState.selectedPrice;

      // Add to bot cart
      this.botState.cart.push({
        id: item.id,
        name: item.name,
        size: this.botState.selectedSize,
        sizeLabel: sizeLabel,
        price: price,
        spice: spice,
        spiceName: spiceName,
        qty: 1,
        veg: item.veg
      });

      // Also sync to main website cart for convenience!
      this.cart.push({
        id: item.id,
        name: item.name,
        category: item.category,
        size: this.botState.selectedSize,
        sizeLabel: sizeLabel,
        price: price,
        qty: 1,
        spice: spice,
        image: item.image,
        veg: item.veg
      });
      this.saveCart();
      this.updateCartUI();

      const total = this.botState.cart.reduce((sum, i) => sum + (i.price * i.qty), 0);

      this.botState.step = 'after_add';
      this.appendBotMessage(
        `✅ Added *${item.name}* (${sizeLabel}) with *${spiceName}* to your order!\n\n🛒 *Items in Order: ${this.botState.cart.length} | Current Total: ₹${total}*\n\nWhat would you like to do next?\n1️⃣ Add More Items\n2️⃣ Order Now / Checkout 🛎️`,
        null,
        [
          { text: "1. Add More Items", val: "more" },
          { text: "2. Order Now 🛎️", val: "checkout" }
        ]
      );
      return;
    }

    // STEP 5: After Add (Add More or Checkout)
    if (step === 'after_add') {
      if (lower === '1' || lower.includes('more') || lower.includes('add')) {
        this.botState.step = 'choose_category';
        this.appendBotMessage("Please choose section to add more items:\n1️⃣ Biryani Section 🍚\n2️⃣ Veg Starters 🥦\n3️⃣ Non-Veg Starters 🍗\n4️⃣ Noodles 🍜\n5️⃣ Rice Items 🍛\n6️⃣ Special Combos 🎁", null, [
          { text: "1. Biryani", val: "1" },
          { text: "2. Veg Starters", val: "2" },
          { text: "3. Non-Veg Starters", val: "3" },
          { text: "4. Noodles", val: "4" },
          { text: "5. Rice Items", val: "5" },
          { text: "6. Combos", val: "6" }
        ]);
      } else if (lower === '2' || lower.includes('order') || lower.includes('checkout') || lower.includes('now')) {
        this.promptBotOrderType();
      } else {
        this.appendBotMessage("Please choose:\n1️⃣ Add More Items\n2️⃣ Order Now / Checkout", null, [
          { text: "1. Add More Items", val: "more" },
          { text: "2. Order Now 🛎️", val: "checkout" }
        ]);
      }
      return;
    }

    // STEP 6: Order Type (Advance, Delivery, Call)
    if (step === 'choose_order_type') {
      const subtotal = this.botState.cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
      const advanceAmount = Math.ceil(subtotal / 2);
      const balanceAmount = subtotal - advanceAmount;

      if (lower === '1' || lower.includes('advance') || lower.includes('eating') || lower.includes('restaurant')) {
        this.botState.orderType = 'Advance';
        this.botState.step = 'advance_details';
        this.appendBotMessage(
          `🍽️ *ADVANCE BOOKING (EATING IN RESTAURANT)*\n━━━━━━━━━━━━━━━━━━━━━━\nTotal Food Bill: *₹${subtotal}*\n💰 *50% Advance Payable Now: ₹${advanceAmount}*\n💵 *Balance Payable at Table: ₹${balanceAmount}*\n\n⚡ *20-MINUTE PREPARATION COMMITMENT:*\nAs soon as advance is confirmed, our chef fires up your order immediately so it is hot & ready when you arrive in 20 minutes!\n\n📲 *PLEASE SCAN BHARATPE QR TO PAY 50% ADVANCE:*\n• Merchant: *YELLAMLA SANDEEP*\n• UPI ID: *BHARATPE2I0U0D1W7A42341@unitype*\n\n_Please enter your Name & WhatsApp Number (and 12-digit UTR if paid) to finalize booking:_`,
          '/images/juno-upi-scanner.jpg',
          [
            { text: "Paid ₹" + advanceAmount + " on Scanner", val: "Paid Advance" },
            { text: "📋 Copy UPI ID", val: "copy_upi" }
          ]
        );
      } else if (lower === '2' || lower.includes('delivery') || lower.includes('home')) {
        this.botState.orderType = 'Delivery';
        this.botState.step = 'delivery_details';
        this.appendBotMessage(
          `🛵 *HOME DELIVERY IN BODUPPAL*\n━━━━━━━━━━━━━━━━━━━━━━\nTotal Bill: *₹${subtotal}* (Cash / UPI on Delivery)\n\n⚡ *PROMISE: WE WILL DELIVER IN ONLY 20 MINUTES!* ⏱️\n\nPlease reply with your:\n*Name, Phone Number, and Complete Boduppal Delivery Address:*`,
          null,
          [
            { text: "Canara Nagar, Boduppal", val: "Canara Nagar, Boduppal" }
          ]
        );
      } else if (lower === '3' || lower.includes('call') || lower.includes('pickup')) {
        this.botState.orderType = 'Call';
        this.botState.step = 'call_details';
        this.appendBotMessage(
          `📞 *DIRECT CALL / COUNTER PICKUP ORDER*\n━━━━━━━━━━━━━━━━━━━━━━\nTotal Bill: *₹${subtotal}*\n\n⚡ *Food will be packed hot in 20 minutes!*\nOwner Hotline: *+91 90145 61737*\n\nPlease reply with your *Name & Phone Number* for counter pickup:`,
          null,
          [
            { text: "Self Pickup in 20 Mins", val: "Self Pickup in 20 Mins" }
          ]
        );
      } else {
        this.appendBotMessage("Please choose order type (1, 2, or 3):", null, [
          { text: "1. Advance Booking", val: "1" },
          { text: "2. Home Delivery", val: "2" },
          { text: "3. Direct Call", val: "3" }
        ]);
      }
      return;
    }

    // Handle Copy UPI shortcut
    if (lower === 'copy_upi') {
      this.copyUPI();
      this.appendBotMessage("📋 Copied UPI ID: *BHARATPE2I0U0D1W7A42341@unitype*\nOpen GPay/PhonePe to pay 50% advance and reply with your details to confirm!");
      return;
    }

    // Handle Open in Real WhatsApp button
    if (lower === 'open_real_wa' || lower.includes('real whatsapp')) {
      const rawMsg = this.botState.lastSummary || "Hello JUNO Kitchen & Co., I would like to place an order.";
      const encoded = encodeURIComponent(rawMsg);
      window.open(`https://wa.me/919014561737?text=${encoded}`, '_blank');
      return;
    }

    // STEP 7: Customer details collected -> Generate Final 20-Min Confirmation!
    if (step === 'advance_details' || step === 'delivery_details' || step === 'call_details') {
      this.finalizeBotOrder(text);
      return;
    }

    // Default fallback
    this.appendBotMessage("Type *menu* to view dishes or *hi* to restart.");
  }

  showBotCategoryItems(categoryId, categoryTitle, isVegFilter = null) {
    let items = this.data.items.filter(i => i.category === categoryId);
    if (isVegFilter !== null) {
      items = items.filter(i => i.veg === isVegFilter);
    }

    this.botState.currentCategoryItems = items;
    this.botState.step = 'choose_item';

    let msg = `✨ *JUNO Kitchen & Co. - ${categoryTitle}*\n━━━━━━━━━━━━━━━━━━━━━━\n`;
    items.forEach((item, idx) => {
      const priceText = item.prices.S && item.prices.F 
        ? `Small: ₹${item.prices.S} | Full: ₹${item.prices.F}`
        : `₹${item.prices.F || item.prices.S}`;
      msg += `${idx + 1}️⃣ *${item.name}* - ${priceText}\n`;
    });
    msg += `━━━━━━━━━━━━━━━━━━━━━━\nReply with the *Dish Number (e.g. 1, 2, 3...)* to select:`;

    const chips = items.map((item, idx) => ({
      text: `${idx + 1}. ${item.name}`,
      val: (idx + 1).toString()
    }));
    chips.push({ text: "🔙 Main Menu", val: "hi" });

    this.appendBotMessage(msg, items[0]?.image, chips);
  }

  showBotCombos() {
    const combos = this.data.items.filter(i => i.category === 'combos');
    this.botState.currentCategoryItems = combos;
    this.botState.step = 'choose_item';

    let msg = `🎁 *JUNO Kitchen & Co. - Special Combos (Best Value!)*\n━━━━━━━━━━━━━━━━━━━━━━\n`;
    combos.forEach((combo, idx) => {
      msg += `${idx + 1}️⃣ *${combo.name}* - *₹${combo.prices.F}*\n   • ${combo.description}\n`;
    });
    msg += `━━━━━━━━━━━━━━━━━━━━━━\nReply with the *Combo Number (1, 2, or 3)* to select:`;

    const chips = combos.map((c, idx) => ({
      text: `${idx + 1}. ${c.name} (₹${c.prices.F})`,
      val: (idx + 1).toString()
    }));
    chips.push({ text: "🔙 Main Menu", val: "hi" });

    this.appendBotMessage(msg, combos[0]?.image, chips);
  }

  askBotSpiceLevel() {
    this.botState.step = 'choose_spice';
    const item = this.botState.pendingItem;
    const sizeLabel = this.botState.selectedSizeLabel || 'Full';

    this.appendBotMessage(
      `🌶️ *Please select Spice Level for ${item.name} (${sizeLabel}):*\n\n1️⃣ No Spicy (Mild 🌶️)\n2️⃣ Medium Spicy (🌶️🌶️ Classic)\n3️⃣ Spicy (🌶️🌶️🌶️ Hot & Fiery)\n\n_Reply with 1, 2, or 3_`,
      null,
      [
        { text: "1. No Spicy (Mild)", val: "1" },
        { text: "2. Medium Spicy", val: "2" },
        { text: "3. Spicy 🌶️", val: "3" }
      ]
    );
  }

  promptBotOrderType() {
    this.botState.step = 'choose_order_type';
    const subtotal = this.botState.cart.reduce((sum, i) => sum + (i.price * i.qty), 0);

    this.appendBotMessage(
      `🛎️ *CHECKOUT - JUNO KITCHEN & CO.*\n━━━━━━━━━━━━━━━━━━━━━━\nTotal Food Bill: *₹${subtotal}*\n\nPlease select your Order Option:\n\n1️⃣ *Advance Booking* (Dine-in Table Booking with 50% Token Scanner)\n2️⃣ *Home Delivery* (Direct to Doorstep in Boduppal)\n3️⃣ *Direct Call Order* (Hot Counter Pickup)\n\n_Reply with 1, 2, or 3_`,
      null,
      [
        { text: "1. Advance Booking", val: "1" },
        { text: "2. Home Delivery", val: "2" },
        { text: "3. Direct Call Order", val: "3" }
      ]
    );
  }

  finalizeBotOrder(customerText) {
    const subtotal = this.botState.cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
    const advanceAmount = Math.ceil(subtotal / 2);
    const balanceAmount = subtotal - advanceAmount;
    const orderType = this.botState.orderType;

    let orderTypeTitle = "🛵 Home Delivery";
    if (orderType === 'Advance') orderTypeTitle = "🍽️ Advance Booking (Table Reserved)";
    if (orderType === 'Call') orderTypeTitle = "📞 Direct Call / Counter Pickup";

    let confirmationMsg = `🎉 *ORDER SUCCESSFULLY CONFIRMED!* 🎉\n━━━━━━━━━━━━━━━━━━━━━━\n`;
    confirmationMsg += `🏪 *JUNO Kitchen & Co.*\n📍 *Canara Nagar, Boduppal, Hyderabad*\n\n`;
    confirmationMsg += `⚡ *WE WILL DELIVER / PREPARE IN ONLY 20 MINUTES!* ⏱️\n`;
    confirmationMsg += `━━━━━━━━━━━━━━━━━━━━━━\n`;
    confirmationMsg += `🏷️ *Order Type:* ${orderTypeTitle}\n`;
    confirmationMsg += `👤 *Customer Details:* ${customerText}\n`;
    confirmationMsg += `━━━━━━━━━━━━━━━━━━━━━━\n`;
    confirmationMsg += `📋 *Items Ordered:*\n`;

    this.botState.cart.forEach((item, idx) => {
      confirmationMsg += `${idx + 1}. *${item.name}* (${item.sizeLabel}) - ₹${item.price}\n   • Taste: *${item.spiceName}*\n`;
    });

    confirmationMsg += `━━━━━━━━━━━━━━━━━━━━━━\n`;
    confirmationMsg += `💰 *Total Bill: ₹${subtotal}*\n`;

    if (orderType === 'Advance') {
      confirmationMsg += `💳 *50% Advance Token:* ₹${advanceAmount} (Paid via BharatPe QR)\n`;
      confirmationMsg += `💵 *Balance at Table:* ₹${balanceAmount}\n`;
    }

    confirmationMsg += `━━━━━━━━━━━━━━━━━━━━━━\n`;
    confirmationMsg += `📞 *OWNER HOTLINE / CALL NUMBER:*\n`;
    confirmationMsg += `📱 *+91 90145 61737* (Save & call anytime for live kitchen updates)\n`;
    confirmationMsg += `━━━━━━━━━━━━━━━━━━━━━━\n`;
    confirmationMsg += `🙏 Thank you! Your food is now sizzling in our kitchen.`;

    this.appendBotMessage(confirmationMsg, null, [
      { text: "📲 Open in Real WhatsApp", val: "open_real_wa" },
      { text: "🔄 Start New Order", val: "hi" }
    ]);

    this.botState.step = 'order_completed';
    this.botState.lastSummary = confirmationMsg;
  }

  openLightbox(src, title, subtitle) {
    const modal = document.getElementById('lightbox-modal');
    const img = document.getElementById('lightbox-image');
    const titleEl = document.getElementById('lightbox-title');
    const subtitleEl = document.getElementById('lightbox-subtitle');

    if (modal && img) {
      img.src = src;
      if (titleEl) titleEl.textContent = title;
      if (subtitleEl) subtitleEl.textContent = subtitle;
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  closeLightbox() {
    const modal = document.getElementById('lightbox-modal');
    if (modal) {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  showToast(message) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast show';
    toast.innerHTML = `
      <svg class="w-5 h-5 text-amber-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
      <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 2800);
  }

  attachEventListeners() {
    // Diet Filters (All, Veg, Non-Veg)
    document.querySelectorAll('.diet-filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.diet-filter-btn').forEach(b => {
          b.classList.remove('active', 'bg-amber-400', 'text-gray-950', 'border-amber-400');
          b.classList.add('bg-gray-900/60', 'text-gray-300', 'border-amber-500/20');
        });
        btn.classList.add('active', 'bg-amber-400', 'text-gray-950', 'border-amber-400');
        btn.classList.remove('bg-gray-900/60', 'text-gray-300', 'border-amber-500/20');

        this.selectedDiet = btn.getAttribute('data-diet');
        this.renderMenuGrid();
      });
    });

    // Search Input
    const searchInput = document.getElementById('menu-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value;
        this.renderMenuGrid();
      });
    }

    // Close drawers and modals on Escape
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeCart();
        this.closeLightbox();
        this.closeBotModal();
      }
    });
  }
}

// Global instance attached to window for instant access
window.app = new ReddysApp();
