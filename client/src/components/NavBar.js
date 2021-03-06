import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// material UI imports
import { makeStyles } from '@material-ui/core/styles';
import {
    AppBar,
    Typography,
    Hidden
} from '@material-ui/core';
import ModalWrapper from '../containers/ModalWrapper';

import { useChoicesValue } from '../context/ChoicesContext';
import NavButtons from './NavButtons';
import ChoicesMenu from './ChoicesMenu';

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
        flexGrow: 1,
        backgroundColor: "rgb(56, 168, 50)"
    },
    Typography: {
        margin: "auto"
    }
});

const NavBar = () => {

    // simple state to use with the modal
    const [state, setState] = useState({ isOpen: false, variant: "" });

    // hooks!
    const classes = useStyles();

    const [context] = useChoicesValue();

    const history = useHistory();

    // event handlers
    const handleClick = event => {

        let { id } = event.currentTarget;

        setState({
            isOpen: true,
            variant: id
        });

    }

    const setIsOpen = bool => setState({ ...state, isOpen: bool });

    // helper functions
    const renderText = history => {
        const { pathname } = history.location;
        return pathname === "/" ? (
            <Typography className={classes.Typography} variant="h6">Welcome to Time for Trails!</Typography>
        ) : null;
    }

    return (
        <div className={classes.root} >
            <AppBar position="static" className={classes.appBar}>
                {renderText(history)}
                <Hidden smDown >
                    {history.location.pathname === "/map" ? (
                        // rendering a card group on larger devices
                        <NavButtons context={context} handleClick={handleClick} />
                    ) : null}
                </Hidden>
                <Hidden mdUp>
                    {history.location.pathname === "/map" ? (
                        // rendering a menu on small screens
                        <ChoicesMenu handleClick={handleClick} />
                    ) : null}
                </Hidden>
            </AppBar>
            <ModalWrapper variant={state.variant} isOpen={state.isOpen} setIsOpen={setIsOpen} />
        </div>
    );
}

export default NavBar;