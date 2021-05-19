const Discord = require('discord.js'),
  config = require("../config.json");

module.exports.run = (client, message) => {
    message.delete();
    const embed = new Discord.RichEmbed()
    .setAuthor('SPIDER', message.author.displayAvatarURL)
    .addField('nuke', ' ``Nuke the all server channels and roles.``', true)
    .addField('chn', ' ``Create the raid channels.``', true)
    .addField('everyones', ' ``Make an everyones flood.``', true)
    .addField('purge', ' ``Remove the inactive members (1 day).``', true)
    .addField('roni', ' ``Bugs and disable the Roni bot.``', true)
    .addField('banall', ' ``Ban all server members.``', true)
    .addField('lock', ' ``Lock the chat.``', true)
    .addField('unlock', ' ``Unlock the chat.``', true)
    .addField('embed', ' ``Embed message.``', true)
    .addField('userinfo', ' ``User information.``', true)
    .addField('name', ' ``Guild name changer.``', true)
    .setFooter(`SPIDER-SELFBOT - Kyanscript`)
    .setColor("#4B0082")
    .setImage('https://media.giphy.com/media/t38x3MUfZCj6DmawCy/giphy.gif')

    message.channel.send(embed);
}
