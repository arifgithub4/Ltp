const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports.config = {
  name: "prefix",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "ARIF BABU",
  description: "Xem prefix của BOT",
  commandCategory: "Dành cho Admin",
  usages: "",
  cooldowns: 5,
};

module.exports.handleEvent = async ({ event, api, Threads }) => {
  var { threadID, messageID, body } = event;

  function out(data, attachment) {
    api.sendMessage({ body: data, attachment }, threadID, messageID);
  }

  var dataThread = await Threads.getData(threadID);
  var data = dataThread.data;
  const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
  var arr = ["mpre", "mprefix", "prefix", "where is bot"];
  
  arr.forEach(async (i) => {
    let str = i[0].toUpperCase() + i.slice(1);
    if ((body === i.toUpperCase()) | (body === i) | (str === body)) {
      const prefix = threadSetting.PREFIX || global.config.PREFIX;
      
      if (data.PREFIX == null) {
        // Download and attach the GIF
        const gifUrl = "https://i.imgur.com/hX5IRHj.gif";
        const gifPath = path.resolve(__dirname, 'prefix.gif');
        
        try {
          // Download the GIF
          const response = await axios({
            url: gifUrl,
            method: 'GET',
            responseType: 'stream'
          });
          
          // Save it locally
          const writer = fs.createWriteStream(gifPath);
          response.data.pipe(writer);
          
          writer.on('finish', () => {
            // Send the message with the GIF attached
            out(`This Is My Prefix ⇉ [ ${prefix} ]`, fs.createReadStream(gifPath));
          });

          writer.on('error', (error) => {
            console.error('Error writing the file:', error);
            out(`This Is My Prefix ⇉ [ ${prefix} ]`);
          });

        } catch (error) {
          console.error('Error downloading the GIF:', error);
          out(`This Is My Prefix ⇉ [ ${prefix} ]`);
        }
      } else {
        return out(
          "️️️️️️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️███████ ]▄▄▄▄▄▄▄▄\n▂▄▅█████████▅▄▃▂\nI███████████████████]\n◥⊙▲⊙▲⊙▲⊙▲⊙▲⊙▲⊙◤\n➢" + data.PREFIX
        );
      }
    }
  });
};

module.exports.run = async ({ event, api }) => {
  return api.sendMessage("Use /setprefix", event.threadID);
};