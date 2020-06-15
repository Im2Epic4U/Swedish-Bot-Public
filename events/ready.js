module.exports = (bot, message) => {
    bot.user.setPresence({
        game: {
            name: 'over the Swedish Airforce',
            type: 'WATCHING'
        },
        status: 'dnd'
    });
    console.log(`Logged into Discord with ${bot.guilds.size} server(s), for ${bot.users.size} users.`);
};