const Discord = require("discord.js");
module.exports = {
        config: {
            name: "banner",
            aliases: ['banner'],
            description: "pegar o banner",
            example: "banner <@user/ID>",
            usage: 'banner @user'
        },
        run: async (bot, message, args) => {
            message.delete()
            const user = message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.author
            let B = await bot.api.users(`${user.id}`).get(" ")

            let msg = new Discord.MessageEmbed() 
            .setColor('#ff58c3') 
            .setTitle(`Banner solicitado`)
            .setImage(`https://cdn.discordapp.com/banners/${user.id}/${B.banner}.png?size=512`) 
            .setFooter(`Comando requisitado por: ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));

            let gif = new Discord.MessageEmbed() 
            .setColor("#ff58c3")
            .setTitle(`Banner solicitado`) 
            .setImage(`https://cdn.discordapp.com/banners/${user.id}/${B.banner}.gif?size=512`) 
            .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));

            if (B.banner.startsWith("a_")){
                message.channel.send(gif)
            } else{
                message.channel.send(msg)
            }
        }}
