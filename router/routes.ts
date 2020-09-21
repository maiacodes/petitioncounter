import { Message } from 'discord.js';

// Import commands
import status from '../commands/stats';
import ping from '../commands/ping';
import update from '../commands/update';
import info from '../commands/info';

// Define routes
export const routes: Command[] = [
	{
		name: 'Stats',
		inputs: [ 'stats' ],
		module: status
    },
    {
		name: 'Ping',
		inputs: [ 'ping' ],
		module: ping
    },
    {
		name: 'Update Status',
		inputs: [ 'update' ],
		module: update
	},
	{
		name: 'About the bot',
		inputs: [ 'info', 'help' ],
		module: info
	}
];

type CommandModule = (msg: Message) => Promise<void>;

export interface Command {
	name: string;
	inputs: string[];
	module: CommandModule;
}
