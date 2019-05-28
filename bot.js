const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("582923990956244992")
setInterval(function() {
channel.send(`عمك حسين يالنوب`);
}, 30)
})

client.login("NTgyOTIzMDU3NzA3MDg5OTYw.XO03gg.NUXrzJkEmMYBb2wmc8CxVTAq7b0");
