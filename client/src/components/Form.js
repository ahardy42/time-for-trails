import React from 'react';
import { FormControl, InputLabel, Select, Button, RadioGroup, FormControlLabel, Radio, TextField, Paper, Typography, Container, Grid, FormLabel} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignContent: "center"
    },
    radioGroup: {

    },
    text: {
        margin: "1em 0"
    },
    formControl: {},
    button: {
        width: "200px",
        maxWidth: "200px"
    }
})

const Form = ({mode, travelType, timeLimit, errorMessage, handleChange, handleCheck, handleSubmit}) => {
    const classes = useStyles();
    return(
        <Container maxWidth="lg" className={classes.root}>
            <Typography variant="h3" className={classes.text}>What do you have time for today?</Typography>
            <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">What Activity Would You Like to Do?</FormLabel>
                <RadioGroup className={classes.radioGroup} aria-label="activities" name="mode" value={mode} onChange={handleCheck}>
                    <FormControlLabel value="bike" control={<Radio/>} label="Mountain Bike" />
                    <FormControlLabel value="run" control={<Radio/>} label="Trail Run" />
                    <FormControlLabel value="hike" control={<Radio/>} label="Hike" />
                </RadioGroup>
            </FormControl>
            <FormControl component="fieldset" className={classes.formControl}>
                <InputLabel htmlFor="select">How Are You Getting There?</InputLabel>
                <Select
                    value={travelType}
                    onChange={handleChange}
                    inputProps={{
                        id: 'travel-select',
                        name: 'travelType'
                    }}
                >
                    <option value="">Select</option>
                    <option value="drive">Drive</option>
                    <option value="bike">Bike</option>
                    <option value="walk">Walk</option>
                </Select>
            </FormControl>
            <TextField
                id="number"
                label="Time limit (minutes)"
                name="timeLimit"
                value={timeLimit}
                onChange={handleChange}
                type="number"
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
                margin="normal"
            />
            <Button variant="contained" className={classes.button} onClick={handleSubmit}>Let's See Where You Can Go!</Button>
        </Container>
    );
}

export default Form;