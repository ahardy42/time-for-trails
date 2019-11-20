export default {
    getLocation: () => {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });
    },
    getTrails: async (mode, position, travelMode, timeLimitation) => {
        try {
            const response = await fetch(`/api/trails/${mode}?lat=${position.lat}&lng=${position.lng}&mode=${travelMode}&time=${timeLimitation}`);
            if (!response.ok) throw new Error(response.statusText);
            const json = await response.json();
            return json;
        } catch (error) {
            // rethrow error to the getTrails catch block
            throw error;
        }
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
        try {
            let params = value.split(" ").join("+");
            const response = await fetch(`/api/location?q=${params}`);
            if (!response.ok) throw new Error(response.statusText);
            const json = await response.json();
            return json;
        } catch (error) {
            // rethrow the error to the component catch block
            throw error;
        }
    },
    getCityInfo: async id => {
        const response = await fetch(`/api/location?id=${id}`);
        const json = await response.json();
        return json;
    }
}