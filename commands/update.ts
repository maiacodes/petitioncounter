import Discord from 'discord.js';
import setStatus from '../helpers/setStatus'

export default async (msg: Discord.Message) => {
	// Set status
	setStatus(msg.client)

	// React to original message to indicate success
	await msg.react('✅');
	return;
};
