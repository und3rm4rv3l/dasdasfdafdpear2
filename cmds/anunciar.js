const cfg = require("../keys.json");
const Discord = require("discord.js");

exports.run = (Pietra, message, args) => {
    
	if (!['244489368717230090', '438877434033471489', '118045186654732296'].includes(message.author.id)) 
	return  message.channel.send(`${message.author} Comando registro! Apenas usuários **Owners** e **Sub-Owners** podem usá-lo.`);

	
    const args2 = message.content.split(" ").slice(1); 
    const sayMessage = args2.join(" "); 
   
    if (!sayMessage) return message.reply('Você esqueceu de colocar o aviso!')
    message.channel.send(` Ok ${message.author}! O aviso está sendo enviado...`)
    
    let razaod = args.slice(1).join(' ');
    var server = message.guild;
    let xd =  args
        ? args[0]
        : null;
message.guild.members.map(a => 
Pietra.users.get(a.id).send({

"embed": {

"title": `${message.guild.name}`,
    
"description": `${razaod}`,

"color": 0xff0080,
            
"image": { "url": xd  }}
        })
			 )
};
