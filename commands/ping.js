exports.run = async (bot, message, args) => {
    const Discord = require('discord.js');
    const m = await message.channel.send('Gathering info about message latency and API latency.')
    let embed = new Discord.RichEmbed()
        .setThumbnail(bot.user.avatarURL) // this gets the author's avatar
        .setColor("#55ffab") // this sets the color of the embed
        .addField("Message latency:", m.createdTimestamp - message.createdTimestamp + "ms") // sends message latency
        .addField("API latency:", bot.ping + "ms") // sends API latency
        .setAuthor(message.guild.me.user.tag) // adds bot as the author
        .setFooter('Embedded by ' + message.guild.me.user.username, 'https://i.imgur.com/mT3u9Lg.png') // sets the footer
        .setTimestamp(); // adds a nice little timestamp :)
    message.channel.bulkDelete("1")
    message.channel.send(embed)
}