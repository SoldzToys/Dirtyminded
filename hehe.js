const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./botconfig.json');
const { prefix, token } = require('./botconfig.json');
const Pornsearch = require('pornsearch');
const PornDriver = Pornsearch.search('amateur');

client.on(`ready`, () => {
  console.log(`I'm about to get on!`);
client.user.setActivity({ name: 'Pornhub Gifs', type: "WATCHING"});

 });   

PornDriver.driver('sex').gifs()
  .then((gifs) => {
    console.log(gifs);

    return PornDriver.videos();
  })
  .then(videos => console.log(videos));

     
client.login(process.env.BOT_TOKEN);
