import Discord from 'discord.js';
import getPetitionCount from '../fetch/petitionCount'

export default async (client: Discord.Client) => {
    // Fetch data
    const petitionID = process.env.PETITION_ID || ''; 
    const prefix: string = process.env.PREFIX || "-";
    const data = await getPetitionCount(petitionID);

    // Update status
    await client.user.setActivity(`${data.signature_count} signatures | say ${prefix}info`);
};
