import React, { useReducer, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import L from 'leaflet';
import {useChoicesValue} from '../context/ChoicesContext';
import MapComponent from '../components/MapComponent';
import API from '../utils/API';

const MapWrapper = () => {

    // initial state and reducer
    const initialLocalState = {
        trailsInfo: {
            trails: [],
            polygon: []
        }
    }

    const localReducer = (state, action) => {
        switch (action.type) {
            case "SET_TRAILS":
                return {trailsInfo: action.payload}
            case "RESET_TRAILS":
                return {initialLocalState}
            default:
                return state;
        }
    }

    // hooks!
    const [localState, localDispatch] = useReducer(localReducer, initialLocalState);

    const [state, dispatch] = useChoicesValue();

    const history = useHistory();

    // helper funcs
    const handleClick = event => {
        dispatch({type: "RESET_CHOICES"});
        history.push("/");
    }

    const getSomeTrails = async () => {
        let {mode, travelType, timeLimit, latLng} = state;
        let realTime = API.getTimeLimit(timeLimit);
        let position;
        if ("lat" in latLng) {
            position = latLng;
        } else {
            // if there is no searchVal value then you find the user's current position
            let location = await API.getLocation();
            let { coords } = location;
            position = API.getPosition(coords);
        }

        // hit api with location information to generate a list of trails
        let trails = await API.getTrails(mode, position, travelType, realTime);

        // create a bounds object from the trails.polygon state array of points
        let bounds = L.polygon(trails.polygon).getBounds();
        trails.bounds = bounds;

        return trails;
    }

    // effect hooks
    useEffect( () => {
        
        getSomeTrails().then(trails => localDispatch({type: "SET_TRAILS", payload: trails}));

    }, [state]);

    // cleanup hook
    useEffect(() => {
        return () => localDispatch({type: "RESET_TRAILS"});
    }, []);

    return (
        <MapComponent handleClick={handleClick} trailsInfo={localState.trailsInfo} />
    );
}

export default MapWrapper;