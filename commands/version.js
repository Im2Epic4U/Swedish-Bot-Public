exports.run = async (bot, message, args) => {
    const Discord = require('discord.js');
    let embed = new Discord.RichEmbed()
        .setDescription("Version: " + bot.config.ver)
        .setColor("#55ffab")
        .setAuthor(message.guild.me.user.tag)
        .setFooter('Embedded by ' + message.guild.me.user.username, 'https://i.imgur.com/mT3u9Lg.png')
        .setTimestamp();
    message.channel.send(embed)
}