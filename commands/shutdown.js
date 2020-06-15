const Discord = require('discord.js')

exports.run = async (bot, message, args) => {
  let success = new Discord.RichEmbed()
    .setColor("#55ffab")
    .setDescription("Shutting down... 👋")
    .setAuthor(message.guild.me.user.tag)
    .setFooter('Embedded by ' + message.guild.me.user.username, 'https://i.imgur.com/mT3u9Lg.png')
    .setTimestamp();

  let failure = new Discord.RichEmbed()
    .setColor("#ff0000")
    .setDescription("❌ You do not have permission to execute this command!")
    .setAuthor(message.guild.me.user.tag)
    .setFooter('Embedded by ' + message.guild.me.user.username, 'https://i.imgur.com/mT3u9Lg.png')
    .setTimestamp();


  if (message.author.id === bot.config.ownerID || bot.config.martinID) {
    message.channel.send({ embed: success })
    console.log('Goodbye 👋')

    setTimeout(() => bot.destroy(), 1000)
  } else {
    message.channel.send({ embed: failure })
  }
}