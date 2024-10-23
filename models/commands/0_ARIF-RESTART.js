module.exports.config = {
        name: "restart",
        version: "1.0.0",
        hasPermssion: 2,
        credits: "ARIF-BABU",
        description: "Restart Bot",
        commandCategory: "system",
        usages: "",
        cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
        const { threadID, messageID } = event;
        return api.sendMessage(`आरिफ़ बाबू 2 मिनट रुको रीस्टार्ट कर रहा हूं 😛🍎`, threadID, () => process.exit(1));
}
