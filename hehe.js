const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./botconfig.json');
const { prefix, token } = require('./botconfig.json');
const Pornsearch = require('pornsearch');
const Searcher = new Pornsearch('tits');

client.on(`ready`, () => {
  console.log(`I'm about to get on!`);
   client.user.setActivity("p!porn", {type: "WATCHING"});
  client.user.setStatus("idle")
  
});


client.on('message', message => {
  if (message.channel.type == "text") {
    if (message.author.bot === false) {
      if (message.content.split(' ')[0] == "p!porn") {
if (!message.channel.nsfw) 
  return message.channel.send("⛔ THIS CHANNEL IS NOT MARKED AS NSFW! You will not be able to do any nsfw commands here. ⛔")
          var search = message.content.substr(6);
          if (search == "") {
            message.channel.send("Usage: p!porn <porntype>")
            return;
          }
          const Searcher = new Pornsearch(search);
          Searcher.videos().then(function(videos) {
            var result = videos;
            var result_count = result.length;
            var rand = Math.floor(Math.random() * result_count);
            var result_solo = videos[rand];
            return message.channel.send('Here is the result of your search: **'+search +'** ', {
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
      }
    }
})
});

	client.on('guildCreate', guild => {
  let channel = client.channels.get("499832353544470539");

  const embed = new Discord.RichEmbed()
      .setColor("#b70000")
      .setAuthor(`Joined ${guild.name}`)
      .setThumbnail(guild.iconURL)
      .addField("Owner", guild.owner.user.tag)
      .addField("ID", guild.id, true)
      .addField("Users", guild.memberCount, true)
      .addField("Channels", guild.channels.size, true)
  return channel.send(embed);
});



client.on('guildDelete', guild => {
  let channel = client.channels.get("499832353544470539");

  const embed = new Discord.RichEmbed()
      .setColor("#b70000")
      .setAuthor(`Left ${guild.name}`)
      .setThumbnail(guild.iconURL)
      .addField("Owner", guild.owner.user.tag)
      .addField("ID", guild.id, true)
      .addField("Users", guild.memberCount, true)
      .addField("Channels", guild.channels.size, true)
  return channel.send(embed);
});
client.login(process.env.BOT_TOKEN);
