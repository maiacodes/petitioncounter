const axios = require('axios');

module.exports = async (id) => {
	// Fetch from petitions API
	const response = await axios.get(`https://petition.parliament.uk/petitions/${id}.json`).catch((error) => { throw new Error(error); });

	// Return formatted data
	return response.data;
}