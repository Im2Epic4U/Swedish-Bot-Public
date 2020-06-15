const Discord = require('discord.js');
const fs = require('fs');
const Enmap = require('enmap');
const bot = new Discord.Client();
const config = require('./config.json');

bot.config = config;


fs.readdir('./events/', (err, files) => {
    if (err) return console.error(err)
    files.forEach(file => {
        const event = require(`./events/${file}`);
        let eventName = file.split('.')[0];
        bot.on(eventName, event.bind(null, bot));
    });
});

bot.commands = new Enmap();

fs.readdir('./commands/', (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith('.js')) return;
        let props = require(`./commands/${file}`);
        let commandName = file.split('.')[0];
        console.log(`Attempting to load command ${commandName}`);
        bot.commands.set(commandName, props);
    });
});

bot.login(bot.config.token);