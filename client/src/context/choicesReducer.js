/**
 * there are a few things to do with choices... 
 * 1. set the whole state object from the form WITH latlng location object
 * 2. set without latLng and let the navigator.geolocation set location
 * 3. set each individual choice (for updating on map screen)
 * 4. reset the object 
 * 5. return state unaltered
 *  */ 

export const choicesReducer = (state, action) => {
    switch (action.type) {
        case "SET_ALL_CHOICES":
            return {...action.payload}
        case "SET_WITH_LOCATION":
            return {...action.payload}
        case "SET_LATLNG":
            return {...state, latLng: action.payload}
        case "SET_MODE":
            return {...state, mode: action.payload}
        case "SET_TIME":
            return {...state, timeLimit: action.payload}
        case "SET_TYPE":
            return {...state, travelType: action.payload}
        case "SET_ISLOCATIONSEARCH":
            return {...state, isLocationSearch: action.payload}
        case "SET_ERROR":
            return {...state, error: action.payload}
        case "RESET_ERROR":
            return {...state, error: {type: null, message: null}}
        case "RESET_CHOICES":
            return {
                latLng: {},
                mode: "",
                timeLimit: 0,
                travelType: "",
                isLocationSearch: false,
                error: { type: null, message: null }
            }
        default:
            return state;
    }
}