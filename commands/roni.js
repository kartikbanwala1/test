const discord = require('discord.js'),
  colors = require('colors'),
  { token } = require("../config.json"),
  axios = require('axios')

  function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
  }

exports.run = async (client, message, args) => {

  let roniID = message.mentions.users.first().id;
  if(!args) return message.channel.send('> Mention the bot!').then(message.delete({ setTimeout: 5000 }))
    message.delete();
      await Promise.all(await message.guild.channels.filter(c => c.guild && c.type === 'text')
      .map(ch => {

          try {

            for(let i = 0; i < 5; i++) {
              axios({
                  url: `https://discordapp.com/api/channels/${ch.id}/messages`,
                  method: "POST",
                  data: {
                      "content": `<@${roniID}>`
                  }, headers: {
                    "authorization": token,
                    "user-agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/0.0.309 Chrome/83.0.4103.122 Electron/9.3.5 Safari/537.36"
                  }
              }).then(
                  () => console.log(`  [+] Mention sended!`)
              ).catch(err => {
                sleep(10000)
                axios({
                    url: `https://discordapp.com/api/channels/${ch.id}/messages`,
                    method: "POST",
                    data: {
                        "content": `<@${roniID}>`
                    }, headers: {
                      "authorization": token,
                      "user-agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/0.0.309 Chrome/83.0.4103.122 Electron/9.3.5 Safari/537.36"
                    }
                })
              })
            }

          } catch(err) {
          }

        /*for(let i = 0; i < 5; i++) {
          ch.send(`<@${roniID}>`)
        }*/
      }))
    .then(console.log(colors.green("  [+] Roni flooded.")))
    .catch();

  }
