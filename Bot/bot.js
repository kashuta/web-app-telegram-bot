const {Telegraf} = require("telegraf");
require('dotenv').config();

const link = process.env.LINK;
const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start((ctx) => ctx.reply('Welcome :)', {
    reply_markup: {
        keyboard: [[{
            text: "Web-app",
            web_app: {url: link}
        }]]
    }
}))
bot.launch()
