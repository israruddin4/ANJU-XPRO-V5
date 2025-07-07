//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0NIaGVzQytCRDV6QUZvbDV4VURTYmZKbEtLam4yTWdKcFFjNEk4NExXST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVDhzSy9hSmlWcHRRS1huMUpGV09abkNNOXlHclgyV1FSblIwNWdvQ3VrUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLRFUxaDVndkcyVGRBTnhDKzJzRHRYQWxXQkZJT0YyY3pySEZCMVFmWFV3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzbmFQcGJmVXFKUUI0WVRTT2tUKzVTWHRHVS9PTktHOEFBUWdhSTE0NGgwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNOeVJ4T0hvajBHQWJIQ2xMb0p0Z2lwb1puRXdObFNQYWhSRGNpbXZDSDg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNmN1Z3bEtCcTZCbnRvaWJOTlpaek5vNXZqbzlUTDVrSTBnRStDTEhJMDA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNE1YQmtWcHNyQWFNNTJkVUI2VlVaSVFodENKZjZVQ0cxQ2lScVg1d2MxND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQkErNTRqMVo1YU1CMHRtdFBacG9sZWFpbG9SVThOamFUbWJFQ3dWckhTbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBCT0tjMmlzNkR0aCs2eUtRYlhZWmY0Z2xGVUl6Nk0rTngvZnpKd3F3cnRZZjRpOHRSeG5XaGYyMUhIKzduekRRNUVjRTlpYXQ2YkZkZC9FK29sQWdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjIsImFkdlNlY3JldEtleSI6IlRaczZwaVZsSW5YRTExdHNQL2hEOFBXKzVuTzJLaHdiUkJKT2lXMS9lME09IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMzA4MzYzNDMzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjUxRjc0MTI3NTZERUZCQkY4RjlGQjRGRUVCNUUwQTFBIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTE4OTA5OTJ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzMwODM2MzQzM0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzODg5MTU0QTFDNkNBMjJEQzREQkRBOUY3RDA2NTA1MCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzUxODkwOTkyfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJfcUVxQkNnZFQ5eUxUb2EyQzJFNUlBIiwicGhvbmVJZCI6ImEzN2ExZjAwLWRkNTktNDRjNS05ZjExLTBkMGFmMTAxNzk0MSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJEa0xsODdQcTMrV2phVVZUV2RidlVWbHlEUVU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR3VVc09hbVZyL0ZBK2JxaDVKRDFJVXdhNE40PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjM2RUhCR00zIiwibWUiOnsiaWQiOiI5MjMzMDgzNjM0MzM6OTRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiYXJ0IiwibGlkIjoiMTkxNTAwMTc2NjE3NTk2Ojk0QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS0h5eFlZRUVKLzRyc01HR0FnZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiUGkyWG9uOE14Z2cvZnFVaFN1M1cvR2ROUVkrWnN1allWV3ZyRkNrbktSND0iLCJhY2NvdW50U2lnbmF0dXJlIjoiVndIV25hT3pseVg1dVBncHpLdnhhYlFxd095NUNUYmNBK0hNdktXRzM3R0JlN0c1VHBHdVBleVNlNThsQmkraTk5bmdYM1lFL2NrdkxGL0hNWkNzQ1E9PSIsImRldmljZVNpZ25hdHVyZSI6ImdQZ2JKZy91OFpNR01rajZtSmZMVk96L0gwdlZHZGZNN3UrMXRUT2lOOWJqSlZjSFE2MlFBZjNhL253VGJvNXpqQVR6LzNLT2VsWDNGb1lsdHpxbmdnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMzA4MzYzNDMzOjk0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlQ0dGw2Si9ETVlJUDM2bElVcnQxdnhuVFVHUG1iTG8yRlZyNnhRcEp5a2UifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBSUlDQT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1MTg5MDk4OSwibGFzdFByb3BIYXNoIjoiM1I5WjM5IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFCNHMifQ==",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "923308363433",
  PASSWORD: 
    process.env.PASSWORD || "",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
