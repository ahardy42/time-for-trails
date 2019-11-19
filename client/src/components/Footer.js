import React from 'react';
// material UI imports
import { makeStyles } from '@material-ui/core/styles';
import {
    AppBar,
    Typography,
    Link
} from '@material-ui/core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faLink } from '@fortawesome/free-solid-svg-icons';

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
                    <Link color="inherit" href="mailto:aohardy@gmail.com?subject=time4trails?%20website%20comments" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faPaperPlane} size="xs" /> Andy Hardy
                    </Link> | <Link color="inherit" href="https://www.ahardy42.com" target="_blank" rel="noopener noreferrer">
                        Portfolio <FontAwesomeIcon icon={faLink} size="xs" />
                    </Link>
                </Typography>
            </AppBar>
        </div>
    );
}

export default Footer;