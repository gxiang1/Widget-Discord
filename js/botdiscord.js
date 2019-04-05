const Discord = require('discord.js')
const client = new Discord.Client()
const hook = new Discord.WebhookClient('562995983731130380', 'CX0z4CXoHez_Qahb9OdJ_5ImTk2uSe8mlxHk4MQobSS0lrj_peOyq6TKRbyjAwbFmNGe');

// Time
var date = new Date();
var h = date.getHours();
var min = date.getMinutes();

var h1 = Math.floor(h/10);
var h2 = h%10;
var m1 = Math.floor(min/10);
var m2 = min%10;

// Time emoji
var zero = '0️⃣';
var un = '1️⃣';
var deux = '2️⃣';
var trois = '3️⃣';
var quatre = '4️⃣';
var cinq = '5️⃣';
var six = '6️⃣';
var sept = '7️⃣';
var huit = '8️⃣';
var neuf = '9️⃣';

// Switch value to emoji
switch(h1){
  case 0 :
    var h1 = zero;
  break;

  case 1 :
    var h1 = un;
  break;

  case 2 :
    var h1 = deux;
  break;
}
switch(h2){
  case 0 :
    var h2 = zero;
  break;

  case 1 :
    var h2 = un;
  break;

  case 2 :
    var h2 = deux;
  break;

  case 3 :
    var h2 = trois;
  break;

  case 4 :
    var h2 = quatre;
  break;

  case 5 :
    var h2 = cinq;
  break;

  case 6 :
    var h2 = six;
  break;

  case 7 :
    var h2 = sept;
  break;

  case 8 :
    var h2 = huit;
  break;

  case 9 :
    var h2 = dix;
  break;
}
switch(m1){
  case 0 :
    var m1 = zero;
  break;

  case 1 :
    var m1 = un;
  break;

  case 2 :
    var m1 = deux;
  break;

  case 3 :
    var m1 = trois;
  break;

  case 4 :
    var m1 = quatre;
  break;

  case 5 :
    var m1 = cinq;
  break;
}
switch(m2){
  case 0 :
    var m2 = zero;
  break;

  case 1 :
    var m2 = un;
  break;

  case 2 :
    var m2 = deux;
  break;

  case 3 :
    var m2 = trois;
  break;

  case 4 :
    var m2 = quatre;
  break;

  case 5 :
    var m2 = cinq;
  break;

  case 6 :
    var m2 = six;
  break;

  case 7 :
    var m2 = sept;
  break;

  case 8 :
    var m2 = huit;
  break;

  case 9 :
    var m2 = neuf;
  break;
}

client.on('ready', function () {
  console.log("Bot ready")
})
// Surveille les messages
client.on('message', message => {
  if (message.content.includes ('hello')) {
    // Répond à l'utilisateur
    message.reply('Hello !');
  }
  // 👍 or 👎 game
  if (message.content.includes ('!react game')) {
    // Ajoute une réaction au message
    var reactUpDown = ['👍','👎',];
    var gameReact = reactUpDown[Math.floor(Math.random()*reactUpDown.length)];
    message.react(gameReact);
  }
  if (message.content === '!channel id') {
    // Renvoie l'id du channel
    message.channel.send(message.channel.id);
  }

  if (message.content.includes ('!clear')) {
    // Vérifie que l'utilisateur a les permissions nécessaire
    if (message.member.hasPermission('MANAGE_MESSAGES')){
      message.channel.fetchMessages().then (messages => {
        // Suppression des messages
        message.channel.bulkDelete(messages);
        // Indique que les messages ont été supprimé + suppression du message
        message.channel.send('Chat cleared ! Deleting this message in 5s').then (message =>
          {message.delete(5000);})
      })
  }
else{
  message.reply('Vous ne pouvez pas utiliser cette commande.');
}}

  if (message.content.includes('!time')) {
    // Affiche l'heure en emoji
    message.channel.send("Il est "+h1+h2+" : "+m1+m2);

  }

  if (message.content.includes('!help')) {
  message.channel.send({embed: {
    color: 3447003, // bleue
    title: 'Discord bot documentation',
  fields: [{
    name: '!help',
    value: 'Affiche la liste des commandes.',
  },
  {
    name: '!react game',
    value: 'Mini jeu.',
  },
  {
    name: '!channel id',
    value: "Affiche l'id du channel",
  },
  {
    name: '!clear',
    value: 'Clear le chat.',
  },
  {
    name: '!time',
    value: "Affiche l'heure",
  }
],
  }});
}


});
client.login('NTYwNzc2NjY4NzgwOTUzNjEx.XKS2Cg.p9Z6dm-2RgUjbG9orpSjbbRN4cM')
// hook.send('Hello World !') // Envois un message via le webhook après la connexion
