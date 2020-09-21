import { Message } from 'discord.js';

// Import commands
import status from '../commands/stats';
import ping from '../commands/ping';
import update from '../commands/update';

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
	}
];

type CommandModule = (msg: Message) => Promise<void>;

export interface Command {
	name: string;
	inputs: string[];
	module: CommandModule;
}
