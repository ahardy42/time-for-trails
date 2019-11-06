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
    },
    getCityName: async value => {
        let params = value.split(" ").join("+");
        const response = await fetch(`/api/location?q=${params}`);
        const json = await response.json();
        return json;
    },
    getCityInfo: async id => {
        const response = await fetch(`/api/location?id=${id}`);
        const json = await response.json();
        return json;
    }
}