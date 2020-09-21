import Discord from 'discord.js'
import preEmbed from '../helpers/embed'

export default async (msg: Discord.Message) => {
    const prefix = process.env.PREFIX || '-'; 

    // Construct embed
	const embed = preEmbed(false)
		.setTitle("About PetitionCounter")
		.setURL("https://github.com/maiacodes/petitioncounter")
		.setDescription("PetitionCounter is an open-source project which allows people to setup a Discord Bot to interact with the Government's petition site. For more info about the bot, including commands, features and setup, visit [the GitHub](https://github.com/maiacodes/petitioncounter).")
	// Reply
	await msg.reply(embed);
	return;
};
