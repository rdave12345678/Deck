//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2349112171078";
global.owner = process.env.OWNER_NUMBER || "2349112171078";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0lBVDZvRGM0SzJBZ1ZmN2didENTdkV1REdPRG90a3JrWmR4WVFHU2ZHaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMnM3Y3BEVUlITUtUZ0xYOHpIcmRCZnFhNnJnR2Q3ajVKeldkaWdtNm1WQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlR0R4Y2lHckhxNDFINnduZ2dncVJCcjRQZWF3K3k3ZUE1dDdHTHlkYm1NPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUbE5ZaGxyOUpvRlJOZDRZbXpSM05CSm96K3N4ZXJ4VGZDNVdBR2hzUUJ3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBPWHJMYmY5WklWUjl4Tk1JQlVrNFpmTjRLeFdXeVVGVEFXcWZXeEdIVmM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJCQm1OVk5nOFIra0tOMUREWEdOMDFscEpNSEZEelhuVVNxSEdCWUMvUTA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUJVUkVZRU84S2ZscExxa3VXYURTMHZiQUUwU2JDTEZUNG5MT3FGMjlYcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiem9BL3FLczNrL1EwTU95OG9WOUdicWZVUkpwbWJkN0Y5Y0lIMDlQbHlpMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNKcnhWd2pRWnRZNEQvR2RMSnZ4bUUyZzJnZXFRZUJqdkpxNSsyaGNTUTczRTZienk3UmkrN1JoU3RUbi92YjJPa28xUE9NNmlMei9LclhGcy9OMGhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUsImFkdlNlY3JldEtleSI6InRiTWs4ZjdSTGM3MzRsOUI1MkFaWkhOa3RUTUVBeHcxK3Z1MlFDZ2dleEU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkE5bDFNazNXUlRha19tNU03eGRiOUEiLCJwaG9uZUlkIjoiZjdhYTlhN2UtNjg2Yy00MWVkLTllNTgtM2I2OWU1MGE4YWVlIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1kTEZ5K0NFcGtBQ1ZTWG50d2xjVEtrbzRiaz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4M0FXZHhRK0Q0VUZSa2JLSy9xM29tMk1meWc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQVJYRzdWRjIiLCJtZSI6eyJpZCI6IjIzNDkwNzc5ODMyNDM6M0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJERUNLIFRWIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNaVF2TzhPRU1PVnNiZ0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI3RHRsd2xBWStEQ1pYaC9hUzRRWDd4d2JmZFBSeEUwZXJsbVFjT05XL1hJPSIsImFjY291bnRTaWduYXR1cmUiOiJKTmRzNm85eVJyUERIMlJkUWRlbnI1NVQ3QWdOci9xSEVJdXU4NzRUU2NOU1NIQjRQaXQvNytrM25QaHNBd1dNMnJJKzRKMzg2WlRDbDlnejAyK0xpZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiNkpKblp2bVRHU01EOTJlb241dFdGNUxvOTB3eDVYbUU3a1UzRkRZRER0c0ZXWUZiNGhkOG1tRUF0dWtZNEdPUkcxUmdheTZ5WHM5VU41a3VkcE9QaFE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDc3OTgzMjQzOjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZXc3WmNKUUdQZ3dtVjRmMmt1RUYrOGNHMzNUMGNSTkhxNVprSERqVnYxeSJ9fV0sInBsYXRmb3JtIjoic21iaSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyODg1ODgzMn0=" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
