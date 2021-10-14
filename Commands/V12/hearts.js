const { MessageButton } = require("discord-buttons");
const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  message.delete();

  let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
  
  let avatar = user.avatarURL({dynamic: true ,  size: 2048});

  let embed = new Discord.MessageEmbed() 
    .setColor(`RANDOM`)
    .setTitle(`🖼️ ${user.username}`)
    .setDescription(`💠 Clique em **DOWNLOAD** para baixar a imagem!`)
    .setImage(`https://api.devs-hub.xyz/hearts?image=${user.displayAvatarURL()}`) 
    .setFooter(`• Autor: ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}));

  let btn1 = new MessageButton()
  .setStyle("url")  
  .setLabel("Download")
  .setURL(`https://api.devs-hub.xyz/hearts?image=${user.displayAvatarURL()}`)

  // message.channel.send({component: btn1, embed})
 await message.channel.send({component: btn1, embed}); 

};
