const Discord = require('discord.js');
const getPetitionData = require('../fetch/petitionData');
const preEmbed = require('../helpers/embed');

module.exports = async (msg, petitionID) => {
	// Get data
	const petition = await getPetitionData(petitionID);

	const embed = preEmbed()
		.setTitle(petition.data.attributes.action)
		.setURL(`https://petition.parliament.uk/petitions/${petitionID}`)
		.setDescription(petition.data.attributes.background)
		.addFields(
			{ name: 'Signatures', value: petition.data.attributes.signature_count, inline: true },
			{ name: 'Creator', value: petition.data.attributes.creator_name, inline: true }
		);

	// Reply
	await msg.reply(embed);
	return;
};
