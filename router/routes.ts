import { Message } from 'discord.js';

// Import commands
import status from '../commands/stats';
import ping from '../commands/ping';
import update from '../commands/update';
import info from '../commands/info';
import sign from '../commands/sign';
import commands from '../commands/commands';

// Define routes
export const routes: Command[] = [
	{
		name: 'Stats',
		inputs: [ 'stats' ],
		module: status,
		private: false,
		info: 'See the petition info.'
	},
	{
		name: 'Sign',
		inputs: [ 'sign' ],
		module: sign,
		private: false,
		info: 'Sign the petition.'
	},
    {
		name: 'Ping',
		inputs: [ 'ping' ],
		module: ping,
		private: false,
		info: 'Check the websocket ping of the bot.'
    },
    {
		name: 'Update Status',
		inputs: [ 'update' ],
		module: update,
		private: false,
		info: 'This forces an update of the bot status.'
	},
	{
		name: 'Info',
		inputs: [ 'info' ],
		module: info,
		private: false,
		info: 'About the bot.'
	},
	{
		name: 'Commands',
		inputs: [ 'help', 'commands', 'cmds' ],
		module: commands,
		private: false,
		info: 'See the bot commands.'
	},
];

type CommandModule = (msg: Message) => Promise<void>;

export interface Command {
	name: string;
	inputs: string[];
	module: CommandModule;
	private: boolean;
	info: string;
}
