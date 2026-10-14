# Reddy's Daily Treats 👑
### Luxury Five-Star Restaurant Website
**Fast Food | Milkshakes | Momo's | Authentic Dum Biryani's**  
📍 Canara Nagar, Boduppal (Badupally), Hyderabad, Telangana 500092  
Tagline: *"Good Taste. Quality Food."*  
Website Designed & Built by **ZippyTechSystems**

---

## 🌟 Overview & Highlights

This project is a luxury, five-star hotel style web application built for **Reddy's Daily Treats**, Canara Nagar, Boduppal. It combines fine-dining aesthetics (midnight obsidian black, champagne gold, ivory typography, and warm food photography) with pocket-friendly local prices.

### Key Features
- **Cinematic Royal Hero Section**: High-definition hero biryani with ambient steam, live open/closed status badge (dynamic IST calculation for 11:30 AM – 11:30 PM), and quick action CTAs.
- **29 Gourmet Menu Items**: Every single dish includes a high-resolution food photo (1600x1200, 4:3, compressed to under 250 KB) matching the dark slate fine-dining shoot aesthetic.
- **Portion Switcher (Small / Full)**: Interactive S/F toggle on dual-portion items with real-time price updates.
- **Grand Feast Combos Spotlight**: Curated value combo cards with golden shimmering "Best Value" ribbons and item breakdown.
- **Diet Filters & Instant Search**: Filter by "All", "Pure Veg 🌱", or "Non-Veg 🍗", alongside real-time search as you type.
- **Beverages & Milkshakes ("Coming Soon")**: Dedicated section for thick shakes, kurkure momos, and chilled soft drinks.
- **Interactive Shopping Cart Drawer**: Slide-in order cart with quantity adjustments (+ / -), order type selection (Dine-in/Takeaway vs. Home Delivery), customer details, and special cooking notes.
- **Direct WhatsApp Order Generator**: 1-click order compilation opening `https://wa.me/919876543210` with a pre-formatted message detailing customer name, phone, address, items ordered, portion sizes, quantities, and total bill amount.
- **Floating Quick-Action Buttons**: Instant WhatsApp chat, direct phone call, and floating live cart pill.
- **Interactive Photo Gallery with Lightbox**: Click any gallery image to view in high-resolution full-screen mode.
- **Local SEO & Schema Markup**: JSON-LD `Restaurant` schema with geo-coordinates, operating hours, price range, and meta tags targeting "biryani in Boduppal" and "fast food Canara Nagar Hyderabad".

---

## 📁 Project Structure

```
sandeep resturent/
├── dist/                          # Production distribution bundle (Hostinger / Netlify / Vercel ready)
│   ├── assets/                    # Compiled CSS and JS bundles
│   ├── images/                    # All 34 optimized images
│   ├── index.html                 # Production index
│   └── menu.json                  # Standalone data file
├── public/
│   ├── data/
│   │   └── menu.json              # Primary restaurant & menu database
│   ├── images/
│   │   ├── hero-biryani.jpg       # 16:9 Hero Biryani image (<250 KB)
│   │   ├── gallery/               # 4 Gallery images (<250 KB each)
│   │   │   ├── gallery-1.jpg
│   │   │   ├── gallery-2.jpg
│   │   │   ├── gallery-3.jpg
│   │   │   └── gallery-4.jpg
│   │   └── menu/                  # All 29 Menu item images (<250 KB each)
│   │       ├── chicken-biryani.jpg
│   │       ├── family-pack-biryani.jpg
│   │       ├── jumbo-pack-biryani.jpg
│   │       ├── fried-piece-biryani.jpg
│   │       ├── veg-manchurian.jpg
│   │       ├── chicken-lollipop.jpg
│   │       ├── chicken-65.jpg
│   │       ├── chicken-manchurian.jpg
│   │       ├── chilli-chicken.jpg
│   │       ├── ginger-chicken.jpg
│   │       ├── veg-noodles.jpg
│   │       ├── veg-manchurian-noodles.jpg
│   │       ├── veg-schezwan-noodles.jpg
│   │       ├── egg-noodles.jpg
│   │       ├── chicken-noodles.jpg
│   │       ├── chicken-schezwan-noodles.jpg
│   │       ├── veg-fried-rice.jpg
│   │       ├── jeera-rice.jpg
│   │       ├── veg-manchurian-rice.jpg
│   │       ├── veg-schezwan-rice.jpg
│   │       ├── veg-paneer-rice.jpg
│   │       ├── egg-fried-rice.jpg
│   │       ├── egg-manchurian-rice.jpg
│   │       ├── egg-schezwan-fried-rice.jpg
│   │       ├── chicken-fried-rice.jpg
│   │       ├── chicken-schezwan-fried-rice.jpg
│   │       ├── biryani-combo.jpg
│   │       ├── veg-combo.jpg
│   │       └── nonveg-combo.jpg
│   └── menu.json                  # Sync copy for static hosting
├── scripts/
│   └── prepare-images.mjs         # Sharp image optimizer script
├── src/
│   ├── app.js                     # Core application logic & cart engine
│   └── styles.css                 # Luxury design system & animations
├── index.html                     # Main source HTML
├── package.json                   # Project configuration & npm scripts
└── README.md                      # Documentation
```

