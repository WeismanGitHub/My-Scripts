const { Client } = require('discord.js-selfbot-v13');
require("dotenv").config();

const client = new Client();

client.on('ready', async () => {
    console.log(`ready!`);

    const channel = await client.channels.fetch(process.env.CHANNEL_ID)

    setInterval(() => {
        channel.sendTyping()
    }, 8000)
})

client.login(process.env.TOKEN);
