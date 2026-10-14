# JUNO Kitchen & Co. - WhatsApp Automation System 🍛🤖

Official automated WhatsApp ordering and delivery dispatch bot for **JUNO Kitchen & Co.**  
📍 **Location:** Canara Nagar, Boduppal, Hyderabad, Telangana 500092  
📱 **WhatsApp Business Hotline:** `+91 90145 61737`  
💳 **BharatPe Merchant:** `YELLAMLA SANDEEP`  
🔑 **UPI ID:** `BHARATPE2I0U0D1W7A42341@unitype`  

---

## ⚡ Key Automation Features (తెలుగు & English)

1. **Auto Welcome Greeting (ఆటోమేటిక్ గ్రీటింగ్)**:
   - When any customer texts *"Hi"* or *"Hello"*, the bot automatically introduces **JUNO Kitchen & Co.** with its Boduppal address and guarantees **20-minute delivery**!
   - Shows the 6 main categories:
     - 1️⃣ Biryani Section 🍚
     - 2️⃣ Veg Starters 🥦
     - 3️⃣ Non-Veg Starters 🍗
     - 4️⃣ Noodles 🍜
     - 5️⃣ Rice Items 🍛
     - 6️⃣ Special Combos 🎁

2. **Dish & Portion Selection (మెనూ & సైజ్ సెలెక్షన్)**:
   - Shows exact prices for Small (S) and Full (F) matching the official menu card.

3. **Spice Customization (కారము / స్పైసీ లెవెల్స్)**:
   - For every dish, customer can choose:
     - `1️⃣ No Spicy (Mild 🌶️)`
     - `2️⃣ Medium Spicy 🌶️🌶️`
     - `3️⃣ Spicy 🌶️🌶️🌶️`

4. **3 Order Types (ఆర్డర్ ఆప్షన్స్)**:
   - **Option 1: Advance Booking (Restuarent eating)**:
     - Requires **50% Advance Token Payment** ("off payment") before dining.
     - Displays the **BharatPe UPI QR Scanner** (`BHARATPE2I0U0D1W7A42341@unitype`, Yellamla Sandeep) directly to the customer.
     - Collects customer Name, Phone, and UPI UTR Reference.
   - **Option 2: Home Delivery (డెలివరీ మాన్ హోమ్ డెలివరీ)**:
     - Collects customer Name, Phone, and Boduppal doorstep address.
     - Cash or UPI on delivery.
   - **Option 3: Direct Call Order (కాల్ కాంటాక్ట్ ఆర్డర్)**:
     - Counter pickup or direct phone confirmation via Owner Hotline `+91 90145 61737`.

5. **20-Minute Delivery Promise (20 నిమిషాల డెలివరీ ప్రామిస్)**:
   - Automated response: `⚡ WE WILL DELIVER / PREPARE IN ONLY 20 MINUTES! ⏱️`
   - Owner receives full customer details & ordered items on WhatsApp.
   - Customer receives owner direct contact `+91 90145 61737` for tracking.

---

## 🚀 How to Run the Server

```bash
cd "whatsapp-automation"
npm install
npm start
```

Server runs on `http://localhost:3000`.

- **Web Status Dashboard:** Visit `http://localhost:3000`
- **Testing API Endpoint:** `POST http://localhost:3000/api/message` with JSON:
  ```json
  {
    "phone": "919014561737",
    "message": "Hi"
  }
  ```
- **Meta Cloud API Webhook:** Configure your Meta WhatsApp App Webhook URL to `https://your-domain.com/webhook` with verify token `juno_kitchen_secret_token`.
