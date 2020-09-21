import Discord from 'discord.js';
import getPetitionCount from '../fetch/petitionCount';

export default async (msg: Discord.Message) => {
	// Get environment
	const petitionID = process.env.PETITION_ID || '';

	// Get data
	const data = await getPetitionCount(petitionID);

	// Update status
	await msg.client.user.setActivity(`${data.signature_count} signatures`);

	// React to original message to indicate success
	await msg.react('✅');
	return;
};
