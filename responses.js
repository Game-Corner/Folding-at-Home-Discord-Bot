const Discord = require('discord.js');
const request = require('./api')


class Response {
    constructor(msg) {
        this.msg = msg
        this.embed = new Discord.MessageEmbed()
            .setColor('#62393E')
            .setAuthor('Folding @ Home Stats','https://foldingathome.org/wp-content/uploads/2016/09/folding-at-home-logo-300x300.png', 'https://github.com/Game-Corner/Folding-at-Home-Discord-Bot')
            .setThumbnail('https://foldingathome.org/wp-content/uploads/2016/10/foldingathome-logo-300x127.png')
            .setTimestamp()
            .setFooter('A Game Corner Bot', 'https://cdn.discordapp.com/attachments/240552501982658560/713120635714273314/catiline.svg.png');
    }
}

class Donor extends Response {
    constructor(msg, donor) {
        // Construct
        super(msg)
        var data = await request('donor', donor)
        
        /*
        var next = start + 1
        if (messageContents[next]) {
            new DonorElements(msg, messageContents, next)
        }
        */

        // Apply embed changes
        var name = data.name;
        console.log(name)

        this.embed.setTitle('donor.' + name);
        this.embed.setDescription("Donor Stats for user " + name);
        this.embed.setURL("https://stats.foldingathome.org/donor/" + data.id);
        this.embed.addFields(
            { name: 'WUs.last', value: data.last },
            { name: 'total score', value: data.credit.toLocaleString() },
            { name: 'WUs.total', value: data.wus.toLocaleString() },
            { name: 'rank', value: data.rank.toLocaleString() + 'of' + data.total_users.toLocaleString() },
            { name: 'active clients.50 days', value: data.active_50.toLocaleString(), inline: true },
            { name: 'active clients.7 days', value: data.active_7.toLocaleString(), inline: true },
            { name: 'link', value: '(comming soon) link this donor with your discord account to start to see statistics for this donor over time'}
        )
        
        msg.channel.send( {embed: this.embed} )

    }


}

module.exports = Donor