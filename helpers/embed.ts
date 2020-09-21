import Discord from 'discord.js';

export default (databox: boolean) => {
	let embed = new Discord.MessageEmbed()
		.setColor('#008800')
		.setAuthor(
			'PetitionCounter by maiacodes',
			'https://res.cloudinary.com/dat3rkiml/image/upload/v1600715585/petitioncounter/_maia.png',
			'https://github.com/maiacodes/petitioncounter'
		);

	// If the embed is a 'DataBox' add timestamp and attribution
	if (databox) {
		embed
			.setTimestamp()
			.setFooter(
				'Data from petition.parliament.uk',
				'https://res.cloudinary.com/dat3rkiml/image/upload/v1600654867/petitioncounter/logo.png'
			);
	}
	return embed
};
