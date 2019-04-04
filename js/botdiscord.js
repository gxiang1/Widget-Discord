const Discord = require('discord.js')
const client = new Discord.Client()
const hook = new Discord.WebhookClient('562995983731130380', 'CX0z4CXoHez_Qahb9OdJ_5ImTk2uSe8mlxHk4MQobSS0lrj_peOyq6TKRbyjAwbFmNGe');

client.on('ready', function () {
  console.log("Bot ready")
})
var date = new Date();
console.log(date)
// Surveille les messages
client.on('message', message => {
  if (message.content.includes ('hello')) {
    // Répond à l'utilisateur
    message.reply('Hello !');
  }
  // 👍 or 👎 game
  if (message.content.includes ('!react game')) {
    // ajoute une réaction au message
    var reactUpDown = ['👍','👎',];
    var gameReact = reactUpDown[Math.floor(Math.random()*reactUpDown.length)];
    message.react(gameReact);
  }
  if (message.content === '!channel id') {
    // renvoie l'id du channel
    message.channel.send(message.channel.id);
  }

  if (message.content.includes ('!clear')) {
    // vérifie que l'utilisateur a les permissions nécessaire
    if (message.member.hasPermission('MANAGE_MESSAGES')){
      message.channel.fetchMessages().then (messages => {
        // suppression des messages
        message.channel.bulkDelete(messages);
        // Indique que les messages ont été supprimé + suppression du message
        message.channel.send('Chat cleared ! Deleting this message in 5s').then (message =>
          {message.delete(5000);})
      })
  }
else{
  message.reply('Vous ne pouvez pas utiliser cette commande.');
}}

  if (message.content.includes('!date')) {
    hook.send({embed:{timestamp: new Date(),}});
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
    name: '!date',
    value: 'Affiche la date.',
  }
],
  }});
}


});
client.login('NTYwNzc2NjY4NzgwOTUzNjEx.XKS2Cg.p9Z6dm-2RgUjbG9orpSjbbRN4cM')
// hook.send('Hello World !') // Envois un message via le webhook après la connexion
