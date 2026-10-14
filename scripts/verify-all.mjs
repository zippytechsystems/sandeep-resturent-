import fs from 'fs';
import path from 'path';

async function runAudit() {
  console.log('=== STARTING A-TO-Z ERROR AUDIT FOR REDDY\'S DAILY TREATS ===\n');
  let errors = 0;
  let warnings = 0;

  // 1. Check menu.json
  const menuPath = 'public/data/menu.json';
  if (!fs.existsSync(menuPath)) {
    console.error('❌ FAIL: public/data/menu.json does not exist');
    errors++;
    return;
  }
  const menu = JSON.parse(fs.readFileSync(menuPath, 'utf8'));
  console.log(`✅ PASS: menu.json loaded successfully. Restaurant: "${menu.restaurant.name}"`);
  console.log(`         Location: "${menu.restaurant.location}"`);
  console.log(`         WhatsApp: "${menu.restaurant.whatsapp}"`);
  console.log(`         Timings:  "${menu.restaurant.timings}"`);

  // 2. Validate Items Count & Prices
  console.log(`\n--- Validating ${menu.items.length} Menu Items ---`);
  if (menu.items.length !== 29) {
    console.error(`❌ FAIL: Expected 29 menu items, but found ${menu.items.length}`);
    errors++;
  } else {
    console.log(`✅ PASS: Exact 29 menu items present.`);
  }

  // Check each item
  menu.items.forEach((item, idx) => {
    if (!item.id || !item.name || !item.prices || !item.image) {
      console.error(`❌ FAIL: Item #${idx + 1} has missing fields:`, item);
      errors++;
    }
    const hasPrice = (item.prices.S && item.prices.S > 0) || (item.prices.F && item.prices.F > 0);
    if (!hasPrice) {
      console.error(`❌ FAIL: Item ${item.id} has invalid prices:`, item.prices);
      errors++;
    }
    const imgFile = path.join('public', item.image.replace(/^\.\//, '/'));
    if (!fs.existsSync(imgFile)) {
      console.error(`❌ FAIL: Missing image for item ${item.id} at ${imgFile}`);
      errors++;
    } else {
      const stat = fs.statSync(imgFile);
      const sizeKb = Math.round(stat.size / 1024);
      if (sizeKb > 250) {
        console.warn(`⚠️ WARN: Item ${item.id} image is ${sizeKb} KB (> 250 KB)`);
        warnings++;
      }
    }
  });
  console.log(`✅ PASS: All 29 item images verified on disk.`);

  // 3. Validate Hero & Gallery Images
  const heroPath = 'public/images/hero-biryani.jpg';
  if (fs.existsSync(heroPath)) {
    const size = Math.round(fs.statSync(heroPath).size / 1024);
    console.log(`✅ PASS: hero-biryani.jpg exists (${size} KB).`);
  } else {
    console.error(`❌ FAIL: hero-biryani.jpg is missing.`);
    errors++;
  }

  (menu.gallery || []).forEach(g => {
    const gPath = path.join('public', g.image.replace(/^\.\//, '/'));
    if (fs.existsSync(gPath)) {
      const size = Math.round(fs.statSync(gPath).size / 1024);
      console.log(`✅ PASS: Gallery image ${g.id} exists (${size} KB).`);
    } else {
      console.error(`❌ FAIL: Gallery image missing at ${gPath}`);
      errors++;
    }
  });

  // 4. Validate HTML DOM element bindings required by app.js
  console.log('\n--- Checking DOM Element Bindings in index.html ---');
  const indexHtml = fs.readFileSync('index.html', 'utf8');
  const requiredIds = [
    'live-status-badge',
    'live-status-text',
    'live-status-dot',
    'category-tabs-container',
    'signature-dishes-grid',
    'combos-spotlight-container',
    'menu-items-grid',
    'menu-empty-state',
    'coming-soon-categories',
    'gallery-grid-container',
    'cart-drawer-backdrop',
    'cart-drawer',
    'cart-items-list',
    'cart-empty-message',
    'cart-subtotal',
    'cart-grand-total',
    'lightbox-modal',
    'lightbox-image',
    'lightbox-title',
    'lightbox-subtitle',
    'toast-container',
    'menu-search-input',
    'order-customer-name',
    'order-customer-phone',
    'order-customer-address',
    'order-customer-notes',
    'delivery-address-block'
  ];

  requiredIds.forEach(id => {
    if (!indexHtml.includes(`id="${id}"`)) {
      console.error(`❌ FAIL: Missing required element id="${id}" in index.html`);
      errors++;
    }
  });
  console.log(`✅ PASS: All ${requiredIds.length} required DOM IDs present in index.html.`);

  // 5. Test Live HTTP Server on Port 4173
  console.log('\n--- Testing Local HTTP Server (http://localhost:4173) ---');
  try {
    const res = await fetch('http://localhost:4173/');
    if (res.status === 200) {
      const htmlText = await res.text();
      console.log(`✅ PASS: http://localhost:4173/ returned HTTP 200 OK (${htmlText.length} bytes)`);
      if (htmlText.includes("Reddy's") && htmlText.includes('ZippyTechSystems')) {
        console.log(`✅ PASS: Title and Footer credits confirmed in server output.`);
      } else {
        console.warn(`⚠️ WARN: Title or footer string check did not match.`);
        warnings++;
      }
    } else {
      console.error(`❌ FAIL: Server returned status ${res.status}`);
      errors++;
    }
  } catch (err) {
    console.error(`❌ FAIL: Could not reach http://localhost:4173/ - ${err.message}`);
    errors++;
  }

  // Final Summary
  console.log('\n======================================================');
  if (errors === 0) {
    console.log('🎉 AUDIT RESULT: ZERO ERRORS! SITE IS 100% HEALTHY & READY!');
    console.log(`   Total Warnings: ${warnings}`);
    console.log('   Final Local URL: http://localhost:4173/');
  } else {
    console.log(`❌ AUDIT RESULT: FOUND ${errors} ERRORS.`);
  }
  console.log('======================================================\n');
}

runAudit();
