const { Client, Presence } = require("discord.js-selfbot-v13");
require("dotenv").config();

const client = new Client();

const activities = [
  { type: "CUSTOM", emoji: "🟢", name: "hello" },
  { type: "CUSTOM", emoji: "🔴", name: "bye" },
];

client.on("ready", async () => {
  console.log(`ready!`);
  let index = 0;

  setInterval(() => {
    client.user.setPresence({
      activities: [activities[index]],
      status: index ? "dnd" : "online",
    });

    index = index ? 0 : 1;
  }, 5000);
});

client.login(process.env.TOKEN);
