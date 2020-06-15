exports.run = async (bot, message, args) => {
    const Discord = require('discord.js');
    const user = message.mentions.users.first();
    const modStaff = message.author;
    const modPerson = message.guild.member(modStaff);

    let notspecified = new Discord.RichEmbed()
        .setDescription("❓ You need to specify a user that is in the server.")
        .setColor("#ffffff")
        .setAuthor(message.guild.me.user.tag)
        .setFooter('Embedded by ' + message.guild.me.user.username, 'https://i.imgur.com/mT3u9Lg.png')
        .setTimestamp();

    let noperms = new Discord.RichEmbed()
        .setDescription("❌ You do not have permission to execute this command!")
        .setColor("#ff0000")
        .setAuthor(message.guild.me.user.tag)
        .setFooter('Embedded by ' + message.guild.me.user.username, 'https://i.imgur.com/mT3u9Lg.png')
        .setTimestamp();
    
    if (modPerson.roles.some(r => r.id === bot.config.SAFC || modPerson.roles.some(r => r.id === bot.config.AAFC) || modPerson.roles.some(r => r.id === bot.config.dev))) {
        
        if (user) {
            const member = message.guild.member(user);
            const taggedUser = message.mentions.members.first();
            const arguments = message.content.substring(bot.config.prefix.length + taggedUser.length).split(' ').slice(2);
            const kickReason = arguments.join(' ');
    
            let notinguild = new Discord.RichEmbed()
                .setDescription(`❌ The user you specified is not in ${member.guild.name}!`)
                .setAuthor(message.guild.me.user.tag)
                .setFooter('Embedded by ' + message.guild.me.user.username, 'https://i.imgur.com/mT3u9Lg.png')
                .setColor("#ff0000")
                .setTimestamp();
    
            if (member) {
                let kickmsg = new Discord.RichEmbed()
                    .setDescription(`✅ ${user.tag} has been kicked from ${member.guild.name}!\n\nReason: ${kickReason}`)
                    .setAuthor(message.guild.me.user.tag)
                    .setFooter('Embedded by ' + message.guild.me.user.username, 'https://i.imgur.com/mT3u9Lg.png')
                    .setTimestamp()
                    .setColor("#55ffab");

                let kickmsgtwo = new Discord.RichEmbed()
                    .setDescription(`✅ ${user.tag} has been kicked from ${member.guild.name}!\n\nReason: Violating the rules`)
                    .setAuthor(message.guild.me.user.tag)
                    .setFooter('Embedded by ' + message.guild.me.user.username, 'https://i.imgur.com/mT3u9Lg.png')
                    .setTimestamp()
                    .setColor("#55ffab");
    
                if (kickReason) {
                    member.send(`You've been kicked from ${message.guild.name} for the following reason: ${kickReason}`)
                        member.kick(kickReason).then(() => {
                            message.reply({ embed: kickmsg });
                    });
                } else {
                    member.send(`You've been kicked from ${message.guild.name} for the following reason: Violating the rules`)
                        member.kick('Violating the rules');
                            message.reply({ embed: kickmsgtwo });
                };
            } else {
                message.reply({ embed: notinguild })
            }
                
        } else {
            message.reply({ embed: notspecified })
        }
    } else {
        message.reply({ embed: noperms })
    }};