const Discord = require('discord.js');
module.exports = (bot, message) => {
    // eslint-disable-next-line no-unused-vars
    const clean = text => {
        if (typeof (text) === "string")
            return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        else
            return text;
    }
    // Ignore messages not starting with the prefix (in config.json)
    if (message.content.indexOf(bot.config.prefix) !== 0) return;

    // Our standard argument/command name definition.
    const args = message.content.split(/\s+/g);
    const command = args.shift().slice(bot.config.prefix.length).toLowerCase();

    // Grab the command data from the bot.commands Enmap
    const cmd = bot.commands.get(command);

    // If that command doesn't exist, silently exit and do nothing
    if (!cmd) return;

    // Run the command
    cmd.run(bot, message, args);
};
