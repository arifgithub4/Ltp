module.exports.config = {
  name: "war",
  version: "1.0.0",
  hasPermssion: 2, // Only admin can use
  credits: "ARIF-BABU",
  description: "Enables war mode where the bot replies only to messages from a specific user",
  commandCategory: "Admin",
  usages: "war on [UID] / war off",
  cooldowns: 5,
};

let warMode = false; // Tracks if war mode is active
let targetUID = null; // Stores the UID of the user to target in war mode
const botAdminUIDs = ["61553634015672", "61553634015672"]; // Replace with the actual bot admin UIDs

module.exports.handleEvent = async function({ api, event, Users }) {
  const { threadID, senderID, messageID, body } = event;

  // If war mode is active, reply only to messages from the targeted user
  if (warMode && senderID === targetUID) {
    const name = await Users.getNameUser(senderID);
    const replies = [
      "अब चुदेगा तु बेटा चल भौंक अब 🤣🤣👈",
      "तेरी माँ क़ो लंड चटाउ इधर आ बहन के लोडे 👅 भगता किधर है",
      "तेरी माँ की कच्छी मे लंड फसा कर भग जाउगा 🤣👅 फेवकॉल से भी भी मजबूत जोड़ मिलेगा रोज दूध जो पिता हु 👅🙄", "तेरी माँ क़ो चोदना फेसबुक जगत मे मेरा मकसद हो चुका है तेरी माँ क़ो कोई नहीं बचा सकेगा लिखता जा सूअर के दाहिने आंड 😂✍️", "तेरी माँ की चुत मे नलके की टोंटी घुसेड़ दूंगा 👅✍️ तेरे घर मे पानी की कमी नहीं होंगी बस नल घुमाना तेरी माँ मूतना चालु कर देगी टू भर लेना 😂✍️", "तेरी माँ की चुत फाड़ दूंगा हराम की औलाद लिख तू आज 👅✍️", "तेरी माँ क़ो पेरिस मे लेजाकर चोदुँगा बहन के लोडे भारत मे भनक भी नहीं लगने दुगा की वह चुद गयी मुझ से 🤣✍️", "तेरी माँ क़ो सुवरो से चुदवा दुगा क्युकी तू सुवर ही जन्मा है तेरा बाप भी सूअर ही था इंसान क़ो किसी और के बाप क़ो तू बाप बोलता है मादरजात 🤣✍️", "तेरी माँ क़ो चोदू यहां डिंगे मारेगा अब लिखना तेरी माँ की गांड से पाद बाहर आ गया क्या छोटू 👅✍️", "तेरी माँ क़ो दारू पीकर चोदुँगा और इतना चोदुँगा इलाज भी उसके भोसड़े का सम्भव नहीं होगा किसी अस्पताल के भीतर 🤣✍️👅", "ज़ब तेरी बूढी माँ छोटी थी उसे टॉफी देकर चोदा करता था मे यकीन नहीं तो जाकर पूछ उस बहन की लंडी से 🤣✍️", "तेरी माँ की चुत पर पत्थर मार मार के पिचका दुगा 🙄✍️ लंड के टोपे टाइप करता जा", "तेरी बहन क़ो गन्ने के खेतो मे चोदुँगा और गन्ना उसकी चुत मे डाल दुगा 👅✍️", "तेरी बहन की सील तोड़ दुगा बहन के लंड ओयो ने पटा कर लेजा कर 😂✍️", "तेरी माँ की आँखों मे लंड रख कर सोऊंगा ज़ब नींद आएगी आज मुझे 👅✍️", "तेरी माँ क़ो शिलाजीत खाकर चोदुँगा पूर्ण शक्तियों के साथ 👅✍️ मेरे पुत्र", "तेरी माँ की चुत लिख रहा हु भग मत जाना 🤣✍️ तुझे तेरी बूढी माँ का वास्ता 😂", "तेरी माँ की गांड मे बेलन डाल दूंगा जिससे तुझे रोटियां बेल बेल कर खिलाती है और ज़ब मेरी झाट का बाल तेरे खाने मे आ जाता है उसपे चिल्लाता है तू 😂✍️", "तेरी बहन क़ो घोड़ी बना कर चोदुँगा उसकी गांड मोटी कर दूंगा चोद चोद कर 😂✍️", "तेरी बहन के चुचे दबा दबा कर निचोड़ दुगा और सारा दूदू पी जाउगा 👅✍️ यम यम", "तेरी माँ चुद चुद कर आज 🙄 मुझ से बेहोस हो जायगी भगना मत लिखता जा वरना उसे कौन अस्पताल ले जायगा उठा कर रंडी के बीज 👅🤣", "दया आ रही है तुझ पर की रंडी के तू असहाय है अपनी माँ क़ो चुदने से बचाने क़ो 🤣✍️", "तेरी माँ चोदने मे हमको आनंद आता है ऐसे ही रोज अपनी माँ क़ो हमारे आगे प्रस्तुत कर दिया करो 🙄✍️",
      // ... (same as before)
    ];

    // Generate a random reply
    const reply = replies[Math.floor(Math.random() * replies.length)];

    // Send the reply
    return api.sendMessage(reply.replace("{name}", name), threadID, messageID);
  }
};

module.exports.run = async function({ api, event, args }) {
  const { threadID, messageID, senderID } = event;
  const command = args[0];

  // Check if the sender is the bot admin
  if (!botAdminUIDs.includes(senderID)) {
    return api.sendMessage("Only the bot admin can use this command.", threadID, messageID);
  }

  // Command to turn war mode on
  if (command === "on") {
    const uid = args[1]; // Get the UID from the command

    // Ensure a UID was provided
    if (!uid) {
      return api.sendMessage("Please provide a UID to target.", threadID, messageID);
    }

    // Set war mode to active and save the target UID
    warMode = true;
    targetUID = uid;

    return api.sendMessage(`War mode activated! Now targeting UID: ${uid}`, threadID, messageID);
  }

  // Command to turn war mode off
  if (command === "off") {
    // Disable war mode
    warMode = false;
    targetUID = null;

    return api.sendMessage("War mode deactivated.", threadID, messageID);
  }

  return api.sendMessage("Invalid command. Use 'war on [UID]' or 'war off'.", threadID, messageID);
};
