import React from 'react';
import { 
    Button,
    Paper, 
    Typography, 
    Container, 
    Grid
} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
// component import
import SwitchedContainer from '../containers/SwitchedContainer';
import FormSubComponent from './FormSubComponent';

const useStyles = makeStyles({
    root: {
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        margin: "2em auto 5em auto",
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
                    <FormSubComponent classes={classes} value={mode} variant="MODE" handleChange={handleChange} />
                </Paper>
            </Grid>
            <Grid container justify="center">
                <Paper elevation={2} className={classes.Paper}>
                    <FormSubComponent classes={classes} value={travelType} variant="TYPE" handleChange={handleChange} />
                </Paper>
            </Grid>
            <Grid container justify="center">
                <Paper elevation={2} className={classes.Paper}>
                    <FormSubComponent classes={classes} value={timeLimit} variant="TIME" handleChange={handleChange} />
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
