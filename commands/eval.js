exports.run = (bot, message, args) => {
    const Discord = require('discord.js');
    const arguments = message.content.substring(bot.config.prefix.length).split(" ").slice(1);
    const clean = text => {
        if (typeof (text) === "string")
            return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        else
            return text;
    }

    let failure = new Discord.RichEmbed()
        .setColor("#ff0000")
        .setDescription("❌ You do not have permission to execute this command!")
        .setTimestamp();

    if (message.author.id !== bot.config.ownerID) return message.channel.send(failure);
    try {
        const code = arguments.join(" ");
        let evaled = eval(code);

        if (typeof evaled !== "string")
            evaled = require("util").inspect(evaled);

        message.channel.send(clean(evaled), { code: "xl" });
    } catch (err) {
        message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
}