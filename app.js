const Discord = require('discord.js');
const client = new Discord.Client();
const http = require('https');

function parameter (message, start) {
  switch (message[start]) {
    case '(':

      break
    case ' ':

  }
}

const embed = {
  "title": "Seth_Deegan",
  "description": "Donor Stats for user Seth_Deegan",
  "url": "https://stats.foldingathome.org/donor/donor_id",
  "color": 6437182,
  "timestamp": "2020-05-21T19:24:48.407Z",
  "footer": {
    "icon_url": "https://cdn.discordapp.com/attachments/240552501982658560/713120635714273314/catiline.svg.png",
    "text": "A Game Corner Bot"
  },
  "thumbnail": {
    "url": "https://foldingathome.org/wp-content/uploads/2016/10/foldingathome-logo-300x127.png"
  },
  "author": {
    "name": "Folding @ Home Stats",
    "url": "https://github.com/Game-Corner/Folding-at-Home-Discord-Bot",
    "icon_url": "https://foldingathome.org/wp-content/uploads/2016/09/folding-at-home-logo-300x300.png"
  },
  "fields": [
    {
      "name": "Date of Last Work Unit",
      "value": "18:56:09 GMT, Thursday, 21, May, 2020"
    },
    {
      "name": "Total Score",
      "value": "5,499,752"
    },
    {
      "name": "Total Work Units",
      "value": "483"
    },
    {
      "name": "Overall Rank",
      "value": "79,320 of 2,700,088"
    },
    {
      "name": "Active clients (within 50 days)",
      "value": "2",
      "inline": true
    },
    {
      "name": "Active clients (within 7 days)",
      "value": "2",
      "inline": true
    }
  ]
};

// When discord.js client is ready
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// When client receives a message
client.on('message', msg => {
  // Split the message into an array based on the special "coding-like" input method
  const message = msg.content.match(/\([^()]*\)|[^.]+(?=\([^()]*\))|[^.]+/g);

  // The base URL for the F@H API end points
  const base = 'https://stats.foldingathome.org/'

  if (message[0] === '@') {
    switch (message[1]) {
      case 'doner':
        if (msg.author.id == '713085095573192784') {
          msg.reply( {embed} );
        }
        break
    }
  }
});

client.login(process.env.token);
