const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./botconfig.json');
const { prefix, token } = require('./botconfig.json');
const randomnsfw = require('random-puppy');
const Pornsearch = require('pornsearch');
const Searcher = new Pornsearch('tits');

client.on(`ready`, () => {
  console.log(`I'm about to get on!`);
   client.user.setActivity("Porn | (p!porn, p!nsfw)", {type: "WATCHING"});
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
            const result_solo = videos[rand];
            return message.channel.send('Here is the result of your search: **'+ search +'** ', {
              embed: {
                image: {
                  url: result_solo['thumb']
                },
                url: result_solo['url'],
                title: result_solo['title'],
                description: "Duration:" + ' ' + result_solo['duration'] //"From:" + ' ' + result_solo['href'] + ' | ' +  "Duration:" + ' ' + result_solo['duration'],
		
              }

            });
		//  console.log(result_solo)
          });
        }
      } else {
      }
    }

})

	client.on('guildCreate', guild => {
  let channel = client.channels.get("499832353544470539");

  const embed = new Discord.RichEmbed()
      .setColor(0xff0000)
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
      .setColor(0xff0000)
      .setAuthor(`Left ${guild.name}`)
      .setThumbnail(guild.iconURL)
      .addField("Owner", guild.owner.user.tag)
      .addField("ID", guild.id, true)
      .addField("Users", guild.memberCount, true)
      .addField("Channels", guild.channels.size, true)
  return channel.send(embed);
});

client.on('message', async (message) => {
   if (message.content.toLowerCase().startsWith(`${prefix}nsfw`)) { 
	   if (!message.channel.nsfw) return message.channel.send("⛔ THIS CHANNEL IS NOT MARKED AS NSFW! You will not be able to do any nsfw commands here. ⛔")
	         let nsfwreddits = [
        'suicidegirls',
        '18_19',
        'nsfw_gifs',
             'GoneWild',
             'LegsUp',
             'PussySlip',
	     'bigtiddygothgf',
	    'NSFW_GIF',
	   'porn_gifs',
	  'porn',
	'porninfifteenseconds',
       'nsfw'
    ]
    let api = nsfwreddits[Math.round(Math.random() * (nsfwreddits.length - 1))];
    let reddit = "https://image.ibb.co/jypUHf/580b57fcd9996e24bc43c531.png";
      randomnsfw(api).then(api => {
           const theirembed = new Discord.RichEmbed()
            .setTitle("NSFW ❤")
            .setColor(0xff0000)
            .setImage(api)
            .setFooter("Powered By Reddit", reddit)  
            .setTimestamp();
      message.channel.send(theirembed);
      })
     }
	   if (message.content.toLowerCase().startsWith(`${prefix}vore`)) { 
	   if (!message.channel.nsfw) return message.channel.send("⛔ THIS CHANNEL IS NOT MARKED AS NSFW! You will not be able to do any nsfw commands here. ⛔");
    let kitty = "https://image.ibb.co/mMH5S0/vorewolf.png";  
    let api = "Vore"
    let reddit = "https://image.ibb.co/jypUHf/580b57fcd9996e24bc43c531.png";
      randomnsfw(api).then(api => {
           const theirembed = new Discord.RichEmbed()
	    .setAuthor("VORE", kitty)
            .setColor(0xff0000)
            .setImage(api)
            .setFooter("Powered By Reddit", reddit)  
            .setTimestamp();
      message.channel.send(theirembed)
      })
     }
});
client.login(process.env.BOT_TOKEN);
