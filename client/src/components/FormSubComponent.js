// renders a sub-component based on "variant"
// to be used in the form, and the modal

import React from 'react';
import {
    FormControl,
    FormControlLabel,
    FormLabel,
    RadioGroup,
    Radio,
    InputLabel,
    Select,
    MenuItem,
    TextField
} from '@material-ui/core';


const FormSubComponent = ({ classes, value, variant, handleChange }) => {

    switch (variant) {
        case "MODE":
            return (
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">What Type of Trail are you Looking For?</FormLabel>
                    <RadioGroup className={classes.radioGroup} aria-label="activities" name="SET_MODE" value={value} onChange={handleChange}>
                        <FormControlLabel value="bike" control={<Radio />} label="Mountain Bike" />
                        <FormControlLabel value="run" control={<Radio />} label="Trail Run" />
                        <FormControlLabel value="hike" control={<Radio />} label="Hike" />
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
                    label="How much travel time do you have (60 minutes maximum)?"
                    name="SET_TIME"
                    value={value > 0 ? value : ""}
                    error={value > 0 ? false : true}
                    onChange={handleChange}
                    type="number"
                    className={classes.TextField}
                    InputLabelProps={{
                        shrink: true,
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