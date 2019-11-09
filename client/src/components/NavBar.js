import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
// material UI imports
import { makeStyles } from '@material-ui/core/styles';
import {
    AppBar,
    Typography,
    Hidden
} from '@material-ui/core';
import ModalWrapper from '../containers/ModalWrapper';

import {useChoicesValue} from '../context/ChoicesContext';
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
        flexGrow: 1,
        backgroundColor: "rgb(56, 168, 50)"
    },
    Typography: {
        margin: "auto"
    }
});

const NavBar = () => {

    // simple state to use with the modal
    const [state, setState] = useState({isOpen: false, variant: ""});

    // hooks!
    const classes = useStyles();

    const [context, dispatch] = useChoicesValue();

    const history = useHistory();

    // event handlers
    const handleClick = event => {

        let {id} = event.currentTarget;

        setState({
            isOpen: true,
            variant: id
        });
        
    }

    const setIsOpen = bool => setState({...state, isOpen: bool});

    // helper functions
    const displayText = history => {
        const {pathname} = history.location;
        return pathname === "/" ? "Welcome to Time for Trails!" : "Get after it!";
    }

    const renderCardGroup = (context) => history.location.pathname === "/map" ? <CardGroup context={context} handleClick={handleClick} /> : null;

    return (
        <div className={classes.root} >
            <AppBar position="static" className={classes.appBar}>
                <Typography className={classes.Typography} variant="h6">{displayText(history)}</Typography>
                <Hidden mdDown >
                        {renderCardGroup(context)}
                </Hidden>
            </AppBar>
            <ModalWrapper variant={state.variant} isOpen={state.isOpen} setIsOpen={setIsOpen} />
        </div>
    );
}

export default NavBar;