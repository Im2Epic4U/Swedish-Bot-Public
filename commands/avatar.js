exports.run = async (bot, message, args) => {
    const Discord = require('discord.js');
    let embed = new Discord.RichEmbed()
        .setImage(message.author.avatarURL) // this gets the author's avatar
        .setColor("#55ffab") // this sets the color of the embed
        .setTitle("URL: " + message.author.avatarURL)
        .setAuthor(message.guild.me.user.tag)
        .setFooter('Embedded by ' + message.guild.me.user.username, 'https://i.imgur.com/mT3u9Lg.png')
        .setTimestamp();
    message.channel.send(embed)
}