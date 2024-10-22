module.exports.config = {
 name: "inf2",
 version: "1.0.1", 
 hasPermssion: 0,
 credits: "ARIF BABU",
 description: "Admin and Bot info.",
 commandCategory: "...",
	usePrefix: true,
 cooldowns: 1,
 dependencies: 
 {
	"request":"",
	"fs-extra":"",
	"axios":""
 }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
	hours = Math.floor(time / (60 * 60)),
	minutes = Math.floor((time % (60 * 60)) / 60),
	seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Manila").format("『D/MM/YYYY』 【HH:mm:ss】");
var link =[
"https://i.imgur.com/bMBDtgl.jpeg",
];
var callback = () => api.sendMessage({body:` ♛|| Admin and Bot Info ||♛

𒁍BOT NAME ♥️🙂 𒁍 ${global.config.BOTNAME}
𒁍BOT ADMIN ♥️🙂 𒁍 ${global.config.ADMINBOT}
𒁍FACEBOOK ♥️🙂 𒁍 ${global.config.OWNERLINK}
𒁍BOT PREFIX ♥️🙂 𒁍Prefix: ${global.config.PREFIX}
𒁍STATUS ♥️🙂 𒁍 ${global.config.STATUS}
𒁍OWNER NAME ♥️🙂 𒁍 ${global.config.BOTOWNER}
𒁍UPTIME ♥️🙂 𒁍
𒁍TODAY IS ♥️🙂 𒁍 ${juswa} 
𒁍BOT IS RUNNIN ♥️🙂 𒁍 ${hours}:${minutes}:${seconds}.
𒁍THANKS FOR USING ♥️🙂 𒁍 ${global.config.BOTNAME}
`,attachment: fs.createReadStream(__dirname + "owner_photo.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "owner_photo.jpg")); 
	 return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"owner_photo.jpg")).on("close",() => callback());
	};
