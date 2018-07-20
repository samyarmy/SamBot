const Discord = require('discord.js');
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('database.json')
const db = low(adapter)

db.defaults({ histoires: []});

var bot = new Discord.Client();
var prefix = ("/")
var randnum = 0;

bot.on('ready', () => {
    bot.user.setPresence({ game: { name: '[/help] Bot Modération', type: 0 }})
    console.log("Bot Ready !");
})

bot.login('NDY5ODY3OTI2ODA4NDI4NTU0.DjN-og.B7O5-f7AClYAzRnvdzgySaCVdEg');

bot.on('message', message => {
    if (message.content === "ping"){
        message.reply("pong")
        console.log('ping pong');
    }

    if (message.content === (prefix + "help" )){
        var help_embed = new Discord.RichEmbed()
            .setColor('#F4FD00')
            .addField("Commandes du Bot !", "    -/help : Affiche les commandes du bot !")
            .addField("Interaction", "ping : Le bot répond pong !")
            .setFooter("C'est tous pour ce embed")
            message.channel.sendEmbed(help_embed);
        //message.channel.send("Voici les commandes du bot :\n -/help pour afficher les commandes");
        console.log("Commande Help demandée !")
    }

    if (message.content === "Comment vas-tu Samy?"){
        random();

        if (randnum == 0){
            console.log(randnum);
        }

        if (randnum == 1){
            message.reply("(Réponse Numéro 1), Merci Je pète la forme et toi ?")
            console.log(randnum);
        }

        if (randnum == 2){
            message.reply("(Réponse Numéro 2), Je ne vais pas très bien merci de prendre des nouvelles de moi !");
            console.log(randnum);
        }     

    }



})

function random(min, max) {
    min = Math.cell(0);
    max = Math.floor(3);
    randnum = Math.floor(Math.random() * (max - min +1) + min);
}