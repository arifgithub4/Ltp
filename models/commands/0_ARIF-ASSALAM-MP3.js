const fs = require("fs");
module.exports.config = {
  name: "Assalamualaikum",
    version: "1.1.1",
  hasPermssion: 0,
  credits: "PREM BABU", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("assalamualaikum") ||
     react.includes("Assalamualaikum") || react.includes("ASSALAMUALAIKUM") || react.includes("assalam") ||
react.includes("ASSALAM") ||
react.includes("aSSALAMUALAIKUM")) {
    var msg = {
        body: `‌𝐖𝐀𝐋𝐀𝐈𝐊𝐔𝐌 𝐀𝐒𝐒𝐀𝐋𝐀𝐌 𝐖𝐀 𝐑𝐀𝐇𝐌𝐀𝐓𝐔𝐋𝐋𝐀𝐇𝐈 𝐁𝐀𝐑𝐀𝐊𝐀𝐓𝐔𝐇 🤗💫`,attachment: fs.createReadStream(__dirname + `/noprefix/assalamualaikum.mp3`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💫", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
