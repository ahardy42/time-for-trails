import React from 'react';
import Form from '../components/Form';
import API from '../utils/API';

// stateful wrapper for the form elements

class FormWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: "",
            travelType: "",
            timeLimit: 0,
            errorMessage: "",
            isDisabled: true
        }
    }
    handleChange = event => {
        // handler for travel type selector, and time limit input
        const { name, value } = event.target;
        this.setState(prevState => {
            let {mode, travelType, timeLimit} = prevState;
            const returnDisabled = (mode, travelType, timeLimit) => {
                if (mode !== "" && travelType !== "" && parseInt(timeLimit) !== "") {
                    return false;
                }
                return true;
            }
            return {
                [name]: value,
                isDisabled: returnDisabled(mode, travelType, timeLimit)
            }
        });
    }
    handleSubmit = async event => {
        // handler for clicking the submit button 
        event.preventDefault();
        this.props.setChoices(this.state);
        // go to the map page
        const {history} = this.props;
        history.push('/map');
    }
    render = () => {
        return (
            <Form
                mode={this.state.mode}
                travelType={this.state.travelType}
                timeLimit={this.state.timeLimit}
                errorMessage={this.state.errorMessage}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                isDisabled={this.state.isDisabled}
            />
        );
    }
}

export default FormWrapper;