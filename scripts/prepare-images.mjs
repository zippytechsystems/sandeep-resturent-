import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const BRAIN_DIR = 'C:/Users/madya/.gemini/antigravity-ide/brain/45acd871-b81f-424f-b6c4-6755e343d479';
const PROJECT_DIR = 'C:/Users/madya/OneDrive/Microsoft Copilot Chat Files/sandeep resturent';
const MENU_IMG_DIR = path.join(PROJECT_DIR, 'public/images/menu');
const GALLERY_IMG_DIR = path.join(PROJECT_DIR, 'public/images/gallery');
const HERO_IMG_DIR = path.join(PROJECT_DIR, 'public/images');

fs.mkdirSync(MENU_IMG_DIR, { recursive: true });
fs.mkdirSync(GALLERY_IMG_DIR, { recursive: true });

// Mapping of AI generated local files
const AI_GENERATED_MAP = {
  'hero-biryani': { file: 'hero_biryani_1791882967832.jpg', dest: path.join(HERO_IMG_DIR, 'hero-biryani.jpg'), aspect: '16:9' },
  'chicken-biryani': { file: 'chicken_biryani_1791883030808.jpg', dest: path.join(MENU_IMG_DIR, 'chicken-biryani.jpg'), aspect: '4:3' },
  'family-pack-biryani': { file: 'family_pack_biryani_1791883046734.jpg', dest: path.join(MENU_IMG_DIR, 'family-pack-biryani.jpg'), aspect: '4:3' },
  'jumbo-pack-biryani': { file: 'jumbo_pack_biryani_1791883069835.jpg', dest: path.join(MENU_IMG_DIR, 'jumbo-pack-biryani.jpg'), aspect: '4:3' },
  'fried-piece-biryani': { file: 'fried_piece_biryani_1791883085638.jpg', dest: path.join(MENU_IMG_DIR, 'fried-piece-biryani.jpg'), aspect: '4:3' },
  'veg-manchurian': { file: 'veg_manchurian_1791883131925.jpg', dest: path.join(MENU_IMG_DIR, 'veg-manchurian.jpg'), aspect: '4:3' },
  'chicken-lollipop': { file: 'chicken_lollipop_1791883146669.jpg', dest: path.join(MENU_IMG_DIR, 'chicken-lollipop.jpg'), aspect: '4:3' },
  'chicken-65': { file: 'chicken_65_1791883161414.jpg', dest: path.join(MENU_IMG_DIR, 'chicken-65.jpg'), aspect: '4:3' },
  'chicken-manchurian': { file: 'chicken_manchurian_1791883177447.jpg', dest: path.join(MENU_IMG_DIR, 'chicken-manchurian.jpg'), aspect: '4:3' },
  'chilli-chicken': { file: 'chilli_chicken_1791883191989.jpg', dest: path.join(MENU_IMG_DIR, 'chilli-chicken.jpg'), aspect: '4:3' },
  'ginger-chicken': { file: 'ginger_chicken_1791883256097.jpg', dest: path.join(MENU_IMG_DIR, 'ginger-chicken.jpg'), aspect: '4:3' },
  'veg-noodles': { file: 'veg_noodles_1791883271649.jpg', dest: path.join(MENU_IMG_DIR, 'veg-noodles.jpg'), aspect: '4:3' },
  'veg-manchurian-noodles': { file: 'veg_manchurian_noodles_1791883288409.jpg', dest: path.join(MENU_IMG_DIR, 'veg-manchurian-noodles.jpg'), aspect: '4:3' }
};

// Curated high-res five-star aesthetic items for remaining items
const EXTERNAL_MAP = {
  'veg-schezwan-noodles': 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1600&q=80',
  'egg-noodles': 'https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&w=1600&q=80',
  'chicken-noodles': 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1600&q=80',
  'chicken-schezwan-noodles': 'https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=1600&q=80',
  'veg-fried-rice': 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=1600&q=80',
  'jeera-rice': 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1600&q=80',
  'veg-manchurian-rice': 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1600&q=80',
  'veg-schezwan-rice': 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1600&q=80',
  'veg-paneer-rice': 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=1600&q=80',
  'egg-fried-rice': 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=1600&q=80',
  'egg-manchurian-rice': 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=1600&q=80',
  'egg-schezwan-fried-rice': 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1600&q=80',
  'chicken-fried-rice': 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=1600&q=80',
  'chicken-schezwan-fried-rice': 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=1600&q=80',
  'biryani-combo': 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=1600&q=80',
  'veg-combo': 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=1600&q=80',
  'nonveg-combo': 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1600&q=80'
};

const GALLERY_MAP = {
  'gallery-1': 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80', // luxury ambiance
  'gallery-2': 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1600&q=80', // wok flame master
  'gallery-3': 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=1600&q=80', // royal biryani handi
  'gallery-4': 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1600&q=80'  // tandoori sizzle
};

async function processImage(inputBufferOrPath, outputPath, is16x9 = false) {
  const width = 1600;
  const height = is16x9 ? 900 : 1200;
  
  let pipeline = sharp(inputBufferOrPath)
    .resize(width, height, { fit: 'cover', position: 'center' })
    .jpeg({ quality: 80, mozjpeg: true });
    
  await pipeline.toFile(outputPath);
  const stats = fs.statSync(outputPath);
  const sizeKb = Math.round(stats.size / 1024);
  console.log(`Saved: ${path.basename(outputPath)} (${width}x${height}, ${sizeKb} KB)`);
}

async function run() {
  console.log('--- Processing AI-generated images ---');
  for (const [id, item] of Object.entries(AI_GENERATED_MAP)) {
    const srcPath = path.join(BRAIN_DIR, item.file);
    if (fs.existsSync(srcPath)) {
      await processImage(srcPath, item.dest, item.aspect === '16:9');
    } else {
      console.warn(`File not found: ${srcPath}`);
    }
  }

  console.log('\n--- Processing External Menu items ---');
  for (const [id, url] of Object.entries(EXTERNAL_MAP)) {
    const dest = path.join(MENU_IMG_DIR, `${id}.jpg`);
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const arrayBuffer = await res.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      await processImage(buffer, dest, false);
    } catch (err) {
      console.error(`Failed to download ${id}:`, err.message);
    }
  }

  console.log('\n--- Processing Gallery items ---');
  for (const [id, url] of Object.entries(GALLERY_MAP)) {
    const dest = path.join(GALLERY_IMG_DIR, `${id}.jpg`);
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const arrayBuffer = await res.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      await processImage(buffer, dest, false);
    } catch (err) {
      console.error(`Failed to download ${id}:`, err.message);
    }
  }
  
  console.log('\nAll images processed successfully!');
}

run();
