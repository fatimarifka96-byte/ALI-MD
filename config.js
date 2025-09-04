
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

global.session = "https://ali-pair-xode.onrender.com"; 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ALI-MD~H4sIAAAAAAAAA61VSY7bRhS9S20lWJwHAQ2E4iy1JGpWK51FiSxSbHFSsSiKMgRk4V2QG9gIsva2L2HfwlufIqDUshuJY3eAkABZrCr8/96v9z5fgyQNc9RDFWi/BhkO95CgekiqDIE26BS+jzBoAg8SCNpgYnSHnLHcT8NeHkUMTzHzRIuPrSkVkRFFnHHXD5xBS9f09AacmiAr1lHofiegH9ITMx/2VzMtmtqBNuhYzLxQyOg4F32/IfQ82t7dccJmOboBpzoiDHGYBHq2QTHCMOqhyoEhfhn8/tCn+Ba9TMv5QrzbLufDiVjKDNudmnFX74cW5/JKlwxdg3oZ/GFWdtfH1aynH1bGlkVKkWh3LOwvZhy0I1aE7LAwBsZ4eQgu8PMwSJBneyghIaleXPfUYuxynbvHOcMLXNFY6NRtY1be+tZewfMdHOqEtB6O1pwtXwa85KeSn9w+DPp6Lk5smmOGlsyzfTkIzMrrlOuwi2e70ugE9nPgDr5qZftf6l6Zh56M+QaedcYKpfTQRkWMuN5M3QGJnZ3IUUtGm7Q6I3P7Mvi37obKKH6tOqNUaygP5qiC3pxTeEvkV3NbGUjbyPa7O5cZfYUPSYG/hxLNDMEbaPZQWYb+YajyvBUWxpGL53ruljqysaiskt3IH69dgyzM43Eo0xnx4DpsLdmWMrQ6+tYYKtzDLorlaewHTushuDkz2qLK9kCbPjUBRkGYEwxJmCb1HMM3AfT2E+RiRM7VBewxDH2ucZxkuS1gZyQU1qg/u7XuWDEgU7nCRiPmYGyasX0DmiDDqYvyHHlWmJMUV32U5zBAOWj/fD6omjNGcUpQN/RAG8icyDESK4o081P+qtxAksMse5UgAprAx2ncR6BNcIGa4LxfZ2hVZSSGETRGkgWZ5VlG5dWOJkuyTLFSTTC+5JyGMcoJjDPQpkVekEWakehT83+BIQmqovMMZbA6LciUKukML3c6NM3JHVZi9R/A4E+/NEGCDuQi4rr0LN0EfohzMkuKLEqhd1X4dRG6blokZFIlrloPEAbtZ9OIkDAJ8ppYkUDsbsI9UmseoO3DKEdfThth5F25PHUwNfVqEZr0YqwIKwfU2OtAfy9Nm6X/WZ0E1pvBh8fP7999eLxPPj2+uU8+vr1PPr9/d59cZt7eJ/X98dfL+9Pj79fBm+vgz/rx233y8Q/QBNE5M8PRIssxnMTyrCzRdfZ64fSFdI3RQwSGUQ7aQO3Gk2rV13SH6fDuzDSVfqCogQK+FunqvIu0d/GGshaWX4TlUo+FhcAgjKHQOMhKT6xWW20Gh1OY2lSs33wjCGiDXtFbO2seC7PZGKJlf2HIh8qg5HznjB3ZeFCjqMtxi9bU27Ua0uZuP2G2d5J0S5kH1yD0NpG2k2hXLhyDsiKiFFyuGZpyU2fz0D500fNk9HrciMTIMj1pLcFFj1Vux0X5EEir7agk2pIZ9+6IjNNyJWZxnFnVzkRpuWz460JdElrxuXGnlzlLtNJgshfWQYEmG+XSE849KXr6F4RPdg3Pn36Izq316Zx/JIcL7lq01Kn5LMRTr/6XfteBWep16A0rprlx6BZRQZKdwBT73B+phRSvFNp82DI7ddDdgFPtniyCxE9xDNogj9cQNAFOi9oCduKn38mkKoHdGV1YRzAnyldbfcOpIn/Z5eA0s2C+qVU5F8XdrPZIpWTZhEBydSlQ6qsnTcDpL7M3sBnNCAAA", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "inboxonly", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "🔸", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by ALI-MD", // // Input Yours custom...
MODE: process.env.MODE || "public", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "923003588997", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "𝐀ɭīī 𝐈𝐍𝅦𝐗īī𝐃𝐄 ‹³策", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "6.0.0",
ANTILINK: process.env.ANTILINK || "true", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "true",
ANTIBAD: process.env.ANTIBAD || "false",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot,sex", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*📞 ᴄαℓℓ ɴσт αℓℓσωє∂ ιɴ тнιѕ ɴᴜмвєʀ уσυ ∂σɴт нανє ᴘєʀмιѕѕισɴ 📵*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "𓆩ု᪳𝐀ɭīī 𝐌Ɗှ᪳𓆪", //  don't change 
BOT_PIC: process.env.BOT_PIC || "https://files.catbox.moe/2ka956.jpg", //  don't change 
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
AUTO_BIO: process.env.AUTO_BIO || "false",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "ALI MD ALIVE",
CHAT_BOT: process.env.CHAT_BOT || "false", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "false",
//not working for the moment do don't on it
GOODBYE: process.env.GOODBYE || "false", //not working for the moment do don't on it
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Asia/srilanka", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// That's All...
