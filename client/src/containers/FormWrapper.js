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
        }
    }
    handleChange = event => {
        // handler for travel type selector, and time limit input
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }
    handleCheck = event => {
        // handler for clicking the mode radio button
        const { value } = event.target;
        this.setState({
            mode: value
        });
    }
    handleSubmit = async event => {
        // handler for clicking the submit button 
        event.preventDefault();
        this.props.setChoices(this.state);
        // go to the map page
        const {history} = this.props;
        console.log(history);
        history.push('/map');
    }
    render = () => {
        return (
            <Form
                mode={this.state.mode}
                travelType={this.state.travelType}
                timeLimit={this.state.timeLimit}
                errorMessage={this.state.errorMessage}
                handleCheck={this.handleCheck}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
            />
        );
    }
}

export default FormWrapper;