/*Kyan#1337*/
exports.run = (client, message, args) => {
    let input = args.join(" ");
    message.delete();
    message.channel.send('', {
        embed: {
            color: 0x008aad,
            author: {
                name: client.user.username
            },
            description: '' + input,
            timestamp: new Date(),
            footer: {
                text: 'SPIDER SELFBOT - KYANSCRIPT',
                icon_url: client.user.avatarURL
            }
        }
    });
};