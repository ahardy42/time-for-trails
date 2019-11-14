import React, { useState } from 'react';

import {
    Button,
    Menu,
    MenuItem
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import MenuIcon from './MenuIcon';

import { useChoicesValue } from '../context/ChoicesContext';

const useStyles = makeStyles({
    button: {
        width: "50%",
        maxWidth: "350px",
        minWidth: "200px",
        margin: "auto"
    }
})

const ChoicesMenu = ({ handleClick }) => {

    const classes = useStyles();

    const [anchorEl, setAnchorEl] = useState(null);

    const [{ mode, timeLimit, travelType }] = useChoicesValue();

    const openMenu = event => {
        setAnchorEl(event.currentTarget);
    }

    const closeMenu = () => {
        setAnchorEl(null);
    }

    return (
        <>
            <Button
                aria-controls="edit-menu"
                aria-haspopup="true"
                onClick={openMenu}
                variant="contained"
                className={classes.button}
            >
                Edit / View Choices
            </Button>
            <Menu
                id="edit-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={closeMenu}
                getContentAnchorEl={null}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
            >
                <MenuItem onClick={(event) => {handleClick(event); closeMenu()}} id="TYPE">Travel Mehod: {<MenuIcon type={travelType} size="small" />}</MenuItem>
                <MenuItem onClick={(event) => {handleClick(event); closeMenu()}} id="TIME">Time Limit: {timeLimit} minutes</MenuItem>
                <MenuItem onClick={(event) => {handleClick(event); closeMenu()}} id="MODE">Trail Type: {<MenuIcon type={mode} size="small" />}</MenuItem>
            </Menu>
        </>
    );
}

export default ChoicesMenu;