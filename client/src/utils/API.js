export default {
    getLocation: () => {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });
    },
    getTrails: async (mode, position, travelMode, timeLimitation) => {
        const response = await fetch(`/api/trails/${mode}?lat=${position.lat}&lng=${position.lng}&mode=${travelMode}&time=${timeLimitation}`);
        const json = await response.json();
        return json;
    },
    getPosition: locationObject => {
        return {
            lat: locationObject.latitude,
            lng: locationObject.longitude
        }
    },
    getTimeLimit: time => {
        return time * 60;
    }
}