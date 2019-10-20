const classifyPoint = require('robust-point-in-polygon');

// object containing methods for returning lat/lngs within the bounding box
module.exports = {
    updateResponseArray: (arrayElement, isoChroneResponseArray) => {
        // this is used in a filter function so each element is the 'point' and the isochrone array is an array of lat/lng points
        latLng = [arrayElement.latitude, arrayElement.longitude]
        const classify = classifyPoint(isoChroneResponseArray, latLng); // returns -1, 0 or 1
        return classify < 1;  
    },
    returnProfile: mode => {
        switch(mode) {
            case 'drive':
                return 'driving-car';
            case 'bike':
                return 'cycling-regular';
            default:
                return 'driving-car';
        }
    }
}