const Discord = require('discord.js');

module.exports = () => {
	return new Discord.MessageEmbed()
		.setColor('#008800')
        .setAuthor(
			'PetitionCounter',
			'https://avatars1.githubusercontent.com/u/8007359?s=460&u=e63fd25403b16404275976da68a25beacc073ea7&v=4',
			'https://github.com/maiacodes/petitioncounter'
		)
		.setTimestamp()
		.setFooter('Data provided by petition.parliament.uk', 'https://res.cloudinary.com/dat3rkiml/image/upload/v1600654867/petitioncounter/logo.png');
}