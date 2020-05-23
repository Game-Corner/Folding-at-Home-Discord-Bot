const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config()
const Donor = require('./responses')

// When discord.js client is ready
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setPresence({ activity: { name: 'f.help' } })
    .then(console.log)
    .catch(console.error);
});

// When client receives a message
client.on('message', msg => {
  // Split the message into an array based on the special "coding-like" input method
  var messageContents = msg.content.match(/[^\.]+/g);

  if (messageContents) {
    if (messageContents[0] === 'f') {
      switch (messageContents[1]) {
        case 'donor':
          new Donor(msg, messageContents[2])
          break;
      }
    }
  }
});

client.login(process.env.TOKEN);
