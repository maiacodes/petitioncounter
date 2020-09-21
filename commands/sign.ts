import Discord from 'discord.js'
import getPetitionData from '../fetch/petitionData'
import preEmbed from '../helpers/embed'

export default async (msg: Discord.Message) => {
	// Get environment
	const petitionID = process.env.PETITION_ID || ''; 

	// Get data
	const petition = await getPetitionData(petitionID);

	const embed = preEmbed(true)
		.setTitle('Sign: ' + petition.data.attributes.action)
		.setURL(`https://petition.parliament.uk/petitions/${petitionID}/signatures/new`)
        .setDescription(`[Click here to sign this petition](https://petition.parliament.uk/petitions/${petitionID}/signatures/new)`)
        .addField('Signatures so far:', petition.data.attributes.creator_name)

	// Reply
	await msg.reply(embed);
	return;
};
