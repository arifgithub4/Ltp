const fs = require("fs");
module.exports.config = {
  	name: "autoreactv4",
        version: "1.0.1",
  	hasPermssion: 0,
  	credits: "John Lester", 
  	description: "No Prefix",
  	commandCategory: "no prefix",
        cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  	var { threadID, messageID } = event;
  	let react = event.body.toLowerCase();
  	if(react.includes("pair") || react.includes("PAIR") || react.includes("ANNU") || react.includes("annu") || react.includes("girldp") || react.includes("boydp") || react.includes("cpldp") || react.includes("hotdp") || react.includes("dp") || react.includes("DP") || react.includes("girlvidos") || react.includes("shtvios") || react.includes("SHTVIDOS") || react.includes("iddp") || react.includes("dpid") || react.includes("IDDP") || react.includes("bot") || react.includes("BOT") || react.includes("babu") || react.includes("BABU") || react.include("ARIF") || react.includes("arif") || react.includes("Arif") ||  react.includes("😎") || react.includes("🤓") || react.includes("annu2") || react.includes("annu3") || react.includes("annu4") || react.includes("❤️") || react.includes("🙋") || react.includes("🙆") || react.includes("🥵") || react.includes("🙂") || react.includes("🥱") || react.includes("🎤") || react.includes("♥️") || react.includes("🤗") || react.includes("😒")) {
    		var msg = {
        				body: ""
      			}
      			api.sendMessage(msg, threadID, messageID);
        api.setMessageReaction("♥️", event.messageID, (err) => {}, true)
    		}
  	}
  	module.exports.run = function({ api, event, client, __GLOBAL }) {

    }
