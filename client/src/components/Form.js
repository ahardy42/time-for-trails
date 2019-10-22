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
    Paper: {
        width: "80%",
        padding: "1em",
        margin: "1em"
    },
    text: {
        margin: "1em 0"
    },
    TextField: {
        width: "100%"
    },
    formControl: {
        width: "100%"
    },
    button: {
        width: "200px",
        maxWidth: "200px",
        margin: "1em",
        padding: "1em"
    }
})

const Form = ({mode, travelType, timeLimit, errorMessage, handleChange, handleCheck, handleSubmit}) => {
    const classes = useStyles();
    return(
        <Container maxWidth="lg" className={classes.root}>
            <Typography variant="h3" className={classes.text}>What do you have time for today?</Typography>
            <Grid container alignContent="center" justify="center">
                <Paper elevation={2} className={classes.Paper}>
                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormLabel component="legend">What Activity Would You Like to Do?</FormLabel>
                        <RadioGroup className={classes.radioGroup} aria-label="activities" name="mode" value={mode} onChange={handleCheck}>
                            <FormControlLabel value="bike" control={<Radio/>} label="Mountain Bike" />
                            <FormControlLabel value="run" control={<Radio/>} label="Trail Run" />
                            <FormControlLabel value="hike" control={<Radio/>} label="Hike" />
                        </RadioGroup>
                    </FormControl>
                </Paper>
            </Grid>
            <Grid container justify="center">
                <Paper elevation={2} className={classes.Paper}>
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
                </Paper>
            </Grid>
            <Grid container justify="center">
                <Paper elevation={2} className={classes.Paper}>
                    <TextField
                        id="number"
                        label="What kind of time do you have (minutes)?"
                        name="timeLimit"
                        value={timeLimit > 0 ? timeLimit : ""}
                        onChange={handleChange}
                        type="number"
                        className={classes.TextField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        margin="normal"
                    />
                </Paper>
            </Grid>
            <Grid container justify="center">
                <Button variant="contained" className={classes.button} onClick={handleSubmit}>Let's See Where You Can Go!</Button>
            </Grid>

        </Container>
    );
}

export default Form;