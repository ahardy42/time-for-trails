import React, { useReducer, useEffect, useState } from 'react';
import SwitchedField from '../components/SwitchedField';
import API from '../utils/API';
import { useChoicesValue } from '../context/ChoicesContext';

const SwitchedContainer = () => {

    const [timer, setTimer] = useState(0); // just to keep track of the setTimeout variable... 

    const initialState = {
        isChecked: false,
        searchValue: "",
        locations: [],
        isSkeleton: false,
        outline: null // index value
    }

    const switchReducer = (state, action) => {
        switch (action.type) {
            case "SWITCH_CHECKED":
                return { ...state, isChecked: !state.isChecked };
            case "UPDATE_LOCATIONS":
                return { ...state, locations: action.payload, isSkeleton: false };
            case "RESET_LOCATIONS":
                return { ...state, locations: [], isSkeleton: true, outline: null };
            case "UPDATE_SEARCHVALUE":
                return { ...state, searchValue: action.payload };
            case "UPDATE_OUTLINE":
                return { ...state, outline: action.payload };
            case "RESET_STATE":
                return { initialState };
            default:
                return state;
        }
    }

    // state management!
    const [state, dispatch] = useReducer(switchReducer, initialState);

    const [, globalDispatch] = useChoicesValue(); // global state modifier

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
                console.log(error);
            }
        }, 3000);
        setTimer(wickyTrees);
    }

    const stop = () => clearTimeout(timer);

    const handleChange = event => {
        let { value } = event.target;
        dispatch({ type: "RESET_LOCATIONS" });
        dispatch({ type: "UPDATE_SEARCHVALUE", payload: value });
    }

    const setChecked = event => {
        if (state.isChecked) {
            dispatch({ type: "RESET_LOCATIONS" });
        }
        dispatch({ type: "SWITCH_CHECKED" });
    }

    const setLatLng = (index, latLng) => {
        dispatch({ type: "UPDATE_OUTLINE", payload: index });
        globalDispatch({ type: "SET_LATLNG", payload: latLng });
    }

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
            checked={state.isChecked}
            setChecked={setChecked}
            setLatLng={setLatLng}
            outline={state.outline}
        />
    );
}

export default SwitchedContainer;