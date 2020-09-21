
import Discord from "discord.js";
import { routes } from "../router/routes";
import preEmbed from '../helpers/embed'

export default async (message: Discord.Message) => {
    // Split for arguments
    const args = message.content.split(" ");

    // Get the prefix
    const prefix = process.env.PREFIX || '-'; 

    // Embed
    const embed = preEmbed(false).setTitle("Commands List")

    // Switch for amount of arguments
    switch (args.length) {
        case 1:
            // When there are no arguments, show the help embed. For each route, make a field.
            routes.forEach(function (route) {
                // Ignore private commands
                if (route.private) return;

                // Add field
                embed.addField(prefix + route.inputs[0], `**${route.name}:** ${route.info}`);
            });

            embed.addField("Learn more about a command", "Run `" + prefix + "help <command>`");

            await message.reply(embed);
            return;
        case 2:
            // When there are arguments, search for the command
            const route = routes.find((route) => route.name.toLowerCase() === args[1].toLowerCase());

            // If no command (or command private), show error
            if (!route || route.private) {
                embed.setDescription("Cannot find information about `" + args[1] + "`!");
                await message.reply(embed);
                return;
            }

            // If command present, display information
            embed.setDescription("Information about `" + route.name + "`")
            .addField("Description", route.info)
            .addField("Usage", route.inputs.join(", "));
            await message.reply(embed);
            return;
    }
}