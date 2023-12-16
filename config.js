const { readFileSync } = require('fs')
require("dotenv").config();

let badWords = [
  "vagina",
  "dick",
  "mdrchod",
  "mdrchod",
  "chutiya",
  "lodu",
  "whore",
  "hore",
  "hoe",
  "hoes",
  "lode",
  "cum",
  "idiot",
  "bastard",
  "cunt",
  "butt",
  "pussy",
  "chut",
  "suck",
  "scum",
  "scumbag",
  "niggr",
  "nigga",
  "chod",
  "bhenchod",
  "bc",
  "bhodike",
  "bsdk","randi",
  "gandu",
  "stfu",
  "ass",
  "asshole",
  "madarchod",
  "fuck",
  "motherfucker",
  "mother fucker",
  "mf",
  "mfs",
  "fk",
  "fck",
  "gand",
  "laund",
  "loda",
  "gulambi"];

global.message = {
    success: "✅ 𝚂𝚞𝚌𝚌𝚎𝚜𝚜! 𝙾𝚙𝚛𝚊𝚝𝚒𝚘𝚗 𝙲𝚘𝚖𝚙𝚕𝚎𝚝𝚎𝚍.",
    admin: "*👤 A𝙳𝙼𝙸𝙽 N𝙴𝙴𝙳𝙴𝙳!*\n\n- Dear, this command is only for Admins. You have to be a admin in this group to use this command.",
    botAdmin: "*🤖 B𝙾𝚃 A𝙳𝙼𝙸𝙽 N𝙴𝙴𝙳𝙴𝙳!*\n\n- I'm not an Admin, so I can't execute this command in this group. Please make me an Admin.",
    owner: "*👑 O𝚆𝙽𝙴𝚁 N𝙴𝙴𝙴𝙳𝙴𝙳!*\n\n- Bruh, this command is only made for this bot's owner. So you can't use this command.",
    group: "*👥 G𝚛𝚘𝚞𝚙 N𝚎𝚎𝚍𝚎𝚍!*\n\n- This command can only be executed in a group chat.",
    private: 'This command is only for private chats.',
    wait: '🔄 Processing request...',
    link: 'I need a link to process this command.',
    error: "❌ Oops! An error occurred while processing your request. Please try again later.",
    ban: `You're banned from using this bot!`,
    nsfw: 'This group is not *NSFW* enabled.',
    banChat: 'This group is banned from using this bot, please contact owner to get unbanned.'
},

