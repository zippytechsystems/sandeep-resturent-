(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={restaurant:{name:`JUNO Kitchen & Co.`,subtitle:`Biryani • Fast Food • Juices • Mocktails • Shakes`,tagline:`Good Food Good Vibes`,phone:`+91 90145 61737`,whatsapp:`+919014561737`,location:`Canara Nagar, Boduppal, Hyderabad, Telangana 500092`,mapsUrl:`https://maps.google.com/?q=Canara+Nagar+Boduppal+Hyderabad`,timings:`11:30 AM - 11:30 PM (Open All 7 Days)`,currency:`₹`},categories:[{id:`biryani`,name:`Biryani's`,icon:`utensils`},{id:`starters`,name:`Starters`,icon:`flame`},{id:`noodles`,name:`Noodles`,icon:`soup`},{id:`rice`,name:`Rice`,icon:`wheat`},{id:`combos`,name:`Combos`,icon:`gift`},{id:`momos`,name:`Momo's`,icon:`sparkles`,comingSoon:!0},{id:`milkshakes`,name:`Milkshakes`,icon:`cup-soda`,comingSoon:!0},{id:`cold-drinks`,name:`Cold Drinks`,icon:`glass-water`,comingSoon:!0}],items:[{id:`chicken-biryani`,name:`Chicken Biryani`,category:`biryani`,veg:!1,signature:!0,description:`Fragrant long-grain basmati with succulent spiced chicken cooked in authentic Hyderabadi dum style.`,image:`./images/menu/chicken-biryani.jpg`,prices:{S:130,F:220}},{id:`family-pack-biryani`,name:`Family Pack Biryani`,category:`biryani`,veg:!1,signature:!1,description:`Hearty copper handi biryani feast for 3-4 people, served with creamy raita and spicy mirchi ka salan.`,image:`./images/menu/family-pack-biryani.jpg`,prices:{F:460}},{id:`jumbo-pack-biryani`,name:`Jumbo Pack Biryani`,category:`biryani`,veg:!1,signature:!1,description:`Grand feast portion loaded with tender chicken pieces, boiled eggs, and royal saffron aroma for large gatherings.`,image:`./images/menu/jumbo-pack-biryani.jpg`,prices:{F:690}},{id:`fried-piece-biryani`,name:`Fried Piece Biryani`,category:`biryani`,veg:!1,signature:!0,description:`Classic fragrant dum rice topped with crispy golden fried chicken pieces, caramelized onions and lemon.`,image:`./images/menu/fried-piece-biryani.jpg`,prices:{S:140,F:240}},{id:`veg-manchurian`,name:`Veg Manchurian`,category:`starters`,veg:!0,signature:!1,description:`Crispy vegetable balls tossed in rich dark soy-garlic gravy with fresh scallion garnish.`,image:`./images/menu/veg-manchurian.jpg`,prices:{S:70,F:120}},{id:`chicken-lollipop`,name:`Chicken Lollipop`,category:`starters`,veg:!1,signature:!0,description:`Crisp frenched chicken drumettes coated in fiery Indo-Chinese glaze with delicate scallions.`,image:`./images/menu/chicken-lollipop.jpg`,prices:{S:120}},{id:`chicken-65`,name:`Chicken 65`,category:`starters`,veg:!1,signature:!0,description:`Iconic Hyderabadi crispy spiced red chicken tossed with curry leaves, slit green chillies, and lemon.`,image:`./images/menu/chicken-65.jpg`,prices:{S:130,F:220}},{id:`chicken-manchurian`,name:`Chicken Manchurian`,category:`starters`,veg:!1,signature:!1,description:`Tender chicken chunks tossed in a glossy savoury garlic, ginger, and soy sauce glaze.`,image:`./images/menu/chicken-manchurian.jpg`,prices:{S:120,F:200}},{id:`chilli-chicken`,name:`Chilli Chicken`,category:`starters`,veg:!1,signature:!1,description:`Classic wok-tossed spicy chicken with crunchy bell peppers, diced onions, and green chillies.`,image:`./images/menu/chilli-chicken.jpg`,prices:{S:130,F:220}},{id:`ginger-chicken`,name:`Ginger Chicken`,category:`starters`,veg:!1,signature:!1,description:`Golden crispy chicken pieces infused with julienned fresh ginger, aromatic curry leaves, and spices.`,image:`./images/menu/ginger-chicken.jpg`,prices:{S:130,F:220}},{id:`veg-noodles`,name:`Veg Noodles`,category:`noodles`,veg:!0,signature:!1,description:`Classic Hakka noodles tossed with crunchy julienned vegetables and subtle oriental seasonings.`,image:`./images/menu/veg-noodles.jpg`,prices:{S:70,F:120}},{id:`veg-manchurian-noodles`,name:`Veg Manchurian Noodles`,category:`noodles`,veg:!0,signature:!1,description:`Wok noodles paired with crispy veg manchurian dumplings bathed in rich garlic soy gravy.`,image:`./images/menu/veg-manchurian-noodles.jpg`,prices:{S:80,F:130}},{id:`veg-schezwan-noodles`,name:`Veg Schezwan Noodles`,category:`noodles`,veg:!0,signature:!1,description:`Fiery stir-fried noodles seasoned with house-made Schezwan sauce, red chilli flakes, and spring onion.`,image:`./images/menu/veg-schezwan-noodles.jpg`,prices:{S:90,F:140}},{id:`egg-noodles`,name:`Egg Noodles`,category:`noodles`,veg:!1,signature:!1,description:`Delicate wheat noodles stir-fried with fluffy scrambled eggs, crisp veggies, and crushed pepper.`,image:`./images/menu/egg-noodles.jpg`,prices:{S:80,F:130}},{id:`chicken-noodles`,name:`Chicken Noodles`,category:`noodles`,veg:!1,signature:!1,description:`Savory wok noodles loaded with tender chicken slices, fresh vegetables, and savory wok aroma.`,image:`./images/menu/chicken-noodles.jpg`,prices:{S:90,F:159}},{id:`chicken-schezwan-noodles`,name:`Chicken Schezwan Noodles`,category:`noodles`,veg:!1,signature:!1,description:`Spicy wok noodles packed with chicken strips tossed in spicy red chilli garlic Schezwan blend.`,image:`./images/menu/chicken-schezwan-noodles.jpg`,prices:{S:100,F:169}},{id:`veg-fried-rice`,name:`Veg Fried Rice`,category:`rice`,veg:!0,signature:!1,description:`Aromatic basmati rice wok-tossed with finely diced carrots, beans, and capsicum.`,image:`./images/menu/veg-fried-rice.jpg`,prices:{S:70,F:120}},{id:`jeera-rice`,name:`Jeera Rice`,category:`rice`,veg:!0,signature:!1,description:`Fluffy basmati tempered with toasted cumin seeds, pure desi ghee, and fresh coriander.`,image:`./images/menu/jeera-rice.jpg`,prices:{S:70,F:120}},{id:`veg-manchurian-rice`,name:`Veg Manchurian Rice`,category:`rice`,veg:!0,signature:!1,description:`Stir-fried veg rice served alongside savory veg manchurian dumplings in lush gravy.`,image:`./images/menu/veg-manchurian-rice.jpg`,prices:{S:80,F:140}},{id:`veg-schezwan-rice`,name:`Veg Schezwan Rice`,category:`rice`,veg:!0,signature:!1,description:`Spicy and tangy Schezwan fried rice loaded with crisp garden vegetables.`,image:`./images/menu/veg-schezwan-rice.jpg`,prices:{S:80,F:140}},{id:`veg-paneer-rice`,name:`Veg Paneer Rice`,category:`rice`,veg:!0,signature:!1,description:`Fragrant fried rice loaded with golden seared paneer cubes and crunchy bell peppers.`,image:`./images/menu/veg-paneer-rice.jpg`,prices:{S:100,F:180}},{id:`egg-fried-rice`,name:`Egg Fried Rice`,category:`rice`,veg:!1,signature:!1,description:`Wok-tossed rice with golden scrambled egg ribbons and fresh green spring onions.`,image:`./images/menu/egg-fried-rice.jpg`,prices:{S:80,F:140}},{id:`egg-manchurian-rice`,name:`Egg Manchurian Rice`,category:`rice`,veg:!1,signature:!1,description:`Delicious egg fried rice accompanied by a rich savory manchurian sauce reduction.`,image:`./images/menu/egg-manchurian-rice.jpg`,prices:{S:90,F:160}},{id:`egg-schezwan-fried-rice`,name:`Egg Schezwan Fried Rice`,category:`rice`,veg:!1,signature:!1,description:`Spicy Schezwan tossed egg fried rice with aromatic peppers and chilli aromatics.`,image:`./images/menu/egg-schezwan-fried-rice.jpg`,prices:{S:90,F:160}},{id:`chicken-fried-rice`,name:`Chicken Fried Rice`,category:`rice`,veg:!1,signature:!1,description:`Satisfying fried rice tossed with tender shredded chicken, egg, and fresh scallions.`,image:`./images/menu/chicken-fried-rice.jpg`,prices:{S:90,F:160}},{id:`chicken-schezwan-fried-rice`,name:`Chicken Schezwan Fried Rice`,category:`rice`,veg:!1,signature:!1,description:`Fiery wok-tossed chicken fried rice in signature Schezwan pepper sauce.`,image:`./images/menu/chicken-schezwan-fried-rice.jpg`,prices:{S:100,F:170}},{id:`biryani-combo`,name:`Biryani Royal Combo`,category:`combos`,veg:!1,signature:!0,isCombo:!0,bestValue:!0,comboIncludes:[`Chicken Biryani (Full)`,`2x Chicken Lollipops`,`2x Chilled Cold Drinks`],description:`The ultimate treat: Full Chicken Biryani + 2 Chicken Lollipops + 2 Chilled Cold Drinks.`,image:`./images/menu/biryani-combo.jpg`,prices:{F:280}},{id:`veg-combo`,name:`Veg Feast Combo`,category:`combos`,veg:!0,signature:!1,isCombo:!0,bestValue:!0,comboIncludes:[`Veg Manchurian`,`Veg Rice or Noodles`,`Veg Paneer Rice`,`2x Chilled Cold Drinks`],description:`Vegetarian feast: Veg Manchurian + Veg Rice or Noodles + Veg Paneer Rice + 2 Chilled Cold Drinks.`,image:`./images/menu/veg-combo.jpg`,prices:{F:229}},{id:`nonveg-combo`,name:`Non-Veg Deluxe Combo`,category:`combos`,veg:!1,signature:!0,isCombo:!0,bestValue:!0,comboIncludes:[`Chicken Manchurian`,`Chicken Rice or Noodles`,`Small Chicken Biryani`,`2x Chilled Cold Drinks`],description:`Mega combo: Chicken Manchurian + Chicken Rice or Noodles + Small Chicken Biryani + 2 Chilled Cold Drinks.`,image:`./images/menu/nonveg-combo.jpg`,prices:{F:319}}],gallery:[{id:`gallery-1`,title:`Royal Dining Ambiance`,subtitle:`Luxury five-star experience in Boduppal`,image:`./images/gallery/gallery-1.jpg`},{id:`gallery-2`,title:`Live Wok Artistry`,subtitle:`High-heat authentic Indo-Chinese wok mastery`,image:`./images/gallery/gallery-2.jpg`},{id:`gallery-3`,title:`Traditional Dum Feast`,subtitle:`Slow-cooked copper handi biryani`,image:`./images/gallery/gallery-3.jpg`},{id:`gallery-4`,title:`Charcoal & Spices`,subtitle:`Freshly ground secret spice blends`,image:`./images/gallery/gallery-4.jpg`}]};window.app=new class{constructor(){this.data=e,this.selectedCategory=`all`,this.selectedDiet=`all`,this.searchQuery=``,this.itemSizeSelections={},this.cart=[],this.orderType=`Takeaway`,this.init()}async init(){try{let e=await fetch(`./data/menu.json`).catch(()=>fetch(`./menu.json`));if(e&&e.ok){let t=await e.json();t&&t.items&&t.items.length>0&&(this.data=t)}}catch{console.log(`Using pre-bundled menu data`)}this.data.categories.some(e=>e.id===`all`)||this.data.categories.unshift({id:`all`,name:`All Treats`,icon:`sparkles`}),this.data.items.forEach(e=>{e.image&&e.image.startsWith(`/images/`)&&(e.image=`.`+e.image),e.prices.S?this.itemSizeSelections[e.id]=`S`:this.itemSizeSelections[e.id]=`F`}),this.data.gallery&&this.data.gallery.forEach(e=>{e.image&&e.image.startsWith(`/images/`)&&(e.image=`.`+e.image)}),this.loadCart(),this.updateLiveStatus(),this.renderCategoryTabs(),this.renderSignatureDishes(),this.renderCombosSpotlight(),this.renderMenuGrid(),this.renderGallery(),this.updateCartUI(),this.attachEventListeners(),setInterval(()=>this.updateLiveStatus(),6e4)}updateLiveStatus(){let e=new Date,t=e.getTime()+e.getTimezoneOffset()*6e4,n=new Date(t+198e5),r=n.getHours(),i=n.getMinutes(),a=r*60+i,o=a>=690&&a<=1410,s=document.getElementById(`live-status-badge`),c=document.getElementById(`live-status-text`),l=document.getElementById(`live-status-dot`);s&&c&&l&&(o?(c.textContent=`OPEN NOW • Serving Fresh Hot Treats`,l.className=`w-2.5 h-2.5 rounded-full bg-emerald-400 pulse-active inline-block mr-2`,s.className=`inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 text-xs tracking-wider uppercase font-semibold`):(c.textContent=`CURRENTLY CLOSED • OPENS AT 11:30 AM (Pre-order on WhatsApp)`,l.className=`w-2.5 h-2.5 rounded-full bg-amber-400 inline-block mr-2`,s.className=`inline-flex items-center px-4 py-1.5 rounded-full bg-amber-950/70 border border-amber-500/40 text-amber-300 text-xs tracking-wider uppercase font-semibold`))}renderCategoryTabs(){let e=document.getElementById(`category-tabs-container`);e&&(e.innerHTML=this.data.categories.map(e=>{let t=this.selectedCategory===e.id,n=e.comingSoon?`<span class="ml-1 text-[10px] text-amber-400 uppercase tracking-widest font-normal">Soon</span>`:``;return`
        <button 
          type="button"
          data-category="${e.id}"
          class="category-tab-btn flex-shrink-0 px-5 py-2.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 flex items-center gap-1.5 border ${t?`bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-gray-950 font-bold border-amber-300 shadow-lg shadow-amber-500/20`:`bg-gray-900/60 text-gray-300 hover:text-white hover:bg-gray-800/80 border-amber-500/20`}"
        >
          <span>${e.name}</span>
          ${n}
        </button>
      `}).join(``),e.querySelectorAll(`.category-tab-btn`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`data-category`);this.selectedCategory=t,this.renderCategoryTabs(),this.renderMenuGrid()})}))}renderSignatureDishes(){let e=document.getElementById(`signature-dishes-grid`);e&&(e.innerHTML=this.data.items.filter(e=>e.signature).map(e=>{let t=this.itemSizeSelections[e.id]||(e.prices.S?`S`:`F`),n=e.prices[t]||e.prices.F||e.prices.S,r=e.prices.S&&e.prices.F;return`
        <div class="glass-panel glass-panel-hover rounded-2xl overflow-hidden flex flex-col group border border-amber-500/20" id="sig-card-${e.id}">
          <div class="relative aspect-[4/3] overflow-hidden bg-gray-950">
            <img 
              src="${e.image}" 
              alt="${e.name}" 
              loading="lazy"
              onerror="this.onerror=null; this.src='./images/hero-biryani.jpg';"
              class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-80"></div>
            
            <!-- Veg / NonVeg Tag -->
            <div class="absolute top-3 left-3 flex items-center gap-2">
              <span class="${e.veg?`veg-dot-box`:`nonveg-dot-box`} shadow-lg backdrop-blur-sm bg-black/60">
                <span class="${e.veg?`veg-dot`:`nonveg-triangle`}"></span>
              </span>
              <span class="text-[11px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-sm text-gray-300 border border-white/10">
                ${e.veg?`Pure Veg`:`Non-Veg`}
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
              <span class="text-lg font-bold font-serif text-amber-300" id="sig-price-${e.id}">₹${n}</span>
            </div>
          </div>

          <div class="p-5 flex-1 flex flex-col justify-between">
            <div>
              <h3 class="font-serif text-lg md:text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                ${e.name}
              </h3>
              <p class="text-gray-400 text-xs md:text-sm mt-1.5 line-clamp-2 font-sans leading-relaxed">
                ${e.description}
              </p>
            </div>

            <div class="mt-4 pt-3 border-t border-amber-500/10 flex items-center justify-between gap-3">
              <!-- Portion Selector if dual -->
              ${r?`
                <div class="portion-switch">
                  <button 
                    type="button"
                    data-item-btn="${e.id}"
                    data-size="S"
                    class="portion-btn ${t===`S`?`active`:``}"
                    onclick="app.toggleSize('${e.id}', 'S')"
                  >Small</button>
                  <button 
                    type="button"
                    data-item-btn="${e.id}"
                    data-size="F"
                    class="portion-btn ${t===`F`?`active`:``}"
                    onclick="app.toggleSize('${e.id}', 'F')"
                  >Full</button>
                </div>
              `:`
                <span class="text-xs text-gray-400 font-sans">
                  ${e.isCombo?`Feast Portion`:`Standard Portion`}
                </span>
              `}

              <button 
                type="button"
                class="btn-gold !py-2 !px-4 !text-xs"
                onclick="app.addToCart('${e.id}')"
              >
                <span>Add</span>
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
              </button>
            </div>
          </div>
        </div>
      `}).join(``))}renderCombosSpotlight(){let e=document.getElementById(`combos-spotlight-container`);e&&(e.innerHTML=this.data.items.filter(e=>e.category===`combos`).map(e=>{let t=(e.comboIncludes||[]).map(e=>`
        <li class="flex items-center gap-2 text-xs md:text-sm text-gray-300">
          <svg class="w-4 h-4 text-amber-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
          <span>${e}</span>
        </li>
      `).join(``);return`
        <div class="relative glass-panel rounded-3xl overflow-hidden border border-amber-500/30 flex flex-col group hover:border-amber-400 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10">
          <!-- Best Value Ribbon -->
          <div class="absolute top-0 right-0 z-20">
            <div class="shimmer-badge text-gray-950 font-bold text-[11px] tracking-wider uppercase py-1 px-5 rounded-bl-xl shadow-lg flex items-center gap-1">
              <span>★ BEST VALUE</span>
            </div>
          </div>

          <div class="relative aspect-[16/10] overflow-hidden bg-gray-950">
            <img 
              src="${e.image}" 
              alt="${e.name}" 
              loading="lazy"
              onerror="this.onerror=null; this.src='./images/hero-biryani.jpg';"
              class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-[#111122] via-transparent to-transparent"></div>
            
            <div class="absolute bottom-3 left-4">
              <span class="${e.veg?`veg-dot-box`:`nonveg-dot-box`} mr-2 shadow-md bg-black/60">
                <span class="${e.veg?`veg-dot`:`nonveg-triangle`}"></span>
              </span>
              <span class="text-xs font-semibold text-gray-300 bg-black/70 px-2.5 py-1 rounded-full border border-white/10">
                ${e.veg?`Vegetarian Platter`:`Non-Veg Royal Platter`}
              </span>
            </div>
          </div>

          <div class="p-6 flex-1 flex flex-col justify-between">
            <div>
              <div class="flex items-baseline justify-between">
                <h3 class="font-serif text-xl md:text-2xl font-bold text-white group-hover:text-amber-300 transition-colors">
                  ${e.name}
                </h3>
                <span class="text-2xl font-bold font-serif text-amber-400 ml-2">₹${e.prices.F}</span>
              </div>
              <p class="text-gray-400 text-xs md:text-sm mt-2 font-sans">
                ${e.description}
              </p>

              <div class="mt-4 pt-4 border-t border-amber-500/15">
                <p class="text-[11px] uppercase tracking-wider text-amber-300/80 font-semibold mb-2">Combo Platter Includes:</p>
                <ul class="space-y-1.5">
                  ${t}
                </ul>
              </div>
            </div>

            <div class="mt-6 pt-4 border-t border-amber-500/10">
              <button 
                type="button"
                class="btn-gold w-full !py-3 !text-sm"
                onclick="app.addToCart('${e.id}')"
              >
                <span>Order Combo for ₹${e.prices.F}</span>
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
            </div>
          </div>
        </div>
      `}).join(``))}renderMenuGrid(){let e=document.getElementById(`menu-items-grid`),t=document.getElementById(`menu-empty-state`),n=document.getElementById(`coming-soon-categories`);if(!e)return;let r=this.data.items;if(this.selectedCategory!==`all`&&(r=r.filter(e=>e.category===this.selectedCategory)),this.selectedDiet===`veg`?r=r.filter(e=>e.veg===!0):this.selectedDiet===`nonveg`&&(r=r.filter(e=>e.veg===!1)),this.searchQuery.trim()!==``){let e=this.searchQuery.toLowerCase();r=r.filter(t=>t.name.toLowerCase().includes(e)||t.description.toLowerCase().includes(e)||t.category.toLowerCase().includes(e))}let i=[`momos`,`milkshakes`,`cold-drinks`].includes(this.selectedCategory);n&&(i?n.classList.remove(`hidden`):n.classList.add(`hidden`)),r.length===0?(e.innerHTML=``,t&&!i&&t.classList.remove(`hidden`)):(t&&t.classList.add(`hidden`),e.innerHTML=r.map(e=>{let t=this.itemSizeSelections[e.id]||(e.prices.S?`S`:`F`),n=e.prices[t]||e.prices.F||e.prices.S,r=e.prices.S&&e.prices.F,i=e.isCombo||e.category===`combos`;return`
        <div class="glass-panel glass-panel-hover rounded-2xl overflow-hidden flex flex-col group border border-amber-500/15" id="card-${e.id}">
          <!-- Food Image with aspect 4:3 -->
          <div class="relative aspect-[4/3] overflow-hidden bg-gray-950">
            <img 
              src="${e.image}" 
              alt="${e.name}" 
              loading="lazy"
              onerror="this.onerror=null; this.src='./images/hero-biryani.jpg';"
              class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-[#111122] via-transparent to-transparent opacity-80"></div>
            
            <!-- Veg / Non-Veg dot symbol -->
            <div class="absolute top-3 left-3 flex items-center gap-1.5">
              <span class="${e.veg?`veg-dot-box`:`nonveg-dot-box`} shadow-md bg-black/60 backdrop-blur-sm">
                <span class="${e.veg?`veg-dot`:`nonveg-triangle`}"></span>
              </span>
            </div>

            <!-- Best Value Ribbon if combo -->
            ${i?`
              <div class="absolute top-3 right-3">
                <span class="shimmer-badge text-gray-950 text-[10px] tracking-wider uppercase font-extrabold px-2.5 py-1 rounded-full shadow">
                  ★ Best Value
                </span>
              </div>
            `:``}

            <!-- Price Badge on Image Corner -->
            <div class="absolute bottom-3 right-3 bg-black/85 backdrop-blur-md px-3 py-1 rounded-lg border border-amber-500/30">
              <span class="text-base md:text-lg font-bold font-serif text-amber-300" id="price-display-${e.id}">₹${n}</span>
            </div>
          </div>

          <!-- Content Details -->
          <div class="p-5 flex-1 flex flex-col justify-between">
            <div>
              <div class="flex items-start justify-between gap-2">
                <h3 class="font-serif text-base md:text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                  ${e.name}
                </h3>
              </div>
              <p class="text-gray-400 text-xs md:text-sm mt-1.5 font-sans line-clamp-2 leading-relaxed">
                ${e.description}
              </p>
            </div>

            <!-- Bottom action row: Size Switcher + Add to Cart -->
            <div class="mt-4 pt-3 border-t border-amber-500/10 flex items-center justify-between gap-2">
              ${r?`
                <div class="portion-switch">
                  <button 
                    type="button"
                    data-item-btn="${e.id}"
                    data-size="S"
                    class="portion-btn ${t===`S`?`active`:``}"
                    onclick="app.toggleSize('${e.id}', 'S')"
                  >Small (₹${e.prices.S})</button>
                  <button 
                    type="button"
                    data-item-btn="${e.id}"
                    data-size="F"
                    class="portion-btn ${t===`F`?`active`:``}"
                    onclick="app.toggleSize('${e.id}', 'F')"
                  >Full (₹${e.prices.F})</button>
                </div>
              `:`
                <span class="text-xs text-amber-300/80 font-medium">
                  ${e.prices.F?`Full Portion`:`Standard`}
                </span>
              `}

              <button 
                type="button"
                class="btn-gold !py-2 !px-3.5 !text-xs"
                onclick="app.addToCart('${e.id}')"
                aria-label="Add ${e.name} to order"
              >
                <span>Add</span>
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
              </button>
            </div>
          </div>
        </div>
      `}).join(``))}renderGallery(){let e=document.getElementById(`gallery-grid-container`);e&&(e.innerHTML=this.data.gallery.map(e=>`
        <div 
          class="relative rounded-2xl overflow-hidden aspect-[4/3] glass-panel cursor-pointer group border border-amber-500/20"
          onclick="app.openLightbox('${e.image}', '${e.title}', '${e.subtitle}')"
        >
          <img 
            src="${e.image}" 
            alt="${e.title}" 
            loading="lazy"
            onerror="this.onerror=null; this.src='./images/hero-biryani.jpg';"
            class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-end p-5">
            <span class="text-xs text-amber-300 uppercase tracking-widest font-semibold">${e.subtitle}</span>
            <h4 class="font-serif text-lg font-bold text-white mt-0.5">${e.title}</h4>
            <span class="text-[11px] text-gray-300 mt-2 inline-flex items-center gap-1">
              Click to view full photo
              <svg class="w-3.5 h-3.5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path></svg>
            </span>
          </div>
        </div>
      `).join(``))}toggleSize(e,t){this.itemSizeSelections[e]=t;let n=this.data.items.find(t=>t.id===e);if(!n)return;let r=n.prices[t],i=document.getElementById(`sig-price-${e}`);i&&(i.textContent=`₹${r}`);let a=document.getElementById(`price-display-${e}`);a&&(a.textContent=`₹${r}`),document.querySelectorAll(`[data-item-btn="${e}"]`).forEach(e=>{e.getAttribute(`data-size`)===t?e.classList.add(`active`):e.classList.remove(`active`)})}addToCart(e){let t=this.data.items.find(t=>t.id===e);if(!t)return;let n=this.itemSizeSelections[e]||(t.prices.S?`S`:`F`),r=t.prices[n]||t.prices.F||t.prices.S,i=n===`S`?`Small`:`Full`,a=`Medium`,o=this.cart.findIndex(t=>t.id===e&&t.size===n&&(t.spice||`Medium`)===a);o>-1?this.cart[o].qty+=1:this.cart.push({id:t.id,name:t.name,category:t.category,size:n,sizeLabel:i,price:r,qty:1,spice:a,image:t.image,veg:t.veg}),this.saveCart(),this.updateCartUI(),this.showToast(`Added ${t.name} (${i}) to your order!`)}setSpiceLevel(e,t){if(!this.cart[e])return;this.cart[e].spice=t,this.saveCart(),this.updateCartUI();let n=t===`Mild`?`No Spicy`:t===`Spicy`?`Spicy`:`Medium Spicy`;this.showToast(`Taste set to ${n}`)}setOrderType(e){this.orderType=e;let t=document.getElementById(`label-order-advance`),n=document.getElementById(`label-order-delivery`),r=document.getElementById(`label-order-call`);[t,n,r].forEach(e=>{e&&e.classList.remove(`bg-amber-500/20`,`border-amber-400/50`,`bg-emerald-500/20`,`border-emerald-400/50`,`bg-blue-500/20`,`border-blue-400/50`)}),e===`Advance`&&t?t.classList.add(`bg-amber-500/20`,`border-amber-400/50`):e===`Delivery`&&n?n.classList.add(`bg-emerald-500/20`,`border-emerald-400/50`):e===`Call`&&r&&r.classList.add(`bg-blue-500/20`,`border-blue-400/50`);let i=document.getElementById(`advance-payment-section`),a=document.getElementById(`delivery-address-block`),o=document.getElementById(`call-order-block`),s=document.getElementById(`advance-footer-row`);i&&(e===`Advance`?i.classList.remove(`hidden`):i.classList.add(`hidden`)),a&&(e===`Delivery`?a.classList.remove(`hidden`):a.classList.add(`hidden`)),o&&(e===`Call`?o.classList.remove(`hidden`):o.classList.add(`hidden`)),s&&(e===`Advance`?s.classList.remove(`hidden`):s.classList.add(`hidden`)),this.updateCartUI()}copyUPI(){let e=`BHARATPE2I0U0D1W7A42341@unitype`;navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(e).then(()=>{this.showToast(`📋 UPI ID Copied: BHARATPE2I0U0D1W7A42341@unitype`)}).catch(()=>{this.fallbackCopyUPI(e)}):this.fallbackCopyUPI(e)}fallbackCopyUPI(e){let t=document.createElement(`textarea`);t.value=e,document.body.appendChild(t),t.select(),document.execCommand(`copy`),document.body.removeChild(t),this.showToast(`📋 UPI ID Copied: `+e)}updateQuantity(e,t){this.cart[e]&&(this.cart[e].qty+=t,this.cart[e].qty<=0&&this.cart.splice(e,1),this.saveCart(),this.updateCartUI())}removeFromCart(e){this.cart[e]&&(this.cart.splice(e,1),this.saveCart(),this.updateCartUI())}clearCart(){this.cart=[],this.saveCart(),this.updateCartUI()}saveCart(){try{localStorage.setItem(`juno_cart_v2`,JSON.stringify(this.cart))}catch{}}loadCart(){try{let e=localStorage.getItem(`juno_cart_v2`)||localStorage.getItem(`reddys_cart`);if(e){let t=JSON.parse(e);Array.isArray(t)&&(this.cart=t.map(e=>({...e,spice:e.spice||`Medium`})))}}catch{this.cart=[]}}updateCartUI(){let e=this.cart.reduce((e,t)=>e+t.qty,0),t=this.cart.reduce((e,t)=>e+t.price*t.qty,0),n=Math.ceil(t/2),r=t-n;document.querySelectorAll(`.cart-badge-count`).forEach(t=>{t.textContent=e,t.style.display=e>0?`inline-flex`:`none`});let i=document.getElementById(`floating-cart-total`);i&&(i.textContent=`₹${t}`);let a=document.getElementById(`cart-items-list`),o=document.getElementById(`cart-empty-message`),s=document.getElementById(`cart-subtotal`),c=document.getElementById(`cart-grand-total`);s&&(s.textContent=`₹${t}`),c&&(c.textContent=`₹${t}`);let l=document.getElementById(`advance-amount-badge`),u=document.getElementById(`advance-pay-now-text`),d=document.getElementById(`advance-balance-text`),f=document.getElementById(`cart-advance-total`),p=document.getElementById(`direct-upi-pay-btn`);l&&(l.textContent=`Pay ₹${n}`),u&&(u.textContent=`₹${n}`),d&&(d.textContent=`₹${r}`),f&&(f.textContent=`₹${n}`),p&&(p.href=`upi://pay?pa=BHARATPE2I0U0D1W7A42341@unitype&pn=Yellamla%20Sandeep&am=${n}&cu=INR&tn=JUNO%20Advance%20Booking`),a&&o&&(this.cart.length===0?(a.innerHTML=``,o.classList.remove(`hidden`)):(o.classList.add(`hidden`),a.innerHTML=this.cart.map((e,t)=>{let n=e.spice||`Medium`;return`
            <div class="p-3 rounded-xl bg-gray-900/60 border border-amber-500/15 space-y-2.5">
              <div class="flex items-center gap-3">
                <img src="${e.image}" alt="${e.name}" onerror="this.onerror=null; this.src='./images/hero-biryani.jpg';" class="w-14 h-14 rounded-lg object-cover bg-gray-950 flex-shrink-0" />
                <div class="flex-1 min-w-0">
                  <div class="flex items-center gap-1.5">
                    <span class="${e.veg?`veg-dot-box`:`nonveg-dot-box`} !w-3.5 !h-3.5 flex-shrink-0">
                      <span class="${e.veg?`veg-dot`:`nonveg-triangle`} !w-1.5 !h-1.5"></span>
                    </span>
                    <h4 class="font-serif text-sm font-bold text-white truncate">${e.name}</h4>
                  </div>
                  <p class="text-[11px] text-amber-300/80 mt-0.5">
                    ${e.sizeLabel} • ₹${e.price} each
                  </p>
                  <div class="text-xs font-semibold text-white mt-0.5">
                    Total: ₹${e.price*e.qty}
                  </div>
                </div>

                <!-- Quantity Stepper -->
                <div class="flex items-center bg-gray-950 rounded-lg border border-amber-500/20 px-1 py-0.5 gap-2">
                  <button 
                    type="button"
                    class="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-white text-sm"
                    onclick="app.updateQuantity(${t}, -1)"
                  >-</button>
                  <span class="text-xs font-bold text-amber-300 w-4 text-center">${e.qty}</span>
                  <button 
                    type="button"
                    class="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-white text-sm"
                    onclick="app.updateQuantity(${t}, 1)"
                  >+</button>
                </div>

                <!-- Remove Button -->
                <button 
                  type="button"
                  class="text-gray-500 hover:text-red-400 p-1"
                  onclick="app.removeFromCart(${t})"
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
                    onclick="app.setSpiceLevel(${t}, 'Mild')" 
                    class="px-2 py-0.5 rounded text-[10px] transition-colors ${n===`Mild`?`bg-amber-400 text-gray-950 font-bold shadow`:`bg-gray-800 text-gray-300 hover:bg-gray-700`}"
                    title="No Spicy / Mild"
                  >🌶️ No Spicy</button>
                  <button 
                    type="button" 
                    onclick="app.setSpiceLevel(${t}, 'Medium')" 
                    class="px-2 py-0.5 rounded text-[10px] transition-colors ${n===`Medium`?`bg-amber-400 text-gray-950 font-bold shadow`:`bg-gray-800 text-gray-300 hover:bg-gray-700`}"
                    title="Medium Spicy"
                  >🌶️🌶️ Medium</button>
                  <button 
                    type="button" 
                    onclick="app.setSpiceLevel(${t}, 'Spicy')" 
                    class="px-2 py-0.5 rounded text-[10px] transition-colors ${n===`Spicy`?`bg-red-500 text-white font-bold shadow`:`bg-gray-800 text-gray-300 hover:bg-gray-700`}"
                    title="Spicy"
                  >🌶️🌶️🌶️ Spicy</button>
                </div>
              </div>
            </div>
          `}).join(``)))}openCart(){let e=document.getElementById(`cart-drawer-backdrop`),t=document.getElementById(`cart-drawer`);e&&t&&(e.classList.add(`open`),t.classList.add(`open`),document.body.style.overflow=`hidden`,this.setOrderType(this.orderType||`Delivery`))}closeCart(){let e=document.getElementById(`cart-drawer-backdrop`),t=document.getElementById(`cart-drawer`);e&&t&&(e.classList.remove(`open`),t.classList.remove(`open`),document.body.style.overflow=``)}sendWhatsAppOrder(){if(this.cart.length===0){alert(`Your order cart is empty! Please add some delicious treats first.`);return}let e=(document.getElementById(`order-customer-name`)?.value||``).trim(),t=(document.getElementById(`order-customer-phone`)?.value||``).trim(),n=(document.getElementById(`order-customer-address`)?.value||``).trim(),r=(document.getElementById(`order-customer-notes`)?.value||``).trim(),i=(document.getElementById(`order-customer-utr`)?.value||``).trim(),a=this.orderType||`Delivery`;if(!t){alert(`Please enter your WhatsApp/Mobile number so we can confirm your order and contact you!`),document.getElementById(`order-customer-phone`)?.focus();return}if(a===`Delivery`&&!n){alert(`Please provide your delivery address in Boduppal so our delivery person can reach you in 20 minutes!`),document.getElementById(`order-customer-address`)?.focus();return}let o=this.cart.reduce((e,t)=>e+t.price*t.qty,0),s=Math.ceil(o/2),c=o-s,l=`🛵 Home Delivery (Doorstep)`;a===`Advance`&&(l=`🍽️ Advance Booking (Restaurant Dine-in / Table)`),a===`Call`&&(l=`📞 Direct Call / Counter Pickup`);let u=`✨ *NEW ORDER - JUNO KITCHEN & CO.* ✨
`;u+=`📍 *Canara Nagar, Boduppal, Hyderabad*
`,u+=`✨ *"Good Food Good Vibes"*
`,u+=`━━━━━━━━━━━━━━━━━━━━━━
`,u+=`🏷️ *ORDER TYPE:* ${l}\n`,e&&(u+=`👤 *Customer Name:* ${e}\n`),u+=`📱 *Customer Mobile:* ${t}\n`,a===`Delivery`&&(u+=`🏠 *Delivery Address:* ${n}\n`),u+=`━━━━━━━━━━━━━━━━━━━━━━
`,u+=`📋 *ITEMS ORDERED & SPICE LEVELS:*
`,this.cart.forEach((e,t)=>{let n=e.veg?`🌱`:`🍗`,r=e.spice===`Mild`?`🌶️ No Spicy (Mild)`:e.spice===`Spicy`?`🌶️🌶️🌶️ Spicy`:`🌶️🌶️ Medium Spicy`;u+=`${t+1}. ${n} *${e.name}* (${e.sizeLabel})\n`,u+=`   • Qty: ${e.qty} × ₹${e.price} = *₹${e.price*e.qty}*\n`,u+=`   • Taste: *${r}*\n`}),u+=`━━━━━━━━━━━━━━━━━━━━━━
`,r&&(u+=`📝 *Cooking Notes:* ${r}\n`,u+=`━━━━━━━━━━━━━━━━━━━━━━
`),u+=`💰 *TOTAL BILL: ₹${o}*\n`,a===`Advance`&&(u+=`━━━━━━━━━━━━━━━━━━━━━━
`,u+=`💳 *50% ADVANCE BOOKING PAYMENT:*
`,u+=`   • 50% Advance Token: *₹${s}* (Paid via BharatPe QR)\n`,u+=`   • Balance at Table: *₹${c}*\n`,u+=i?`   • UPI UTR / Ref No: *${i}*\n`:`   • UPI Ref: *Screenshot attached / Paid via BharatPe*
`),u+=`━━━━━━━━━━━━━━━━━━━━━━
`,u+=`⚡ *20-MINUTE DELIVERY GUARANTEE:* ⚡
`,u+=`⏱️ *We will deliver / have food ready in ONLY 20 MINUTES!*
`,u+=`━━━━━━━━━━━━━━━━━━━━━━
`,u+=`📞 *CONTACT DETAILS:*
`,u+=`• Customer Number: *${t}*\n`,u+=`• Owner Hotline: *+91 90145 61737*
`,u+=`━━━━━━━━━━━━━━━━━━━━━━
`,u+=`Please confirm my order. Thank you! 🙏`;let d=`https://wa.me/919014561737?text=${encodeURIComponent(u)}`;window.open(d,`_blank`)}openBotModal(){let e=document.getElementById(`whatsapp-bot-modal`);e&&(e.classList.add(`open`),document.body.style.overflow=`hidden`,this.botInitialized||this.initBot())}closeBotModal(){let e=document.getElementById(`whatsapp-bot-modal`);e&&(e.classList.remove(`open`),document.body.style.overflow=``)}initBot(){this.botInitialized=!0,this.botState={step:`greeting`,cart:[],pendingItem:null,orderType:`Delivery`,customer:{name:``,phone:``,address:``,utr:``}};let e=document.getElementById(`bot-messages-container`);e&&e.querySelectorAll(`.bot-bubble-wrapper`).forEach(e=>e.remove()),this.sendBotGreeting()}sendBotGreeting(){this.appendBotMessage(`👋 *Namaste! Welcome to JUNO Kitchen & Co.* 🍛
📍 *Canara Nagar, Boduppal, Hyderabad*
✨ *"Good Food Good Vibes"*
⚡ *We deliver / prepare in ONLY 20 MINUTES!* ⏱️

Please select what you would like to explore today:
1️⃣ Biryani Section 🍚
2️⃣ Veg Starters 🥦
3️⃣ Non-Veg Starters 🍗
4️⃣ Noodles 🍜
5️⃣ Rice Items 🍛
6️⃣ Special Combos 🎁

_Reply with 1, 2, 3, 4, 5, or 6 (or tap below)_`,null,[{text:`1. Biryani`,val:`1`},{text:`2. Veg Starters`,val:`2`},{text:`3. Non-Veg Starters`,val:`3`},{text:`4. Noodles`,val:`4`},{text:`5. Rice Items`,val:`5`},{text:`6. Combos`,val:`6`}]),this.botState.step=`choose_category`}appendBotMessage(e,t=null,n=[]){let r=document.getElementById(`bot-messages-container`);if(!r)return;let i=document.createElement(`div`);i.className=`bot-bubble-wrapper flex items-start gap-2 max-w-[92%] sm:max-w-[85%]`;let a=new Date().toLocaleTimeString([],{hour:`2-digit`,minute:`2-digit`}),o=``;t&&(o=`
        <div class="mb-2 rounded-lg overflow-hidden border border-white/10 bg-black/40">
          <img src="${t}" alt="JUNO item" class="w-full max-h-48 object-cover" onerror="this.src='/images/hero-biryani.jpg'" />
        </div>
      `);let s=e.replace(/\n/g,`<br/>`).replace(/\*(.*?)\*/g,`<strong>$1</strong>`).replace(/_(.*?)_/g,`<em>$1</em>`);i.innerHTML=`
      <div class="wa-msg-bot p-3 rounded-2xl text-xs space-y-1">
        ${o}
        <div class="text-[#e9edef] leading-relaxed">${s}</div>
        <div class="text-[10px] text-gray-400 text-right mt-1">${a}</div>
      </div>
    `,r.appendChild(i),r.scrollTop=r.scrollHeight,this.renderBotChips(n)}appendUserMessage(e){let t=document.getElementById(`bot-messages-container`);if(!t)return;let n=document.createElement(`div`);n.className=`bot-bubble-wrapper flex justify-end ml-auto max-w-[85%]`,n.innerHTML=`
      <div class="wa-msg-user p-3 rounded-2xl text-xs space-y-1">
        <div class="text-white leading-relaxed font-medium">${e}</div>
        <div class="text-[10px] text-emerald-200 text-right flex items-center justify-end gap-1 mt-0.5">
          <span>${new Date().toLocaleTimeString([],{hour:`2-digit`,minute:`2-digit`})}</span>
          <span>✓✓</span>
        </div>
      </div>
    `,t.appendChild(n),t.scrollTop=t.scrollHeight}renderBotChips(e){let t=document.getElementById(`bot-quick-chips`);t&&(!e||e.length===0?(t.innerHTML=``,t.classList.add(`hidden`)):(t.classList.remove(`hidden`),t.innerHTML=e.map(e=>`
      <button 
        type="button" 
        onclick="app.handleBotUserReply('${e.val}')"
        class="wa-chip px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap flex-shrink-0"
      >
        ${e.text}
      </button>
    `).join(``)))}handleBotFormSubmit(){let e=document.getElementById(`bot-user-input`);if(!e)return;let t=e.value.trim();t&&(e.value=``,this.handleBotUserReply(t))}handleBotUserReply(e){this.appendUserMessage(e);let t=e.toLowerCase().trim();if(t===`hi`||t===`hello`||t===`restart`||t===`menu`){this.initBot();return}let n=this.botState.step;if(n===`choose_category`)t===`1`||t.includes(`biryani`)?this.showBotCategoryItems(`biryani`,`Biryani Section 🍚`):t===`2`||t.includes(`veg starter`)?this.showBotCategoryItems(`starters`,`Veg Starters 🥦`,!0):t===`3`||t.includes(`non veg starter`)||t.includes(`non-veg`)?this.showBotCategoryItems(`starters`,`Non-Veg Starters 🍗`,!1):t===`4`||t.includes(`noodle`)?this.showBotCategoryItems(`noodles`,`Noodles Section 🍜`):t===`5`||t.includes(`rice`)?this.showBotCategoryItems(`rice`,`Rice Items 🍛`):t===`6`||t.includes(`combo`)?this.showBotCombos():this.appendBotMessage(`Please choose a valid number (1 to 6) or tap one of the options below:`,null,[{text:`1. Biryani`,val:`1`},{text:`2. Veg Starters`,val:`2`},{text:`3. Non-Veg Starters`,val:`3`},{text:`4. Noodles`,val:`4`},{text:`5. Rice Items`,val:`5`},{text:`6. Combos`,val:`6`}]);else if(n===`choose_item`){let e=this.botState.currentCategoryItems||[],n=parseInt(t,10)-1;if(!isNaN(n)&&e[n]){let t=e[n];this.botState.pendingItem=t,t.prices.S&&t.prices.F?(this.botState.step=`choose_size`,this.appendBotMessage(`You selected *${t.name}*!\n\nPlease choose portion size:\n1️⃣ Small - ₹${t.prices.S}\n2️⃣ Full - ₹${t.prices.F}`,t.image,[{text:`1. Small (₹${t.prices.S})`,val:`Small`},{text:`2. Full (₹${t.prices.F})`,val:`Full`}])):(this.botState.selectedSize=t.prices.F?`F`:`S`,this.botState.selectedPrice=t.prices.F||t.prices.S,this.botState.selectedSizeLabel=t.prices.F?`Full`:`Standard`,this.askBotSpiceLevel())}else this.appendBotMessage(`Invalid dish number. Please select from the list or tap an option below.`)}else if(n===`choose_size`){let e=this.botState.pendingItem;t===`1`||t===`small`||t===`s`?(this.botState.selectedSize=`S`,this.botState.selectedPrice=e.prices.S,this.botState.selectedSizeLabel=`Small`,this.askBotSpiceLevel()):t===`2`||t===`full`||t===`f`?(this.botState.selectedSize=`F`,this.botState.selectedPrice=e.prices.F,this.botState.selectedSizeLabel=`Full`,this.askBotSpiceLevel()):this.appendBotMessage(`Please choose portion size for *${e.name}*:\n1️⃣ Small (₹${e.prices.S})\n2️⃣ Full (₹${e.prices.F})`,null,[{text:`Small (₹${e.prices.S})`,val:`Small`},{text:`Full (₹${e.prices.F})`,val:`Full`}])}else if(n===`choose_spice`){let e=`Medium`,n=`Medium Spicy 🌶️🌶️`;t===`1`||t.includes(`no`)||t.includes(`mild`)?(e=`Mild`,n=`No Spicy (Mild) 🌶️`):t===`2`||t.includes(`medium`)?(e=`Medium`,n=`Medium Spicy 🌶️🌶️`):(t===`3`||t.includes(`spicy`)||t.includes(`hot`))&&(e=`Spicy`,n=`Spicy 🌶️🌶️🌶️`);let r=this.botState.pendingItem,i=this.botState.selectedSizeLabel||`Full`,a=this.botState.selectedPrice;this.botState.cart.push({id:r.id,name:r.name,size:this.botState.selectedSize,sizeLabel:i,price:a,spice:e,spiceName:n,qty:1,veg:r.veg}),this.cart.push({id:r.id,name:r.name,category:r.category,size:this.botState.selectedSize,sizeLabel:i,price:a,qty:1,spice:e,image:r.image,veg:r.veg}),this.saveCart(),this.updateCartUI();let o=this.botState.cart.reduce((e,t)=>e+t.price*t.qty,0);this.botState.step=`after_add`,this.appendBotMessage(`✅ Added *${r.name}* (${i}) with *${n}* to your order!\n\n🛒 *Items in Order: ${this.botState.cart.length} | Current Total: ₹${o}*\n\nWhat would you like to do next?\n1️⃣ Add More Items\n2️⃣ Order Now / Checkout 🛎️`,null,[{text:`1. Add More Items`,val:`more`},{text:`2. Order Now 🛎️`,val:`checkout`}])}else if(n===`after_add`)t===`1`||t.includes(`more`)||t.includes(`add`)?(this.botState.step=`choose_category`,this.appendBotMessage(`Please choose section to add more items:
1️⃣ Biryani Section 🍚
2️⃣ Veg Starters 🥦
3️⃣ Non-Veg Starters 🍗
4️⃣ Noodles 🍜
5️⃣ Rice Items 🍛
6️⃣ Special Combos 🎁`,null,[{text:`1. Biryani`,val:`1`},{text:`2. Veg Starters`,val:`2`},{text:`3. Non-Veg Starters`,val:`3`},{text:`4. Noodles`,val:`4`},{text:`5. Rice Items`,val:`5`},{text:`6. Combos`,val:`6`}])):t===`2`||t.includes(`order`)||t.includes(`checkout`)||t.includes(`now`)?this.promptBotOrderType():this.appendBotMessage(`Please choose:
1️⃣ Add More Items
2️⃣ Order Now / Checkout`,null,[{text:`1. Add More Items`,val:`more`},{text:`2. Order Now 🛎️`,val:`checkout`}]);else if(n===`choose_order_type`){let e=this.botState.cart.reduce((e,t)=>e+t.price*t.qty,0),n=Math.ceil(e/2),r=e-n;t===`1`||t.includes(`advance`)||t.includes(`eating`)||t.includes(`restaurant`)?(this.botState.orderType=`Advance`,this.botState.step=`advance_details`,this.appendBotMessage(`🍽️ *ADVANCE BOOKING (EATING IN RESTAURANT)*\n━━━━━━━━━━━━━━━━━━━━━━\nTotal Food Bill: *₹${e}*\n💰 *50% Advance Payable Now: ₹${n}*\n💵 *Balance Payable at Table: ₹${r}*\n\n⚡ *20-MINUTE PREPARATION COMMITMENT:*\nAs soon as advance is confirmed, our chef fires up your order immediately so it is hot & ready when you arrive in 20 minutes!\n\n📲 *PLEASE SCAN BHARATPE QR TO PAY 50% ADVANCE:*\n• Merchant: *YELLAMLA SANDEEP*\n• UPI ID: *BHARATPE2I0U0D1W7A42341@unitype*\n\n_Please enter your Name & WhatsApp Number (and 12-digit UTR if paid) to finalize booking:_`,`/images/juno-upi-scanner.jpg`,[{text:`Paid ₹`+n+` on Scanner`,val:`Paid Advance`},{text:`📋 Copy UPI ID`,val:`copy_upi`}])):t===`2`||t.includes(`delivery`)||t.includes(`home`)?(this.botState.orderType=`Delivery`,this.botState.step=`delivery_details`,this.appendBotMessage(`🛵 *HOME DELIVERY IN BODUPPAL*\n━━━━━━━━━━━━━━━━━━━━━━\nTotal Bill: *₹${e}* (Cash / UPI on Delivery)\n\n⚡ *PROMISE: WE WILL DELIVER IN ONLY 20 MINUTES!* ⏱️\n\nPlease reply with your:\n*Name, Phone Number, and Complete Boduppal Delivery Address:*`,null,[{text:`Canara Nagar, Boduppal`,val:`Canara Nagar, Boduppal`}])):t===`3`||t.includes(`call`)||t.includes(`pickup`)?(this.botState.orderType=`Call`,this.botState.step=`call_details`,this.appendBotMessage(`📞 *DIRECT CALL / COUNTER PICKUP ORDER*\n━━━━━━━━━━━━━━━━━━━━━━\nTotal Bill: *₹${e}*\n\n⚡ *Food will be packed hot in 20 minutes!*\nOwner Hotline: *+91 90145 61737*\n\nPlease reply with your *Name & Phone Number* for counter pickup:`,null,[{text:`Self Pickup in 20 Mins`,val:`Self Pickup in 20 Mins`}])):this.appendBotMessage(`Please choose order type (1, 2, or 3):`,null,[{text:`1. Advance Booking`,val:`1`},{text:`2. Home Delivery`,val:`2`},{text:`3. Direct Call`,val:`3`}])}else if(t===`copy_upi`)this.copyUPI(),this.appendBotMessage(`📋 Copied UPI ID: *BHARATPE2I0U0D1W7A42341@unitype*
Open GPay/PhonePe to pay 50% advance and reply with your details to confirm!`);else if(t===`open_real_wa`||t.includes(`real whatsapp`)){let e=this.botState.lastSummary||`Hello JUNO Kitchen & Co., I would like to place an order.`,t=encodeURIComponent(e);window.open(`https://wa.me/919014561737?text=${t}`,`_blank`)}else n===`advance_details`||n===`delivery_details`||n===`call_details`?this.finalizeBotOrder(e):this.appendBotMessage(`Type *menu* to view dishes or *hi* to restart.`)}showBotCategoryItems(e,t,n=null){let r=this.data.items.filter(t=>t.category===e);n!==null&&(r=r.filter(e=>e.veg===n)),this.botState.currentCategoryItems=r,this.botState.step=`choose_item`;let i=`✨ *JUNO Kitchen & Co. - ${t}*\n━━━━━━━━━━━━━━━━━━━━━━\n`;r.forEach((e,t)=>{let n=e.prices.S&&e.prices.F?`Small: ₹${e.prices.S} | Full: ₹${e.prices.F}`:`₹${e.prices.F||e.prices.S}`;i+=`${t+1}️⃣ *${e.name}* - ${n}\n`}),i+=`━━━━━━━━━━━━━━━━━━━━━━
Reply with the *Dish Number (e.g. 1, 2, 3...)* to select:`;let a=r.map((e,t)=>({text:`${t+1}. ${e.name}`,val:(t+1).toString()}));a.push({text:`🔙 Main Menu`,val:`hi`}),this.appendBotMessage(i,r[0]?.image,a)}showBotCombos(){let e=this.data.items.filter(e=>e.category===`combos`);this.botState.currentCategoryItems=e,this.botState.step=`choose_item`;let t=`🎁 *JUNO Kitchen & Co. - Special Combos (Best Value!)*
━━━━━━━━━━━━━━━━━━━━━━
`;e.forEach((e,n)=>{t+=`${n+1}️⃣ *${e.name}* - *₹${e.prices.F}*\n   • ${e.description}\n`}),t+=`━━━━━━━━━━━━━━━━━━━━━━
Reply with the *Combo Number (1, 2, or 3)* to select:`;let n=e.map((e,t)=>({text:`${t+1}. ${e.name} (₹${e.prices.F})`,val:(t+1).toString()}));n.push({text:`🔙 Main Menu`,val:`hi`}),this.appendBotMessage(t,e[0]?.image,n)}askBotSpiceLevel(){this.botState.step=`choose_spice`;let e=this.botState.pendingItem,t=this.botState.selectedSizeLabel||`Full`;this.appendBotMessage(`🌶️ *Please select Spice Level for ${e.name} (${t}):*\n\n1️⃣ No Spicy (Mild 🌶️)\n2️⃣ Medium Spicy (🌶️🌶️ Classic)\n3️⃣ Spicy (🌶️🌶️🌶️ Hot & Fiery)\n\n_Reply with 1, 2, or 3_`,null,[{text:`1. No Spicy (Mild)`,val:`1`},{text:`2. Medium Spicy`,val:`2`},{text:`3. Spicy 🌶️`,val:`3`}])}promptBotOrderType(){this.botState.step=`choose_order_type`;let e=this.botState.cart.reduce((e,t)=>e+t.price*t.qty,0);this.appendBotMessage(`🛎️ *CHECKOUT - JUNO KITCHEN & CO.*\n━━━━━━━━━━━━━━━━━━━━━━\nTotal Food Bill: *₹${e}*\n\nPlease select your Order Option:\n\n1️⃣ *Advance Booking* (Dine-in Table Booking with 50% Token Scanner)\n2️⃣ *Home Delivery* (Direct to Doorstep in Boduppal)\n3️⃣ *Direct Call Order* (Hot Counter Pickup)\n\n_Reply with 1, 2, or 3_`,null,[{text:`1. Advance Booking`,val:`1`},{text:`2. Home Delivery`,val:`2`},{text:`3. Direct Call Order`,val:`3`}])}finalizeBotOrder(e){let t=this.botState.cart.reduce((e,t)=>e+t.price*t.qty,0),n=Math.ceil(t/2),r=t-n,i=this.botState.orderType,a=`🛵 Home Delivery`;i===`Advance`&&(a=`🍽️ Advance Booking (Table Reserved)`),i===`Call`&&(a=`📞 Direct Call / Counter Pickup`);let o=`🎉 *ORDER SUCCESSFULLY CONFIRMED!* 🎉
━━━━━━━━━━━━━━━━━━━━━━
`;o+=`🏪 *JUNO Kitchen & Co.*
📍 *Canara Nagar, Boduppal, Hyderabad*

`,o+=`⚡ *WE WILL DELIVER / PREPARE IN ONLY 20 MINUTES!* ⏱️
`,o+=`━━━━━━━━━━━━━━━━━━━━━━
`,o+=`🏷️ *Order Type:* ${a}\n`,o+=`👤 *Customer Details:* ${e}\n`,o+=`━━━━━━━━━━━━━━━━━━━━━━
`,o+=`📋 *Items Ordered:*
`,this.botState.cart.forEach((e,t)=>{o+=`${t+1}. *${e.name}* (${e.sizeLabel}) - ₹${e.price}\n   • Taste: *${e.spiceName}*\n`}),o+=`━━━━━━━━━━━━━━━━━━━━━━
`,o+=`💰 *Total Bill: ₹${t}*\n`,i===`Advance`&&(o+=`💳 *50% Advance Token:* ₹${n} (Paid via BharatPe QR)\n`,o+=`💵 *Balance at Table:* ₹${r}\n`),o+=`━━━━━━━━━━━━━━━━━━━━━━
`,o+=`📞 *OWNER HOTLINE / CALL NUMBER:*
`,o+=`📱 *+91 90145 61737* (Save & call anytime for live kitchen updates)
`,o+=`━━━━━━━━━━━━━━━━━━━━━━
`,o+=`🙏 Thank you! Your food is now sizzling in our kitchen.`,this.appendBotMessage(o,null,[{text:`📲 Open in Real WhatsApp`,val:`open_real_wa`},{text:`🔄 Start New Order`,val:`hi`}]),this.botState.step=`order_completed`,this.botState.lastSummary=o}openLightbox(e,t,n){let r=document.getElementById(`lightbox-modal`),i=document.getElementById(`lightbox-image`),a=document.getElementById(`lightbox-title`),o=document.getElementById(`lightbox-subtitle`);r&&i&&(i.src=e,a&&(a.textContent=t),o&&(o.textContent=n),r.classList.add(`open`),document.body.style.overflow=`hidden`)}closeLightbox(){let e=document.getElementById(`lightbox-modal`);e&&(e.classList.remove(`open`),document.body.style.overflow=``)}showToast(e){let t=document.getElementById(`toast-container`);if(!t)return;let n=document.createElement(`div`);n.className=`toast show`,n.innerHTML=`
      <svg class="w-5 h-5 text-amber-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
      <span>${e}</span>
    `,t.appendChild(n),setTimeout(()=>{n.classList.remove(`show`),setTimeout(()=>n.remove(),400)},2800)}attachEventListeners(){document.querySelectorAll(`.diet-filter-btn`).forEach(e=>{e.addEventListener(`click`,()=>{document.querySelectorAll(`.diet-filter-btn`).forEach(e=>{e.classList.remove(`active`,`bg-amber-400`,`text-gray-950`,`border-amber-400`),e.classList.add(`bg-gray-900/60`,`text-gray-300`,`border-amber-500/20`)}),e.classList.add(`active`,`bg-amber-400`,`text-gray-950`,`border-amber-400`),e.classList.remove(`bg-gray-900/60`,`text-gray-300`,`border-amber-500/20`),this.selectedDiet=e.getAttribute(`data-diet`),this.renderMenuGrid()})});let e=document.getElementById(`menu-search-input`);e&&e.addEventListener(`input`,e=>{this.searchQuery=e.target.value,this.renderMenuGrid()}),window.addEventListener(`keydown`,e=>{e.key===`Escape`&&(this.closeCart(),this.closeLightbox(),this.closeBotModal())})}};