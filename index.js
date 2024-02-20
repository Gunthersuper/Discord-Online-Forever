const Eris = require("eris");
const keep_alive = require('./keep_alive.js')

// Replace TOKEN with your bot account's token
const bot = new Eris(process.env.token);

bot.on("error", (err) => {
  console.error(err); // or your preferred logger
});

bot.on("ready", () => {
  console.log("Ready!");
  bot.editStatus("idle", {name: "Blob Project", type: 1, url: "https://twitch.tv/discord"})
})

bot.connect(); // Get the bot to connect to Discord
