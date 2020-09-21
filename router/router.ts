import {Message} from 'discord.js';
import { routes, Command } from "./routes";

export default async (message: Message) => {

    // Get prefix
    const prefix: string = process.env.PREFIX || "-";

    // Ignore if message doesn't start with the prefix
    if (!message.content.toLowerCase().startsWith(prefix)) return;

    // Get command
    const requestedCommand = message.content.toLowerCase().substring(prefix.length, message.content.length);

    // Parse routes
    let allRoutes: Command[] = routes;

    // Get command route
    const route = allRoutes.find(
        (route: Command) => route.inputs.some((routeInput: string) => requestedCommand.startsWith(routeInput))
    );

    if (!route) return;

    // Get input
    const input = route.inputs.find((routeInput: string) => requestedCommand.startsWith(routeInput));

    // Invalid format
    if ((requestedCommand !== input) && (!requestedCommand.startsWith(`${input} `))) return;

    // Run module
    route.module(message);
}
