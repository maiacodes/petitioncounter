// PetitionCounter for Discord: Version 0.1

// Imports
import Discord from 'discord.js'
import router from './router/router'
import setStatus from './helpers/setStatus'

// Setup environment
import dotenv from 'dotenv'
dotenv.config()

// Make Discord Client
const client = new Discord.Client();

// On: Gateway connected
client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
	setStatus(client)

	// Interval for every 60 seconds to get petition signatures and set as 'playing' status
	setInterval(async function() {
		setStatus(client)
	}, 60000);
});

// On: Message
client.on('message', async (msg) => {
	// Call command router
	await router(msg)
});

// Start bot
client.login(process.env.TOKEN);