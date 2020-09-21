# PetitionCounter for Discord
PetitionCounter lets you keep track of petitions on [petition.parliament.uk](https://petition.parliament.uk) from Discord.

**Jump to a section:**
* [Features & Commands.](#features--commands)
* [How to install, setup and run.](#how-to-install-setup-and-run)
* [Reporting issues and requesting features.](#reporting-issues-and-requesting-features)
* [Pull requests policy.](#pull-requests-policy)

## Features & Commands.
Here's what PetitionCounter can do!

### Live status
In the bot's 'playing' status, you'll be able to see a quick preview of the amount of signatures a petition has. This updates frequently.

<img width=300 src="https://res.cloudinary.com/dat3rkiml/image/upload/v1600652509/petitioncounter/Screenshot_2020-09-21_at_02.41.43.png"></img>


### Command: `-stats`
This command lets you see the petition information, including signatures, titles, URL, description and author at a glance.

<img width=500 src="https://res.cloudinary.com/dat3rkiml/image/upload/v1600655749/petitioncounter/Screenshot_2020-09-21_at_03.34.47.png"></img>


### Command: `-update`
This forces a 'Live status' update.

### Command: `-ping`
Check the speed of the bot's websocket connection.

## How to install, setup and run.
1) Clone the repo into an empty directory: `git clone https://github.com/maiacodes/petitioncounter`
2) Install dependencies: `npm install` or `yarn install`
3) Build the app by running `npx tsc`
4) Create a file called `.env` in the directory and enter the bot's environment variables:
```
TOKEN=
PETITION_ID=
PREFIX=
```
For `TOKEN=`, enter a Discord bot token, which you can get at [discord.com/developers](https://discord.com/developers).

For `PETITION_ID=`, enter the ID of the petition you'd like to track. The ID can be found in the URL of the petition, it's going to be a 6~ digit number.

For `PREFIX=`, you can enter the prefix for commands. This is an optional variable, if you don't enter anything it will default to `-`

5) Finally, run `node out/index.js` to start the bot.

## Reporting issues and requesting features.
You can report issues using [GitHub issues](https://github.com/maiacodes/petitioncounter/issues)
Just choose an issue template and follow it!

## Pull requests policy.
If you're proficient at TypeScript, feel free to make changes following my structure and open a pull request for it to be merged with master. I'm happy with most changes as long as they're consistant with the strucutre of the bot. Thanks!
