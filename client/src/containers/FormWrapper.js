import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import Form from '../components/Form';
import { useChoicesValue } from '../context/ChoicesContext';

// stateful wrapper for the form elements

const FormWrapper = () => {

    // dealing with local and global state for this container
    const [isDisabled, setIsDisabled] = useState(true);

    const [state, dispatch] = useChoicesValue();

    const history = useHistory();

    // event handlers
    const handleChange = event => {
        // handler for travel type selector, and time limit input
        const { name, value } = event.target;

        let updatedVal = null;
        if (name === "SET_TIME") {
            // preventing submissions greater than 60 min
            if (value > 60) updatedVal = 60;
        } 
        dispatch({
            type: name,
            payload: updatedVal || value
        });
    }

    const handleSubmit = event => {
        history.push("/map");
    }

    // effect hook to check if the button should be disabled
    useEffect(() => {
        let {mode, travelType, timeLimit} = state;
        if (mode === "" || travelType === "" || timeLimit === 0) {
            setIsDisabled(true)
        } else {
            setIsDisabled(false)
        }
    }, [state.mode, state.travelType, state.timeLimit]);

    // returned component
    return (
        <Form
            mode={state.mode}
            travelType={state.travelType}
            timeLimit={state.timeLimit}
            errorMessage={state.errorMessage}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            isDisabled={isDisabled}
        />
    );

}

export default FormWrapper;