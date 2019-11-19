// renders a sub-component based on "variant"
// to be used in the form, and the modal

import React from 'react';
import {
    FormControl,
    FormControlLabel,
    FormLabel,
    RadioGroup,
    InputLabel,
    Select,
    MenuItem,
    TextField
} from '@material-ui/core';

import StyledRadio from './subComponents/StyledRadio';

const FormSubComponent = ({ classes, value, variant, handleChange }) => {

    switch (variant) {
        case "MODE":
            return (
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">What Type of Trail are you Looking For?</FormLabel>
                    <RadioGroup className={classes.radioGroup} aria-label="activities" name="SET_MODE" value={value} onChange={handleChange} row>
                        <FormControlLabel value="bike" control={<StyledRadio />} label="Mountain Bike" />
                        <FormControlLabel value="run" control={<StyledRadio />} label="Trail Run" />
                        <FormControlLabel value="hike" control={<StyledRadio />} label="Hike" />
                        <FormControlLabel value="ski" control={<StyledRadio />} label="Ski" />
                        {/* <FormControlLabel value="climb" control={<StyledRadio />} label="Climb" /> */}
                    </RadioGroup>
                </FormControl>
            );
        case "TYPE":
            return (
                <FormControl component="fieldset" className={classes.formControl}>
                    <InputLabel htmlFor="travel-select">How Are You Getting There?</InputLabel>
                    <Select
                        value={value}
                        onChange={handleChange}
                        inputProps={{
                            id: 'travel-select',
                            name: 'SET_TYPE'
                        }}
                    >
                        <MenuItem value="">Select</MenuItem>
                        <MenuItem value="drive">Drive</MenuItem>
                        <MenuItem value="bike">Bike</MenuItem>
                        <MenuItem value="walk">Walk</MenuItem>
                    </Select>
                </FormControl>
            );
        case "TIME":
            return (
                <TextField
                    id="number"
                    label="How much travel time do you have?"
                    name="SET_TIME"
                    value={value > 0 ? value : ""}
                    placeholder="enter between 0 and 60 minutes"
                    onChange={handleChange}
                    type="number"
                    className={classes.TextField}
                    InputLabelProps={{
                        shrink: true
                    }}
                    inputProps={{
                        pattern: "[0-9]*"
                    }}
                    margin="normal"
                />
            );
        default:
            return null;
    }
}

export default FormSubComponent;