/**
 * JUNO Kitchen & Co. - QR Code WhatsApp Bot Runner
 * Connects directly to WhatsApp number +91 90145 61737 via QR code scan.
 * No Facebook / Meta developer account required!
 */
import makeWASocket, { DisconnectReason, useMultiFileAuthState } from '@whiskeysockets/baileys';
import qrcode from 'qrcode-terminal';
import pino from 'pino';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { processIncomingMessage } from './bot-engine.js';
import { CONFIG } from './config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const authFolder = path.join(__dirname, 'auth_info_baileys');

async function startJUNOBot() {
  const { state, saveCreds } = await useMultiFileAuthState(authFolder);

  const sock = makeWASocket({
    auth: state,
    printQRInTerminal: false,
    logger: pino({ level: 'silent' })
  });

  sock.ev.on('creds.update', saveCreds);

  sock.ev.on('connection.update', async (update) => {
    const { connection, lastDisconnect, qr } = update;

    if (qr) {
      console.log('\n=============================================================');
      console.log('📲 SCAN THIS QR CODE WITH YOUR WHATSAPP (9014561737):');
      console.log('1. Open WhatsApp on your phone (+91 90145 61737)');
      console.log('2. Tap Settings (or 3 dots) > Linked Devices > Link a Device');
      console.log('3. Scan the QR code below:');
      console.log('=============================================================\n');
      qrcode.generate(qr, { small: true });
    }

    if (connection === 'close') {
      const shouldReconnect = (lastDisconnect?.error)?.output?.statusCode !== DisconnectReason.loggedOut;
      console.log('⚠️ Connection closed. Reconnecting:', shouldReconnect);
      if (shouldReconnect) {
        startJUNOBot();
      }
    } else if (connection === 'open') {
      console.log('\n=============================================================');
      console.log(`✅ JUNO Kitchen & Co. WhatsApp Bot is ONLINE!`);
      console.log(`📱 Connected to Number: ${CONFIG.restaurant.ownerPhone}`);
      console.log(`📍 Location: ${CONFIG.restaurant.address}`);
      console.log(`⚡ 20-Minute Delivery Automated Dispatch ACTIVE!`);
      console.log('=============================================================\n');
    }
  });

  // Listen for incoming messages from customers
  sock.ev.on('messages.upsert', async ({ messages, type }) => {
    if (type !== 'notify') return;

    for (const msg of messages) {
      if (!msg.message || msg.key.fromMe) continue;

      const remoteJid = msg.key.remoteJid;
      if (!remoteJid || remoteJid.includes('@g.us') || remoteJid.includes('status@broadcast')) {
        continue; // Skip group chats and status updates
      }

      const senderPhone = remoteJid.replace(/[^0-9]/g, '');
      const incomingText = msg.message.conversation ||
                           msg.message.extendedTextMessage?.text ||
                           msg.message.buttonsResponseMessage?.selectedDisplayText ||
                           '';

      if (!incomingText.trim()) continue;

      console.log(`[CUSTOMER MESSAGE] From: ${senderPhone} | Text: "${incomingText.trim()}"`);

      // Process message through JUNO Bot Engine
      const reply = processIncomingMessage(senderPhone, incomingText);

      // Send text response
      if (reply.text) {
        await sock.sendMessage(remoteJid, { text: reply.text });
      }

      // Send BharatPe QR Scanner image if Advance Booking
      if (reply.image) {
        const localImagePath = path.join(__dirname, '../public/images/juno-upi-scanner.jpg');
        if (fs.existsSync(localImagePath)) {
          await sock.sendMessage(remoteJid, {
            image: fs.readFileSync(localImagePath),
            caption: `📲 *BHARATPE UPI QR SCANNER - JUNO KITCHEN & CO.*\nMerchant: ${CONFIG.payment.merchantName}\nUPI ID: ${CONFIG.payment.upiId}\nPay 50% advance to confirm table!`
          });
        }
      }

      // If order confirmed, also notify the owner
      if (reply.notifyOwner) {
        const ownerJid = `${CONFIG.restaurant.whatsapp}@s.whatsapp.net`;
        try {
          await sock.sendMessage(ownerJid, { text: reply.notifyOwner.message });
          console.log(`[ALERT SENT TO OWNER] ${ownerJid}`);
        } catch (e) {
          console.error('[FAILED TO NOTIFY OWNER]:', e.message);
        }
      }
    }
  });
}

startJUNOBot().catch(err => {
  console.error('Fatal Bot Error:', err);
});
