module.exports = (bot, member, message) => {
    const Discord = require('discord.js');
    const channel = member.guild.channels.find(channel => channel.name === bot.config.welcomechannel);
    if (!channel) return;

    let welcome = new Discord.RichEmbed()
        .addField(`Welcome to ${member.guild.name}!`, `Please check the rules found in <#${bot.config.ruleschannel}>.`)
        .setImage('https://i.imgur.com/mT3u9Lg.png')
        .setAuthor(message.guild.me.user.tag)
        .setFooter('Embedded by ' + message.guild.me.user.username, 'https://i.imgur.com/mT3u9Lg.png')
        .setColor("#ff0000");

    channel.send(`${member}`, { embed: welcome });
};