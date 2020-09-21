const Discord = require('discord.js');
const client = new Discord.Client();
const axios = require('axios');
require('dotenv').config();

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
	setInterval(async function() {
		const response = await axios.get('https://petition.parliament.uk/petitions/327108/count.json');
		await client.user.setActivity(`${response.data.signature_count} signatures`);
	}, 60000);
});

client.on('message', async (msg) => {
	if (msg.content === '-status') {
		const response = await axios.get('https://petition.parliament.uk/petitions/327108/count.json')
		await msg.reply(`${response.data.signature_count} signatures`);
	} else if (msg.content === '-ping') {
		await msg.reply(`Pong! ${client.ws.ping}ms`);
	} else if (msg.content === '-update') {
		const response = await axios.get('https://petition.parliament.uk/petitions/327108/count.json')
		await client.user.setActivity(`${response.data.signature_count} signatures`);
		await msg.react('✅');
	} else if (msg.content.includes('<@731586156097175582>') || msg.content.includes('<@!731586156097175582>')) {
		const response = await axios.get('https://petition.parliament.uk/petitions/327108/count.json')
		await msg.reply(`${response.data.signature_count} signatures`);
	}
});

client.login(process.env.TOKEN);
