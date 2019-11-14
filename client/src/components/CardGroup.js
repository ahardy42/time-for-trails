import React from 'react';
// material UI imports
import { makeStyles } from '@material-ui/core/styles';
import { 
    DirectionsBikeTwoTone,
    DirectionsWalkTwoTone,
    DriveEtaTwoTone,
    DirectionsRunTwoTone
} from '@material-ui/icons/'
import {
    Card,
    Typography,
    GridList,
    GridListTile,
    Button
} from '@material-ui/core';

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
    TileCard: {
        // width: "70%"
    },
    Typography: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 5px"
    },
    editFab: {

    }
});

const selectIcon = type => {
    switch (type) {
        case "drive":
            return <DriveEtaTwoTone fontSize="large" htmlColor="green"/>
        case "bike":
            return <DirectionsBikeTwoTone fontSize="large" htmlColor="green"/>
        case "walk":
            return <DirectionsWalkTwoTone fontSize="large" htmlColor="green"/>
        case "hike":
            return <DirectionsWalkTwoTone fontSize="large" htmlColor="green"/>
        case "run":
            return <DirectionsRunTwoTone fontSize="large" htmlColor="green"/>
        default:
            return null
    }
}

const CardGroup = ({context, handleClick}) => {
    let {mode, timeLimit, travelType} = context;
    let classes = useStyles();
    return (
        <GridList cellHeight="auto" className={classes.GridList} cols={3} style={{margin: "0"}}>
            <GridListTile cols={1} className={classes.Tile} id="TYPE" onClick={handleClick}>
                <Card elevation={2} className={classes.TileCard}>
                    <Typography variant="h6" className={classes.Typography}>Travel Method: {selectIcon(travelType)}</Typography>
                </Card>
            </GridListTile>
            <GridListTile cols={1} className={classes.Tile} id="TIME" onClick={handleClick}>
                <Card elevation={2} className={classes.TileCard}>
                    <Typography variant="h6" className={classes.Typography}>Time Limit: {timeLimit} minutes</Typography>
                </Card>
            </GridListTile>
            <GridListTile cols={1} className={classes.Tile} id="MODE" onClick={handleClick}>
                <Card elevation={2} className={classes.TileCard}>
                    <Typography variant="h6" className={classes.Typography}>Trail Type: {selectIcon(mode)}</Typography>
                </Card>
            </GridListTile>
        </GridList>
    );
}

export default CardGroup;