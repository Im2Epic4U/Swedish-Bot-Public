exports.run = async (bot, message) => {
    const Discord = require('discord.js');
    const userMentionui = message.mentions.users.first() || message.author;
    const memberMentionui = message.mentions.members.first() || message.member;
    let userinfoui = {}
            userinfoui.bot = userMentionui.bot;
            userinfoui.createdat = userMentionui.createdAt;
            userinfoui.discrim = userMentionui.discriminator;
            userinfoui.id = userMentionui.id;
            userinfoui.tag = userMentionui.tag;
            userinfoui.uname = userMentionui.username;

            userinfoui.avatar = userMentionui.avatarURL;

            const rolesOfTheMemberui = memberMentionui.roles.filter(r => r.name !== '@everyone').map(role => role.name).join(', ')

            const userinfoembedui = new Discord.RichEmbed()
                .setAuthor(userinfoui.uname, userinfoui.avatar)
                .addField("Bot?", userinfoui.bot, true)
                .addField("Created At", userinfoui.createdat, true)
                .addField("Discriminator", userinfoui.discrim, true)
                .addField("Client ID", userinfoui.id, true)
                .addField("Client Tag", userinfoui.tag, true)
                .addField("Username", userinfoui.uname, true)
                .addField("Roles", rolesOfTheMemberui, true)
                .setColor("#f9f9f9")
                .setTitle("About this user...")
                .setThumbnail(userinfoui.avatar)
                .setTimestamp(Date.now())

            message.channel.send(userinfoembedui);
}