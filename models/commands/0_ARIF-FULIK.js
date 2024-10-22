module.exports.config = {
  name: "fulik",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "PREM BABU",
  description: "fulik do",
  commandCategory: "Random-IMG",
  usages: "tkiya",
  cooldowns: 2,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }

};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"https://i.imgur.com/mkaZgt5.jpg","https://i.imgur.com/e1cIs1I.jpg","https://i.imgur.com/tPRCJFY.jpg","https://i.imgur.com/hiCVQZc.jpg","https://i.imgur.com/BnpXEJQ.jpg","https://i.imgur.com/mAYigRf.jpg","https://i.imgur.com/7Af4ntt.jpg","https://i.imgur.com/aL1Y2i5.jpg","https://i.imgur.com/KGPjG6M.jpg","https://i.imgur.com/VW1BBMS.jpg","https://i.imgur.com/zizIOMO.jpg","https://i.imgur.com/gY742Oi.jpg","https://i.imgur.com/4p2Mpsx.jpg","https://i.imgur.com/vsS6Zn9.jpg","https://i.imgur.com/iPphMFd.jpg","https://i.imgur.com/NAPRSdH.jpg","https://i.imgur.com/4I6Akv6.jpg","https://i.imgur.com/uCatln7.jpg","https://i.imgur.com/iF963xI.jpg","https://i.imgur.com/NiT5PEz.jpg","https://i.imgur.com/SayOcZB.jpg","https://i.imgur.com/2850Dow.jpg","https://i.imgur.com/rsbbAeQ.jpg","https://i.imgur.com/wcAvff4.jpg","https://i.imgur.com/QeIsqgu.jpg","https://i.imgur.com/RhgpZKj.jpg","https://i.imgur.com/8c6wHTg.jpg","https://i.imgur.com/jSIVJEg.jpg","https://i.imgur.com/m6J14Zn.jpg"
     ];
     var callback = () => api.sendMessage({body:`𝐘 𝐋𝐎 𝐁𝐀𝐁𝐔 𝐅𝐔𝐋𝐊𝐈 𝐊𝐇𝐀 𝐋𝐎 😋`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };
