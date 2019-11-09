import React, { useReducer } from 'react';
import ModalComponent from '../components/ModalComponent';
import {useChoicesValue} from '../context/ChoicesContext';

/**
 *  this is a wrapper for the modal component. 
 * It will render a form modal, based on variant value, used to change the choices
 * it needs its own state because the MapWrapper re-renders its component when global state changes!
 * */


const ModalWrapper = ({variant, setIsOpen, isOpen}) => {

    // global state
    const [state, dispatch] = useChoicesValue();
    // local state
    const initialState = {
        mode: state.mode,
        travelType: state.travelType,
        timeLimit: state.timeLimit
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case "SET_MODE":
                return {...state, mode: action.payload};
            case "SET_TYPE":
                return {...state, travelType: action.payload};
            case "SET_TIME":
                return {...state, timeLimit: action.payload};
            case "RESET":
                return action.payload;
            default:
                return state;
        }
    }

    // need to update local state before updating global to prevent a re-render or re-direct!
    const [localState, localDispatch] = useReducer(reducer, initialState);

    // handlers
    const handleChange = event => {

        let {name, value} = event.target;

        localDispatch({
            type: name,
            payload: value
        });

    }

    const handleSubmit = event => {

        event.preventDefault();

        dispatch({
            type: "SET_ALL_CHOICES",
            payload: {...state, ...localState}
        });

        setIsOpen(false);

    }

    const handleClose = () => {

        localDispatch({
            type: "RESET",
            payload: initialState
        });

        setIsOpen(false);

    }

    // helpers
    const valueInjector = (state, variant) => {
        switch (variant) {
            case "MODE":
                return state.mode;
            case "TYPE":
                return state.travelType;
            case "TIME":
                return state.timeLimit;
        }
    }

    return (
        <ModalComponent 
            variant={variant} 
            value={valueInjector(localState, variant)} 
            handleChange={handleChange} 
            handleSubmit={handleSubmit} 
            isOpen={isOpen}
            handleClose={handleClose}
        />
    );
}

export default ModalWrapper;