module.exports = {
  botname: process.env.BotName || "Queen Anya", 
  author: process.env.Author || "@PikaBotz",
  packname: process.env.PackName || "Queen Anya v2 MD",
  socialLink: process.env.Web || "https://github.com/PikaBotz",
  footer: process.env.Footer || "© Queen Anya Bot",
  prefa: process.env.Prefix || ['.'],
  themeemoji: process.env.ThemeEmoji || "🎐",
  ownername: process.env.Owner_Name || "Pika~Kun",
  ownernumber: process.env.Owner_Number || "916900904828",
  instagramId: process.env.Insta || "8.08_only_mine",
  warns: process.env.Warns_Limits || 3,
  mongoUrl: process.env.MongoDB || "mongodb+srv://slkawwa:kawwasl2008@slkawwa.bag76ht.mongodb.net/",
  welcome: process.env.Welcome_Msg || '*@$user* joined this group today as $membersth member.\n\n_$prefix welcome off to disable this message._',
  left: process.env.Left_Msg || 'Ex-member *@$user* is no longer available in this group chat.\n\n_$prefix goodbye off to disable this message._',
  promote: process.env.Promote_Msg || '*@$user* has been promoted as an admin in this group.\n\n_$prefix promotem off to disable this message._',
  demote: process.env.Demote_Msg || '*@$user* has been demoted to a member in this group.\n\n_$prefix demotem off to disable this message._',
  sessionId: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdW_AN_YA_ZmZXIiLCJkYXRhIjoiR0I0dUJBUmFvSEpyUStxTHZLVXpRT0xVQzdqMFJzM08vSVdhRjNiW_AN_YA_jZFST0ifSwicHVibGljIjp7InR5cGUiOiJCdW_AN_YA_ZmZXIiLCJkYXRhIjoibm9zQmlKQXlVMlJxR2JwK1BDTDgvbW_AN_YA_1vREpLW_AN_YA_EhBcjdNalhsZ2FZV21sOD0ifX0sInBhaXJpbmdFcGhlbW_AN_YA_VyYW_AN_YA_xLZXlQYW_AN_YA_lyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpRzdnVFFVaXh6R1R0TzhDOGVnbkE3VHRMYUJyYVlFUEV6Tk4xZjRQW_AN_YA_VZrPSJ9LCJwdW_AN_YA_JsaW_AN_YA_MiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1c05CMy9tSmFnTlpVQXBHUkFzcFRpRnhaOFVqQVJGU0FrNmJwYUNuVkhJPSJ9fSwic2lnbmVkSW_AN_YA_RlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJISTAvZ2xZRUJXMGdDOUpNcVZaZE55W_AN_YA_mYvNTgwZG5waE80MytqSkdxVmc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklW_AN_YA_dThJVUVxdnY1U3NOUTlkbUpOSFJVOVdjZDlrenVHeTBiYVYyelgrSE09In19LCJzaW_AN_YA_duZW_AN_YA_RQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdW_AN_YA_ZmZXIiLCJkYXRhIjoiMkVjU1FLNy9rZ1BJZXFKS081N0UzNXdRdXhLUkVESldiVW_AN_YA_lW_AN_YA_Q293MW_AN_YA_ZrW_AN_YA_T0ifSwicHVibGljIjp7InR5cGUiOiJCdW_AN_YA_ZmZXIiLCJkYXRhIjoiW_AN_YA_GhQYnpiTzRZa2lHSjRmR29CRC9nM1BXMUZOUHZnZzdjaitpa2c1NDkyVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBEelFoTVlYcTNzUDdCVHdhW_AN_YA_C93bEhrSVNW_AN_YA_TW_AN_YA_I5ZzhXa2RKY2Z2W_AN_YA_lY0dzNhdW_AN_YA_E0SmZQUDFXU056W_AN_YA_TlUc0hnVFZiRUtIT2d0M0RiRGliQ1lMY2lxNkN3PT0ifSwia2V5SW_AN_YA_QiOjF9LCJyZW_AN_YA_dpc3RyYXRpb25JZCI6MjIxLCJhZHZTZW_AN_YA_NyZXRLZXkiOiJVZUV6VW_AN_YA_RGSEhjSW_AN_YA_tjM1RzSTQyUnY1SW_AN_YA_wzc2wwK2NXYnlqVGRRVG8vc0F3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYW_AN_YA_dlcyI6W_AN_YA_10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW_AN_YA_51cGxvYW_AN_YA_RlZFByZUtleUlkIjozMSwiYW_AN_YA_Njb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW_AN_YA_50U2V0dGluZ3MiOnsidW_AN_YA_5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aW_AN_YA_NlSW_AN_YA_QiOiIzd3J1NnVzU1RBaTZ2N0dHdW_AN_YA_xpTTVBIiwicGhvbmVJZCI6ImY0NjBmMDk0LTFlOTctNDI3Yi04ZjQ2LW_AN_YA_Q2Y2JkOTJmMjVjMCIsImlkZW_AN_YA_50aXR5SW_AN_YA_QiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5a2FTNlNtNW_AN_YA_crW_AN_YA_EZSNEpUQW_AN_YA_hOMkY1clJZRXc9In0sInJlZ2lzdGVyZW_AN_YA_QiOmZhbHNlLCJiYW_AN_YA_NrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitBTE11Ylc3YnRW_AN_YA_QXFBV0hVMGpRK2tOTW_AN_YA_pvOD0ifSwicmVnaXN0cmF0aW_AN_YA_9uIjp7fSwiYW_AN_YA_Njb3VudCI6eyJkZXRhaW_AN_YA_xzIjoiQ0lqZXNvMEhFSXk5OXFzR0dBUT0iLCJhY2NvdW_AN_YA_50U2lnbmF0dXJlS2V5IjoiTmtyd0FW_AN_YA_OTFvUFdmeVp6Myt6V3VoUnBwbE5sN1pnVklxU01iNTBnQW_AN_YA_szST0iLCJhY2NvdW_AN_YA_50U2lnbmF0dXJlIjoiaGRpYzJVcC81NkRqUXBvcFdtQ3hNSGVwTkpmb1Q3MTcybFJNN3hFV01CW_AN_YA_GZ2bkZrZW_AN_YA_ZpNXhqNmNHaUJBMktGblkwW_AN_YA_XVtYm9W_AN_YA_MlA2bkllQTdnNzQrRHc9PSIsImRldmljZVNpZ25hdHVyZSI6IlMvMXRvSFcwUFAyVUt6cHlW_AN_YA_MUpKc1Z5W_AN_YA_VZ4ZVR6dW_AN_YA_xVb1ZTMmdnYko0R3ZjMEhqM0Vzanc4UGZZczRmazhENFJzZUY1TEljM1M4YXNxV1FGVjRwOERnPT0ifSwibW_AN_YA_UiOnsiaW_AN_YA_QiOiI5NDc0MDE3OTYyOToxOUBzLndoYXRzYXBwLm5ldCJ9LCJzaW_AN_YA_duYW_AN_YA_xJZGVudGl0aW_AN_YA_VzIjpbeyJpZGVudGlmaW_AN_YA_VyIjp7Im5hbW_AN_YA_UiOiI5NDc0MDE3OTYyOToxOUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaW_AN_YA_RlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUW_AN_YA_ks4QUZmZGFEMW_AN_YA_44bW_AN_YA_M5L3Mxcm9VYW_AN_YA_FaVFplMllGU0trakcrZElBSk55In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW_AN_YA_5jVGltZXN0YW_AN_YA_1wIjoxNzAyNzMxNDA5fQ==", 
  image_1: readFileSync('./lib/Assets/image_1.jpg'), // Thumbnail for allmenu command
  image_2: readFileSync('./lib/Assets/image_2.jpg'), // null image
  image_3: readFileSync("./lib/Assets/image_3.jpg"), // Thumbnail for Dashboard
  aliveMedia: readFileSync("./lib/Assets/aliveMedia.mp4"),
  menuMedia: readFileSync('./lib/Assets/menuMedia.mp4'),
  badWords: badWords,
  message: {
    success: message.success,
    admin: message.admin,
    botAdmin: message.botAdmin,
    owner: message.owner,
    group: message.group,
    private: message.private,
    wait: message.wait,
    link: message.link,
    error: message.error,
    ban: message.ban,
    nsfw: message.nsfw,
    banChat: message.banChat
  },
}



