const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./botconfig.json');
const Pornsearch = require('pornsearch');
const Searcher = new Pornsearch(query, driver = 'pornhub');
const { prefix, token } = require('./botconfig.json');

client.on(`ready`, () => {
  console.log(`I'm about to get on!`);
client.user.setActivity('Pornhub Games 2020');

 });   


     
client.login(process.env.BOT_TOKEN);
