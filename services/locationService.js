const axios = require('axios');

module.exports = {
    searchLocations: async queryString => {
        let passedOnString = queryString.replace(" ", "+");
        try {
            let response = await axios.get(`https://nominatim.openstreetmap.org/search?q=${passedOnString}&limit=50&format=json&addressdetails=1`);
            let { data } = response;
            // filter by class to only include cities or towns (?) and sort by importance, then return the first 5
            let filteredData = data
                .filter(location => location.class === "boundary" || location.class === "place")
                .sort((a, b) => b.importance - a.importance)
                .filter((location, index) => index < 4);
            return filteredData;
        } catch (error) {
            throw error; // throwing to the controller
        }
    }
}




