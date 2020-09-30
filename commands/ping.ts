import Discord from 'discord.js';
import preEmbed from '../helpers/embed'

export default async (msg: Discord.Message) => {
	// Send initial message
	const start = Date.now();
	const initialMessage = await msg.channel.send("🏓 Pinging...")
	const latency = Date.now() - start;

	// Create embed
	const embed = preEmbed(false)
	.setTitle('🏓 Pong!')
	.addField('Gateway Ping:', `${msg.client.ws.ping}ms`)
	.addField('API Latency:', `${latency}ms`)
	
	// Reply with WS ping
	await initialMessage.edit('', embed);
	return;
};
