/**
 * JUNO Kitchen & Co. - WhatsApp Automation Configuration
 * Business Hotline & Order Channel: +91 90145 61737
 */
export const CONFIG = {
  restaurant: {
    name: "JUNO Kitchen & Co.",
    tagline: "Good Food Good Vibes",
    address: "Canara Nagar, Boduppal, Hyderabad, Telangana 500092",
    whatsapp: "919014561737",
    ownerPhone: "+91 90145 61737",
    deliveryCommitment: "20 MINUTES GUARANTEED"
  },
  payment: {
    merchantName: "YELLAMLA SANDEEP",
    upiId: "BHARATPE2I0U0D1W7A42341@unitype",
    scannerImageUrl: "https://raw.githubusercontent.com/sandeep/juno/main/public/images/juno-upi-scanner.jpg",
    advancePercent: 50
  },
  categories: [
    { id: "biryani", name: "Biryani Section 🍚" },
    { id: "veg_starters", name: "Veg Starters 🥦" },
    { id: "nonveg_starters", name: "Non-Veg Starters 🍗" },
    { id: "noodles", name: "Noodles 🍜" },
    { id: "rice", name: "Rice Items 🍛" },
    { id: "combos", name: "Special Combos 🎁" }
  ],
  menu: {
    biryani: [
      { id: "chicken_biryani", name: "Chicken Biryani", prices: { S: 130, F: 220 } },
      { id: "fried_piece_biryani", name: "Fried Piece Biryani", prices: { S: 140, F: 240 } },
      { id: "family_pack", name: "Family Pack Biryani", prices: { F: 460 } },
      { id: "jumbo_pack", name: "Jumbo Pack Biryani", prices: { F: 690 } }
    ],
    veg_starters: [
      { id: "veg_manchurian", name: "Veg Manchurian", prices: { S: 70, F: 120 } }
    ],
    nonveg_starters: [
      { id: "chicken_lollipop", name: "Chicken Lollipop", prices: { S: 120 } },
      { id: "chicken_65", name: "Chicken 65", prices: { S: 130, F: 220 } },
      { id: "chicken_manchurian", name: "Chicken Manchurian", prices: { S: 120, F: 200 } },
      { id: "chilli_chicken", name: "Chilli Chicken", prices: { S: 130, F: 220 } },
      { id: "ginger_chicken", name: "Ginger Chicken", prices: { S: 130, F: 220 } }
    ],
    noodles: [
      { id: "veg_noodles", name: "Veg Noodles", prices: { S: 70, F: 120 } },
      { id: "veg_manchurian_noodles", name: "Veg Manchurian Noodles", prices: { S: 80, F: 130 } },
      { id: "veg_schezwan_noodles", name: "Veg Schezwan Noodles", prices: { S: 90, F: 140 } },
      { id: "egg_noodles", name: "Egg Noodles", prices: { S: 80, F: 130 } },
      { id: "chicken_noodles", name: "Chicken Noodles", prices: { S: 90, F: 159 } },
      { id: "chicken_schezwan_noodles", name: "Chicken Schezwan Noodles", prices: { S: 100, F: 169 } }
    ],
    rice: [
      { id: "veg_fried_rice", name: "Veg Fried Rice", prices: { S: 70, F: 120 } },
      { id: "jeera_rice", name: "Jeera Rice", prices: { S: 70, F: 120 } },
      { id: "veg_manchurian_rice", name: "Veg Manchurian Rice", prices: { S: 80, F: 140 } },
      { id: "veg_schezwan_rice", name: "Veg Schezwan Rice", prices: { S: 80, F: 140 } },
      { id: "veg_paneer_rice", name: "Veg Paneer Rice", prices: { S: 100, F: 180 } },
      { id: "egg_fried_rice", name: "Egg Fried Rice", prices: { S: 80, F: 140 } },
      { id: "egg_manchurian_rice", name: "Egg Manchurian Rice", prices: { S: 90, F: 160 } },
      { id: "egg_schezwan_fried_rice", name: "Egg Schezwan Fried Rice", prices: { S: 90, F: 160 } },
      { id: "chicken_fried_rice", name: "Chicken Fried Rice", prices: { S: 90, F: 160 } },
      { id: "chicken_schezwan_fried_rice", name: "Chicken Schezwan Fried Rice", prices: { S: 100, F: 170 } }
    ],
    combos: [
      { 
        id: "biryani_combo", 
        name: "Biryani Combo", 
        price: 280, 
        includes: "Chicken Lollipop (2 pcs) + Chicken Biryani (Full) + 2 Cold Drinks" 
      },
      { 
        id: "veg_combo", 
        name: "Veg Combo", 
        price: 229, 
        includes: "Veg Manchurian + Veg Rice/Noodles + Veg Paneer Rice + 2 Cold Drinks" 
      },
      { 
        id: "nonveg_combo", 
        name: "Non-Veg Combo", 
        price: 319, 
        includes: "Chicken Manchurian + Chicken Rice/Noodles + Chicken Biryani (S) + 2 Cold Drinks" 
      }
    ]
  }
};
