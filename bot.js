const prefix ="!";
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
 console.log("Bot Online"); 
console.log("log");
});


 

 
client.on('ready', () => { //playing
    client.user.setGame(`مياوو سبيدي الحيلوااهه هيناا(:	`,'https://www.twitch.tv/faresgameryt');
    client.user.setStatus('Online')
});
 
 
 
 
 client.login(process.env.TOKEN);
