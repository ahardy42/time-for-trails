import React from 'react';
import {Container, Paper, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const useStyles = makeStyles({
    root: {
        width: '100%',
        color: 'red'
    }
});

const EntryPage = (props) => {
    const classes = useStyles();
    return(
        <>
            <NavBar />
            <Container>
                <Paper className={classes.root}>
                    <Typography variant="h3">Sorry, you have wandered off the path!</Typography>
                </Paper>
            </Container>
            <Footer />
        </>
    )
}

export default EntryPage;