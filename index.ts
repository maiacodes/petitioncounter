// PetitionCounter for Discord: Version 0.1

// Imports
import Discord from 'discord.js'
import getPetitionCount from './fetch/petitionCount'
import router from './router/router'

// Setup environment
import dotenv from 'dotenv'
dotenv.config()

// Make Discord Client
const client = new Discord.Client();

// Store environments
const petitionID = process.env.PETITION_ID || ''; 

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
	// Call command router
	await router(msg)
	return
});

// Start bot
client.login(process.env.TOKEN);