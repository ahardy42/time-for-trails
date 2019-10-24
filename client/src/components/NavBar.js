import React from 'react';
// material UI imports
import { makeStyles } from '@material-ui/core/styles';
import {
    AppBar,
    Typography,
    Hidden
} from '@material-ui/core';

import ChoicesContext from '../context/ChoicesContext';
import CardGroup from './CardGroup';

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "row",
        flexGrow: 1,
        height: "10vh"
    },
    appBar: {
        display: "flex",
        flexDirection: "column",
        flexGrow: 1
    },
    Typography: {
        margin: "auto"
    }
});

const NavBar = ({history, choices}) => {

    const classes = useStyles();
    const displayText = history => {
        const {pathname} = history.location;
        return pathname === "/" ? "Welcome to Time for Training!" : "Get after it!";
    }

    const renderCardGroup = choices => "mode" in choices ? <CardGroup choices={choices} /> : null;

    return (
        <div className={classes.root} >
            <AppBar position="static" className={classes.appBar}>
                <Typography className={classes.Typography} variant="h6">{displayText(history)}</Typography>
                <Hidden mdDown >
                    <ChoicesContext.Consumer>
                        {({choices}) => renderCardGroup(choices)}
                    </ChoicesContext.Consumer>
                </Hidden>
            </AppBar>
        </div>
    );
}

export default NavBar;