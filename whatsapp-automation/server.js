/**
 * JUNO Kitchen & Co. - WhatsApp Automation Server
 * Supports:
 * 1. Meta WhatsApp Cloud API Webhook
 * 2. Local Testing API for Simulator
 * 3. 24/7 Multi-turn Restaurant Order Bot
 */
import express from 'express';
import cors from 'cors';
import { processIncomingMessage } from './bot-engine.js';
import { CONFIG } from './config.js';

const app = express();
const PORT = process.env.PORT || 3000;
const VERIFY_TOKEN = process.env.WHATSAPP_VERIFY_TOKEN || 'juno_kitchen_secret_token';

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health Check & Bot Info Dashboard
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>JUNO Kitchen & Co. - WhatsApp Bot Server</title>
        <style>
          body { font-family: system-ui, sans-serif; background: #0b141a; color: #e9edef; padding: 40px; text-align: center; }
          .card { background: #1f2c34; max-width: 600px; margin: 0 auto; padding: 30px; border-radius: 20px; border: 1px solid #00a884; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
          h1 { color: #00a884; font-size: 26px; }
          .badge { background: #005c4b; color: white; padding: 6px 14px; border-radius: 20px; font-size: 13px; font-weight: bold; display: inline-block; }
          .status { margin: 20px 0; color: #aebac1; font-size: 14px; }
          .phone { font-size: 20px; font-weight: bold; color: #facc15; }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>🍽️ ${CONFIG.restaurant.name}</h1>
          <p style="color: #facc15; font-style: italic;">"${CONFIG.restaurant.tagline}"</p>
          <div class="badge">⚡ 20-Minute Delivery Guaranteed ⏱️</div>
          <div class="status">
            📍 ${CONFIG.restaurant.address}<br/>
            📱 WhatsApp Business Channel: <span class="phone">${CONFIG.restaurant.ownerPhone}</span><br/>
            💳 BharatPe UPI ID: <strong>${CONFIG.payment.upiId}</strong> (${CONFIG.payment.merchantName})
          </div>
          <hr style="border-color: #2a3942; margin: 20px 0;"/>
          <p style="color: #00a884; font-weight: bold;">🟢 WhatsApp Automation Engine Active & Listening</p>
          <p style="font-size: 12px; color: #8696a0;">Webhook URL: <code>/webhook</code> | Simulator Endpoint: <code>/api/message</code></p>
        </div>
      </body>
    </html>
  `);
});

// Meta WhatsApp Cloud API - Webhook Verification (GET)
app.get('/webhook', (req, res) => {
  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];

  if (mode === 'subscribe' && token === VERIFY_TOKEN) {
    console.log('[WHATSAPP WEBHOOK] Verified successfully with Meta!');
    res.status(200).send(challenge);
  } else {
    res.sendStatus(403);
  }
});

// Meta WhatsApp Cloud API - Incoming Webhook Message (POST)
app.post('/webhook', async (req, res) => {
  try {
    const body = req.body;

    if (body.object && body.entry) {
      for (const entry of body.entry) {
        for (const change of entry.changes || []) {
          const value = change.value;
          if (value && value.messages && value.messages[0]) {
            const message = value.messages[0];
            const from = message.from; // Sender WhatsApp phone number
            const text = message.text ? message.text.body : (message.button ? message.button.text : '');

            console.log(`[INCOMING WA MESSAGE] From: ${from} | Text: "${text}"`);

            // Process message through bot state machine
            const botReply = processIncomingMessage(from, text);
            console.log(`[BOT RESPONSE TO ${from}]:\n${botReply.text}`);

            if (botReply.notifyOwner) {
              console.log(`[NOTIFY OWNER ${CONFIG.restaurant.whatsapp}]:\n${botReply.notifyOwner.message}`);
            }
          }
        }
      }
      return res.status(200).send('EVENT_RECEIVED');
    }

    res.sendStatus(404);
  } catch (err) {
    console.error('[WEBHOOK ERROR]:', err);
    res.sendStatus(500);
  }
});

// Local & Simulator Testing API (POST)
app.post('/api/message', (req, res) => {
  const { phone, message } = req.body;
  if (!message) {
    return res.status(400).json({ error: "Missing 'message' field in body." });
  }

  const senderPhone = phone || "919014561737";
  const response = processIncomingMessage(senderPhone, message);

  res.json({
    success: true,
    phone: senderPhone,
    reply: response.text,
    image: response.image || null,
    notifyOwner: response.notifyOwner || null
  });
});

app.listen(PORT, () => {
  console.log(`=======================================================`);
  console.log(`🍛 ${CONFIG.restaurant.name} - WhatsApp Automation Server`);
  console.log(`📍 ${CONFIG.restaurant.address}`);
  console.log(`📱 WhatsApp Number: ${CONFIG.restaurant.ownerPhone}`);
  console.log(`⏱️ Commitment: ${CONFIG.restaurant.deliveryCommitment}`);
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`=======================================================`);
});
