import axios from 'axios'

export default async (id: string) => {
	// Fetch from petitions API
	const response = await axios.get(`https://petition.parliament.uk/petitions/${id}/count.json`).catch((error) => { throw new Error(error); });

	// Return formatted data
	return response.data;
}