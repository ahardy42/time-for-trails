import React from 'react';
import { 
    FormControl, 
    InputLabel, 
    Select, 
    Button, 
    RadioGroup, 
    FormControlLabel, 
    Radio, 
    TextField, 
    Paper, 
    Typography, 
    Container, 
    Grid, 
    FormLabel,
    MenuItem
} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
// component import
import SwitchedContainer from '../containers/SwitchedContainer';

const useStyles = makeStyles({
    root: {
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        margin: "2em 0 5em 0",
        borderRadius: "5px"
    },
    Paper: {
        width: "80%",
        padding: "1em",
        margin: "1em"
    },
    text: {
        margin: "1em 0"
    },
    info: {
        width: "80%",
        textAlign: "justify",
        lineHeight: 2
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

const Form = ({mode, travelType, timeLimit, handleChange, handleSubmit, isDisabled}) => {
    const classes = useStyles();

    return(
        <Container maxWidth="lg" className={classes.root}>
            <Typography variant="h3" className={classes.text}>What Trails are within your reach today?!</Typography>
            <Grid container alignContent="center" justify="center">
                <Paper elevation={2} className={classes.Paper}>
                    <Typography variant="body1">
                        This app uses your location (or a location of your choosing), and some information you provide below (what type of trails you're looking for, and how much time you have to get to the trailhead) to display a map of 
                        places you can go within that time limit, and, where there are some cool trails nearby.  When you click the button below you will be taken to a map page to help you navigate to the trails.
                    </Typography>
                </Paper>
            </Grid>
            <Grid container alignContent="center" justify="center">
                <Paper elevation={2} className={classes.Paper}>
                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormLabel component="legend">What Type of Trail are you Looking For?</FormLabel>
                        <RadioGroup className={classes.radioGroup} aria-label="activities" name="SET_MODE" value={mode} onChange={handleChange}>
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
                        <InputLabel htmlFor="travel-select">How Are You Getting There?</InputLabel>
                        <Select
                            value={travelType}
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
                </Paper>
            </Grid>
            <Grid container justify="center">
                <Paper elevation={2} className={classes.Paper}>
                    <TextField
                        id="number"
                        label="How much travel time do you have (minutes)?"
                        name="SET_TIME"
                        value={timeLimit > 0 ? timeLimit : ""}
                        error={timeLimit > 0 ? false : true}
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
                <Paper elevation={2} className={classes.Paper}>
                    <SwitchedContainer />
                </Paper>
            </Grid>
            <Grid container justify="center">
                <Button variant="contained" className={classes.button} disabled={isDisabled} onClick={handleSubmit}>
                    {isDisabled ? "Please Fill Out All Form Fields" : "Let's Find Some Trails Near You!"}
                </Button>
            </Grid>

        </Container>
    );
}

export default Form;
