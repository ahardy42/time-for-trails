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
        },
        isLoading: true
    }

    const localReducer = (state, action) => {
        switch (action.type) {
            case "SET_TRAILS":
                return {trailsInfo: action.payload, isLoading: false}
            case "RESET_TRAILS":
                return {initialLocalState}
            case "START_SPINNER":
                return {...state, isLoading: true}
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

    const handleClose = () => {
        dispatch({type: "RESET_ERROR"});
    }

    const goToFairbanks = event => {
        dispatch({type: "SET_ISLOCATIONSEARCH", payload: true});
        dispatch({type: "SET_LATLNG", payload: {lat: 64.837845, lng: -147.716675}});
        handleClose();
    }

    const getSomeTrails = async () => {
        
        let {mode, travelType, timeLimit, latLng} = state;
        let realTime = API.getTimeLimit(timeLimit);

        if (state.isLocationSearch) {

            let position = latLng;

            try {

                // hit api with location information to generate a list of trails
                let trails = await API.getTrails(mode, position, travelType, realTime);

                // create a bounds object from the trails.polygon state array of points
                let bounds = L.polygon(trails.polygon).getBounds();
                trails.bounds = bounds;

                localDispatch({type: "SET_TRAILS", payload: trails});

            } catch (error) {
                dispatch({type: "SET_ERROR", payload: {type: "serverError", message: error.message}});
            }
        } else {
            if (!navigator.geolocation) {
                dispatch({type: "SET_ERROR", payload: {type: "locationError", message: "Location Not Supported"}});
            }
            try {
                // if there is no searchVal value then you find the user's current position
                let location = await API.getLocation();
                let { coords } = location;

                let position = API.getPosition(coords);

                // hit api with location information to generate a list of trails
                let trails
                try {
                    trails = await API.getTrails(mode, position, travelType, realTime);
                } catch (error) {
                    return dispatch({type: "SET_ERROR", payload: {type: "serverError", message: error.message}});
                }

                // create a bounds object from the trails.polygon state array of points
                let bounds = L.polygon(trails.polygon).getBounds();
                trails.bounds = bounds;

                localDispatch({type: "SET_TRAILS", payload: trails});
            } catch (error) {
                dispatch({type: "SET_ERROR", payload: {type: "locationError", message: error.message}});
            }
            
        }

        
    }

    // effect hooks
    useEffect( () => {

        // change to choices will trigger a spinner
        localDispatch({type: "START_SPINNER"});
        
        // then hit API for new trails info
        getSomeTrails();

    }, [state.mode, state.travelType, state.timeLimit, state.latLng]);

    // cleanup hook
    useEffect(() => {
        return () => localDispatch({type: "RESET_TRAILS"});
    }, []);

    return (
        <MapComponent 
            handleClick={handleClick} 
            goToFairbanks={goToFairbanks}
            handleClose={handleClose}
            message={state.error.message}
            locationError={state.error.type === "locationError" ? true : false}
            trailsInfo={localState.trailsInfo} 
            isLoading={localState.isLoading} 
            choices={state} 
        />
    );
}

export default MapWrapper;