const discord = require('discord.js')
const colors = require('colors')
const config = require("../config.json");

exports.run = async (client, message, args) => {
  message.delete()

  if (!message.guild.me.hasPermission("MANAGE_CHANNELS")) return console.log(colors.red(`Fuck! U don't have permissions.`))

    for(qtd = 0; qtd < 20; qtd++) {
      await message.guild.createChannel(config.channels, { type: 'text' })
    }

    console.log(colors.green("  [+] Created channels."))
  }
