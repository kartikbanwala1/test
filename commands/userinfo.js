const discord = require('discord.js')

exports.run = async (client, message) => {
    message.delete();
    if (message.channel.type === "dm") return;
    let args = message.content
        .split(" ")
        .slice(1)
        .join(" ");
    let UserInfo =
        message.mentions.members.first() ||
        message.guild.members.get(args[0]) ||
        message.member;
    let userEmbed = new discord.RichEmbed()
        .setTitle("User Information")
        .setColor("#4B0082")
        .addField("User:", UserInfo.user.tag)
        .addField("Status:", UserInfo.user.presence.status)
        .addField("Account created on:", UserInfo.user.createdAt)
        .addField("Id:", UserInfo.id)
		.setFooter(`SPIDER-SELFBOT - Kyanscript`)
        .setThumbnail(UserInfo.user.avatarURL);
    return message.channel.send(userEmbed);
}