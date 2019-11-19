const axios = require('axios');
const utils = require('../utils');

// keys
require('dotenv').config();
const mtbProjectKey = process.env.MTB_PROJECT_KEY;
const openRouteServiceKey = process.env.OPENROUTE_SERVICE_KEY;


module.exports = async (lat, lng, body, profile) => {

    // collecting responses from outside apis
    const trailRunProjectRes = await axios.get(`https://www.trailrunproject.com/data/get-trails?lat=${lat}&lon=${lng}&maxDistance=80&maxResults=500&sort=distance&key=${mtbProjectKey}`);
    const isoChroneRes = await axios.post('https://api.openrouteservice.org/v2/isochrones/' + profile,
        body,
        {
            headers: {
                'Authorization': openRouteServiceKey,
                'Accept': 'application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8'
            }
        });

    const isoChronePolygonArray = isoChroneRes.data.features[0].geometry.coordinates[0]; // whew! returns the polygon lat/lng array 
    const isoChronePolygonArrayCopy = isoChroneRes.data.features[0].geometry.coordinates[0];

    // reverse the array of lat/lngs
    const reversedArray = isoChronePolygonArrayCopy.map(element => {
        return element.reverse();
    });

    // using the utils to create a new array from the isochrone bounding polygon
    const updatedTrailRunProjectRes = trailRunProjectRes.data.trails.filter(el => {
        return utils.updateResponseArray(el, isoChronePolygonArray);
    });

    return {
        trails: updatedTrailRunProjectRes,
        polygon: reversedArray
    };
}