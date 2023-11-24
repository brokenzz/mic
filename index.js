const { Telegraf } = require('telegraf');

const bot = new Telegraf("6740834381:AAE7l8iKfFhG4TYNjGJDFz5ylp7COBeYYQ8");
bot.start((ctx) => ctx.reply('Привет! Я бот, который может рассказать тебе о текущей дате и дне недели. Просто напиши мне "Какой сегодня день?"'));

bot.hears("Какой сегодня день?", (ctx) => {
  const currentDate = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString('ru-RU', options);

  ctx.reply('Сегодня ' + formattedDate);
});
bot.launch();