// Ignore them 👇🏻
global.botname = process.env.BotName || "Queen Anya" 
global.author = process.env.Author || "@PikaBotz" 
global.packname = process.env.PackName || "Queen Anya v2 MD" 
global.myweb = process.env.Web || "https://github.com/PikaBotz" 
global.footer = process.env.Footer || "© Queen Anya Bot" 
global.prefa = process.env.Prefix || ['.'] 
global.themeemoji = process.env.ThemeEmoji || "🎐" 
global.ownername = process.env.Owner_Name || "Pika~Kun" 
global.ownernumber = process.env.Owner_Number || "916900904828" 
global.adress = process.env.Continent || "Asia, India, Assam" 
global.timezone = process.env.TimeZone || "Asia/Kolkata" 
global.instagramId = process.env.Insta || "8.08_only_mine" 
global.email = process.env.Email_Id || "example@example.com" 
  
//--------------- Tip ----------------\\
global.Tips = [
`Type *$prefix info* for more information....`,
`Type *$prefix settings* to commit changes in the bot.`,
`If you got a bug or error, then please report to developer asap by *$prefix report* command.`
]

//--------------- Menu images ----------------\\
global.image_1 = readFileSync('./lib/Assets/image_1.jpg') // Thumbnail for allmenu command
global.image_2 = readFileSync('./lib/Assets/image_2.jpg') // null image
global.image_3 = readFileSync("./lib/Assets/image_3.jpg") // Thumbnail for Dashboard
global.menu_pic = "https://i.ibb.co/PhDcZTM/Thumbnail.png";



