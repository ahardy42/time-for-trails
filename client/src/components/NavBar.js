import React from 'react';
// material UI imports
import { makeStyles } from '@material-ui/core/styles';
import {
    AppBar,
    Typography
} from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "row",
        flexGrow: 1,
        height: "10vh"
    },
    appBar: {
        display: "flex",
        flexDirection: "row",
        flexGrow: 1
    },
    Typography: {
        margin: "auto"
    }
});

const NavBar = ({history}) => {

    const classes = useStyles();
    const displayText = history => {
        const {pathname} = history.location;
        return pathname === "/" ? "Welcome to Time for Training!" : "Get after it!";
    }
    return (
        <div className={classes.root} >
            <AppBar position="static" className={classes.appBar}>
                <Typography className={classes.Typography} variant="h6">{displayText(history)}</Typography>
            </AppBar>
        </div>
    );
}

export default NavBar;