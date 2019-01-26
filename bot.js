const Discord = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();



client.on('message', msg => {
  if (msg.content === 'السلام عليكم') {
    msg.reply('وعليكم السلام ورحمة الله وبركاته.');
  }
});




client.login(process.env.TOKEN);

