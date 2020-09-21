// PetitionCounter for Discord: Version 0.1

// Imports
const Discord = require('discord.js');
const axios = require('axios');

// Setup environment
require('dotenv').config();

// Make Discord Client
const client = new Discord.Client();

// Store environments
const petitionID = process.env.PETITION_ID;
const prefix = process.env.PREFIX || '-'

// On: Gateway connected
client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);

	// Interval for every 60 seconds to get petition signatures and set as 'playing' status
	setInterval(async function() {
		const data = await getPetitionStats(petitionID);
		await client.user.setActivity(`${data.signature_count} signatures`);
	}, 60000);
});

// On: Message
client.on('message', async (msg) => {
	const cmd = msg.content;
	// Petition stats command
	if (
		cmd === `${prefix}stats` ||
		cmd === `${prefix}status` || 
		cmd.includes(`<@${client.user.id}>`) || // Run if the bot has been @ mentioned
		cmd.includes(`<@!${client.user.id}>`)
	) {
		// Get data
		const data = await getPetitionStats(petitionID);

		// Reply
		await msg.reply(`${data.signature_count} signatures`);
		return;
	}

	// WS ping command
	if (cmd === `${prefix}ping`) {
		// Reply with WS ping
		await msg.reply(`Pong! ${client.ws.ping}ms`);
		return;
	}

	// Update status command
	if (cmd === `${prefix}update`) {
		// Get data
		const data = await getPetitionStats(petitionID);

		// Update status
		await client.user.setActivity(`${data.signature_count} signatures`);

		// React to original message to indicate success
		await msg.react('✅');
		return;
	}
});

async function getPetitionStats(id) {
	// Fetch from petitions API
	const response = await axios.get(`https://petition.parliament.uk/petitions/${id}/count.json`).catch((error) => { throw new Error(error); });

	// Return formatted data
	return response.data;
}

// Start bot
client.login(process.env.TOKEN);