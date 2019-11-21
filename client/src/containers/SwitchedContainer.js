import React, { useReducer, useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';
import SwitchedField from '../components/subComponents/SwitchedField';
import API from '../utils/API';
import { useChoicesValue } from '../context/ChoicesContext';

const SwitchedContainer = ({isDisabled}) => {

    const [timer, setTimer] = useState(0); // just to keep track of the setTimeout variable... 

    const initialState = {
        searchValue: "",
        locations: [],
        isSkeleton: false
    }

    const switchReducer = (state, action) => {
        switch (action.type) {
            case "UPDATE_LOCATIONS":
                return { ...state, locations: action.payload, isSkeleton: false };
            case "RESET_LOCATIONS":
                return { ...state, locations: [], isSkeleton: true };
            case "UPDATE_SEARCHVALUE":
                return { ...state, searchValue: action.payload };
            case "RESET_STATE":
                return { initialState };
            default:
                return state;
        }
    }

    // state management!
    const [state, dispatch] = useReducer(switchReducer, initialState);

    const [{isLocationSearch}, globalDispatch] = useChoicesValue(); // global state modifier

    const history = useHistory();

    // helper functions!
    // when searchVal changes start a timer that will search nominatum API to list possible locations
    const counter = () => {
        let wickyTrees = setTimeout(async () => {
            if (!state.searchValue.length) {
                return;
            }
            try {
                let returnedLocations = await API.getCityName(state.searchValue);
                dispatch({ type: "UPDATE_LOCATIONS", payload: returnedLocations });
            } catch (error) {
                // catching any errors and just re-setting the locations while changing
                // global state to display the error message
                dispatch({type: "RESET_LOCATIONS"});
                globalDispatch({type: "SET_ERROR", payload: {type: "serverError", message: error.message}});
            }
        }, 3000);
        setTimer(wickyTrees); // setTimeout returns a number so this needs to be kept track of in the component's state
    }

    const stop = () => clearTimeout(timer);

    const handleChange = event => {
        let { value } = event.target;
        dispatch({ type: "RESET_LOCATIONS" });
        dispatch({ type: "UPDATE_SEARCHVALUE", payload: value });
    }

    const handleSubmit = latLng => {
        globalDispatch({ type: "SET_LATLNG", payload: latLng });
        history.push("/map");
    }

    const setIsLocationSearch = () => globalDispatch({ type: "SET_ISLOCATIONSEARCH", payload: !isLocationSearch });


    // useEffect hooks!
    // only start / stop the timer when the searchValue is updated (not when the event fires)
    useEffect(() => {
        stop();
        counter();
    }, [state.searchValue]);

    // component unmounts and resets state
    useEffect(() => {
        return () => dispatch({ type: "RESET_STATE" });
    }, [])

    return (
        <SwitchedField
            isSkeleton={state.isSkeleton}
            handleChange={handleChange}
            searchVal={state.searchValue}
            locations={state.locations}
            checked={isLocationSearch}
            setChecked={setIsLocationSearch}
            handleSubmit={handleSubmit}
            outline={state.outline}
            isDisabled={isDisabled}
        />
    );
}

export default SwitchedContainer;