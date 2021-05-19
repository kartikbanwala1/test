const discord = require('discord.js')

exports.run = async (client, message, args) => {

    let arg = args.slice(0).join(" ");
    message.delete();
    message.guild.setName(arg).catch(error => {});
	message.channel.send(`Server name changed to: **${message.guild.name}**`)
}