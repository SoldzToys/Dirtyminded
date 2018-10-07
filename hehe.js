const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./botconfig.json');
const { prefix, token } = require('./botconfig.json');
const Pornsearch = require('pornsearch');
const Searcher = new Pornsearch('tits');

client.on(`ready`, () => {
  console.log(`I'm about to get on!`);
   client.user.setActivity("Porn", {type: "WATCHING"});
  client.user.setStatus("idle")
  
});

client.on('message', message => {
  if (message.channel.type == "text") {
    if (message.author.bot === false) {
      if (message.channel.nsfw == true) {
        if (message.content.split(' ')[0] == "p!porn") {
          var search = message.content.substr(6);
          if (search == "") {
            message.channel.send("Usage: p!porn <porntype>")
          }
          const Searcher = new Pornsearch(search);
          Searcher.videos().then(function(videos) {
            var result = videos;
            var result_count = result.length;
            var rand = Math.floor(Math.random() * result_count);
            var result_solo = videos[rand];
            message.channel.send('Here is an image X responding to the search "' + search + '"', {
              embed: {
                image: {
                  url: result_solo['thumb']
                },
                url: result_solo['url'],
                title: result_solo['title'],
                description: "duration: " + result_solo['duration']
              }
            });
          });

        }
      } else {
        message.channel.send("⛔ The 'NSFW' option must be enabled! Go to the current settings to activate it! ⛔")
      }
    }
  }
})
  
client.login(process.env.BOT_TOKEN);
