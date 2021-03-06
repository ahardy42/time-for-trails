const axios = require('axios');
const utils = require('../utils');

// keys
require('dotenv').config();
const mtnProjectKey = process.env.MOUNTAIN_PROJECT_KEY;
const openRouteServiceKey = process.env.OPENROUTE_SERVICE_KEY;


module.exports = async (lat, lng, body, profile) => {

    // collecting responses from outside apis
    const mountainProjectRes = await axios.get(`https://www.mountainproject.com/data/get-routes-for-lat-lon?lat=${lat}&lon=${lng}&maxDistance=80&maxResults=500&key=${mtnProjectKey}`);
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
    })

    // using the utils to create a new array from the isochrone bounding polygon
    const updatedMountainRes = mountainProjectRes.data.routes.filter(el => {
        return utils.updateResponseArray(el, isoChronePolygonArray);
    });

    return {
        trails: updatedMountainRes,
        polygon: reversedArray
    };
}