// PetitionCounter for Discord: Version 0.1

// Imports
import Discord from 'discord.js'
import getPetitionCount from './fetch/petitionCount'

// Setup environment
import dotenv from 'dotenv'
dotenv.config()

// Commands
import statsCommand from './commands/stats'

// Make Discord Client
const client = new Discord.Client();

// Store environments
const petitionID = process.env.PETITION_ID || ''; 
const prefix = process.env.PREFIX || '-';

// On: Gateway connected
client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);

	// Interval for every 60 seconds to get petition signatures and set as 'playing' status
	setInterval(async function() {
		const data = await getPetitionCount(petitionID);
		await client.user.setActivity(`${data.signature_count} signatures`);
	}, 60000);
});

// On: Message
client.on('message', async (msg) => {
	const cmd = msg.content;
	// Petition stats command
	if (cmd === `${prefix}stats`) {
		statsCommand(msg, petitionID)
		return
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
		const data = await getPetitionCount(petitionID);

		// Update status
		await client.user.setActivity(`${data.signature_count} signatures`);

		// React to original message to indicate success
		await msg.react('✅');
		return;
	}
});

// Start bot
client.login(process.env.TOKEN);