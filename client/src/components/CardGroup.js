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
    GridListTile
} from '@material-ui/core';

const useStyles = makeStyles({
    GridList: {
        justifyContent: "space-between"
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

const CardGroup = ({choices}) => {
    let {mode, timeLimit, travelType} = choices;
    let classes = useStyles();
    return (
        <GridList cellHeight="auto" className={classes.GridList} cols={3} style={{marginBottom: "5px"}}>
            <GridListTile cols={1} className={classes.Tile}>
                <Card elevation={2} className={classes.TileCard}>
                    <Typography variant="h6" className={classes.Typography}>Travel Method: {selectIcon(travelType)}</Typography>
                </Card>
            </GridListTile>
            <GridListTile cols={1} className={classes.Tile}>
                <Card elevation={2} className={classes.TileCard}>
                    <Typography variant="h6" className={classes.Typography}>Time Limit: {timeLimit} minutes</Typography>
                </Card>
            </GridListTile>
            <GridListTile cols={1} className={classes.Tile}>
                <Card elevation={2} className={classes.TileCard}>
                    <Typography variant="h6" className={classes.Typography}>Trail Type: {selectIcon(mode)}</Typography>
                </Card>
            </GridListTile>
        </GridList>
    );
}

export default CardGroup;