---

## 🛠️ How to Edit Prices & Menu Items (`menu.json`)

All menu items and restaurant details are controlled by [`public/data/menu.json`](file:///c:/Users/madya/OneDrive/Microsoft%20Copilot%20Chat%20Files/sandeep%20resturent/public/data/menu.json).

### 1. Changing an Item's Price
Open `public/data/menu.json` and locate the item by its `id`:
```json
{
  "id": "chicken-biryani",
  "name": "Chicken Biryani",
  "prices": {
    "S": 130,
    "F": 220
  }
}
```
- To update prices, simply change the numbers:
  - `"S": 140` (for Small portion)
  - `"F": 230` (for Full portion)
- If an item only has one fixed price (like Family Pack or Combos), only define `"F"`:
  ```json
  "prices": { "F": 460 }
  ```

### 2. Updating Restaurant Phone Number or WhatsApp
In the `"restaurant"` section of `menu.json`:
```json
"restaurant": {
  "phone": "+91 98765 43210",
  "whatsapp": "+919876543210"
}
```
Replace with your actual 10-digit number (include the `91` country code for WhatsApp).

### 3. Adding or Enabling New Items (e.g. Momo's & Milkshakes)
Simply add a new object to the `"items"` array:
```json
{
  "id": "chicken-steamed-momo",
  "name": "Steamed Chicken Momo's (6 pcs)",
  "category": "momos",
  "veg": false,
  "signature": false,
  "description": "Juicy minced chicken wrapped in delicate dough with fiery red chutney.",
  "image": "/images/menu/chicken-steamed-momo.jpg",
  "prices": { "F": 120 }
}
```

---

## 📸 How to Replace Images with Real Photos

Every item has an image mapped to:
`/public/images/menu/<id>.jpg`

To replace any illustration with a real photo taken at the restaurant:
1. Save your photo as a `.jpg` or `.png` file.
2. Name it with the exact `id` of the menu item (for example, `chicken-biryani.jpg` or `chicken-65.jpg`).
3. Place it into `public/images/menu/` (and into `dist/images/menu/` if using the pre-built dist folder), replacing the existing file.
4. Refresh your browser — the website will immediately show your new real photograph!

> **Recommended Photo Specs**:
> - Aspect Ratio: 4:3 (e.g., 1600x1200 or 1200x900)
> - Orientation: Horizontal landscape
> - File size: Under 300 KB for lightning-fast mobile loading

---

## 🚀 How to Run Locally

### Option 1: Quick Development Server (Vite)
Open your terminal in this directory and run:
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### Option 2: Rebuilding for Production
```bash
npm run build
```
This updates the `dist/` folder with minified code and assets.

---

## 🌐 How to Deploy

### Deploying to Hostinger (Shared Hosting / cPanel / hPanel)
1. In your Hostinger dashboard, go to **File Manager** -> `public_html`.
2. Upload the contents of the `dist/` folder (or drag and drop all files from `dist/` directly into `public_html`).
3. Your luxury website is live instantly on your domain!

### Deploying to Vercel or Netlify
- Push the repository to GitHub.
- Import into **Vercel** or **Netlify**.
- Build settings:
  - **Build Command**: `npm run build`
  - **Output Directory**: `dist`
- Click Deploy!

---

*Handcrafted with ❤️ by ZippyTechSystems for Reddy's Daily Treats.*
