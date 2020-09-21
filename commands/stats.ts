import Discord from 'discord.js'
import getPetitionData from '../fetch/petitionData'
import preEmbed from '../helpers/embed'

export default async (msg: Discord.Message) => {
	// Get environment
	const petitionID = process.env.PETITION_ID || ''; 

	// Get data
	const petition = await getPetitionData(petitionID);

	const embed = preEmbed(true)
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
