import React, { useState } from 'react';
// material UI imports
import { makeStyles } from '@material-ui/core/styles';
import {
    AppBar,
    Typography,
    Link
} from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "row",
        flexGrow: 1,
        height: "10vh"
    },
    appBarFooter: {
        position: "fixed",
        bottom: 0,
        display: "flex",
        flexDirection: "row",
        flexGrow: 1
    },
    Typography: {
        margin: "auto"
    }
})

const Footer = props => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="relative" className={classes.appBarFooter}>
                <Typography className={classes.Typography} variant="h6">Andy Hardy | <Link color="inherit" href="https://www.ahardy42.com" target="_blank">Portfolio</Link></Typography>
            </AppBar>
        </div>
    );
}

export default Footer;