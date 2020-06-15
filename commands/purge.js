exports.run = async (bot, message, args) => {
    const Discord = require('discord.js');
    let success = new Discord.RichEmbed()
        .setColor("#55ffab")
        .setDescription(`✔ Purged ${args} messages.`)
        .setFooter('Embedded by ' + message.guild.me.user.username, 'https://i.imgur.com/mT3u9Lg.png')
        .setTimestamp();

    let failure = new Discord.RichEmbed()
        .setColor("#ff0000")
        .setDescription("❌ You do not have permission to execute this command!")
        .setFooter('Embedded by ' + message.guild.me.user.username, 'https://i.imgur.com/mT3u9Lg.png')
        .setAuthor(message.guild.me.user.tag)
        .setTimestamp();

    let noargs = new Discord.RichEmbed()
        .setColor("#f9f9f9")
        .setDescription("❓ Supply an amount of messages to delete.")
        .setFooter('Embedded by ' + message.guild.me.user.username, 'https://i.imgur.com/mT3u9Lg.png')
        .setAuthor(message.guild.me.user.tag)
        .setTimestamp();

    if (message.author.id === bot.config.ownerID) {
        if (!args[1]) return message.channel.send({ embed: noargs });
        message.channel.bulkDelete(args[1]);
        message.channel.send({ embed: success });
    } else {
        message.channel.send({ embed: failure });
    }
}