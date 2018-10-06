const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./botconfig.json');
const { prefix, token } = require('./botconfig.json');
const Pornsearch = require('pornsearch');
const PornDriver = Pornsearch.search('amateur');
const encode = require('strict-uri-encode');

client.on(`ready`, () => {
  console.log(`I'm about to get on!`);
client.user.setActivity("Pornhub Games 2020");

 });   

client.on('message', async (message, args, encode) => {

 if (message.content === `${prefix}google`) {

let question = encode(args.join(' '));
let link = `http://www.lmgtfy.com/?q=${question}`
let linkembed = new Discord.RichEmbed()
.setTitle("Google's Answer")
.setDescription(`**<${link}>**`)
.setColor("#FF8C00");
message.channel.send(linkembed);
   
 }

client.login(process.env.BOT_TOKEN)
