# PetitionCounter for Discord
PetitionCounter lets you keep track of petitions on [petition.parliament.uk](https://petition.parliament.uk) from Discord.

## Features & Commands
Here's what PetitionCounter can do!

### Live status
In the bot's 'playing' status, you'll be able to see a quick preview of the amount of signatures a petition has. This updates frequently.
![Screenshot](https://cdn.discordapp.com/attachments/731594422692610137/757415090365661244/Screenshot_2020-09-21_at_02.37.07.png)


### `-stats` and `-status`
This command lets you see the amount of signatures a petition has at a glance.
![Screenshot](https://cdn.discordapp.com/attachments/731594422692610137/757415439134490704/Screenshot_2020-09-21_at_02.38.29.png)


### `-update`
This forces a 'Live status' update.

### `-ping`
Check the speed of the bot's websocket connection.

## How to install, setup and run.
1) Clone the repo into an empty directory: `git clone https://github.com/maiacodes/petitioncounter`
2) Install dependencies: `npm install` or `yarn install`
3) Create a file called `.env` in the directory and enter the bot's environment variables:
```
TOKEN=
PETITION_ID=
PREFIX=
```
For `TOKEN=`, enter a Discord bot token, which you can get at [discord.com/developers](https://discord.com/developers).
For `PETITION_ID=`, enter the ID of the petition you'd like to track. The ID can be found in the URL of the petition, it's going to be a 6~ digit number.
For `PREFIX=`, you can enter the prefix for commands. This is an optional variable, if you don't enter anything it will default to `-`
4) Finally, run `node index.js` to start the bot.