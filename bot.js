const Discord = require("discord.js");
const client - new Discord.Client();
client.on('ready', () => {
  client.user.setGame(` مياوو انا الحيلوااهه سبيدي (: `, 'https://www.twitch.tv/hi');
console.log('BOT ONLINE');
});
client.login(process.env.TOKEN);
