const axios = require('axios');

module.exports = {
    searchLocations: async queryString => {
        let passedOnString = queryString.replace(" ", "+");
        try {
            let response = await axios.get(`https://nominatim.openstreetmap.org/search?q=${passedOnString}&format=json`);
            let { data } = response;
            return data;
        } catch (error) {
            return error;
        }
    },
    getLocationById: async id => {
        try {
            let response = await axios.get(`https://nominatim.openstreetmap.org/details?osmtype=W&osmid=${id}&format=json`);
            let {data} = response;
            return {
                lat: data.geometry.coordinates[1],
                lng: data.geometry.coordinates[0]
            };
        } catch (error) {
            return error
        }
    }
}




