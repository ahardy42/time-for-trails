import React from 'react';
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
        flexGrow: 1
    },
    appBarFooter: {
        position: "fixed",
        bottom: 0,
        display: "flex",
        flexDirection: "row",
        flexGrow: 1,
        backgroundColor: "rgb(56, 168, 50)",
        height: "10vh"
    },
    Typography: {
        margin: "auto"
    }
})

const Footer = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="relative" className={classes.appBarFooter} component="footer">
                <Typography className={classes.Typography} variant="h6">
                    Andy Hardy | <Link color="inherit" href="https://www.ahardy42.com" target="_blank">Portfolio</Link>
                </Typography>
            </AppBar>
        </div>
    );
}

export default Footer;