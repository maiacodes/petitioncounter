import Discord from 'discord.js';

export default async (msg: Discord.Message) => {
	// Reply with WS ping
	await msg.reply(`Pong! ${msg.client.ws.ping}ms`);
	return;
};
