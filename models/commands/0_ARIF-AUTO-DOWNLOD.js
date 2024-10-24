const { alldown } = require("nayan-media-downloader");
const fs = require("fs");
const path = require("path");

module.exports = {
  config: {
    name: "linkdownload",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "ARIF-BABU",
    description: "Detects any link and downloads the file.",
    commandCategory: "Utilities",
    usages: "",
    cooldowns: 5,
  },
  run: async function({ api, event, args }) {
    // Check if the message starts with 'https://'
    const message = event.body;
    if (message.startsWith("https://")) {
      const url = message;

      // Download the file
      alldown(url).then(async (data) => {
        const filePath = path.resolve(__dirname, "cache." + data.ext);
        
        // Save the file to the local directory
        fs.writeFileSync(filePath, Buffer.from(data.data, "binary"), "binary");
        
        // Send the file via bot
        api.sendMessage({
          body: "Here is your downloaded file:",
          attachment: fs.createReadStream(filePath)
        }, event.threadID, () => {
          // Clean up the downloaded file
          fs.unlinkSync(filePath);
        }, event.messageID);
      }).catch(error => {
        api.sendMessage(`Error downloading the file: ${error.message}`, event.threadID, event.messageID);
      });
    }
  },
};
