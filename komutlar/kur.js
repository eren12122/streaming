const Discord = require('discord.js');


exports.run = (client, message, params) => {
    if(message.author.id === "474537652943847444") {
        
        message.channel.send(':1234: **RelaxBot İçin Gerekli Şeyler Kuruluyor...**');
        
        message.guild.createChannel('mod-log');
        
        message.channel.send(':white_check_mark: **Herşey Kuruldu!**');
        
    } else {
        message.channel.send(':x: **Üzgünüm Ama Bu Komutu Şimdilik Kullanamazsınız!**');
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'kur',
  description: 'Bot için gerekli ayarları kurar.',
  usage: 'kur'
};