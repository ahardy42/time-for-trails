import React from 'react';
// material UI imports
import { makeStyles } from '@material-ui/core/styles';

import {
    Button,
    GridList,
    GridListTile
} from '@material-ui/core';

import MenuIcon from './MenuIcon';

const useStyles = makeStyles({
    GridList: {
        justifyContent: "space-around",
        alignContent: "center",
        height: "100%"
    },
    Tile: {
        display: "flex",
        alignContent: "center",
        justifyContent: "center"
    },
    Typography: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 5px"
    }
});

const NavButtons = ({ context, handleClick }) => {
    let { mode, timeLimit, travelType } = context;
    let classes = useStyles();
    return (
        <GridList cellHeight="auto" className={classes.GridList} cols={3} style={{ margin: "0" }}>
            <GridListTile cols={1} className={classes.Tile}>
                <Button
                    variant="contained"
                    endIcon={<MenuIcon type={travelType}/>}
                    onClick={handleClick}
                    id="TYPE"
                >
                    Travel Method: 
                </Button>
            </GridListTile>
            <GridListTile cols={1} className={classes.Tile}>
                <Button
                    variant="contained"
                    onClick={handleClick}
                    id="TIME"
                >
                    time Limit: {timeLimit} minutes
                </Button>
            </GridListTile>
            <GridListTile cols={1} className={classes.Tile}>
                <Button
                    variant="contained"
                    endIcon={<MenuIcon type={mode}/>}
                    onClick={handleClick}
                    id="MODE"
                >
                    Trail Type: 
                </Button>
            </GridListTile>
        </GridList>
    );
}

export default NavButtons;