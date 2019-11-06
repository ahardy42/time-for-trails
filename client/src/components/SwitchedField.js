import React from 'react';
import {
    Switch,
    FormControlLabel,
    FormGroup,
    TextField,
    Collapse,
    GridList,
    GridListTile,
    GridListTileBar,
    Typography,
    Divider
} from '@material-ui/core';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import { Skeleton } from '@material-ui/lab';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    outline: {
        border: "2px solid red",
        padding: "5px",
        borderRadius: "5px"
    },
    button: {
        cursor: "pointer"
    },
    divider: {
        margin: "10px 0"
    }
})

const SwitchedField = ({ handleChange, searchVal, checked, isSkeleton, locations, setChecked, setLatLng, outline }) => {

    const classes = useStyles();

    return (
        <FormGroup>
            <FormControlLabel
                control={
                    <Switch checked={checked} onChange={setChecked} value={checked} />
                }
                label={checked ? "use my location" : "search for a location"}
            />
            <Collapse in={checked}>
                <TextField
                    id="location"
                    name="searchVal"
                    value={searchVal}
                    label="Enter a Location"
                    onChange={handleChange}
                />
                {!isSkeleton && locations.length ? (
                        <>
                            <Divider className={classes.divider} />
                            <Typography variant="subtitle1" align="center" gutterBottom>Select A City!</Typography>
                        </>
                    ) : null}
                <GridList cellHeight={50} cols={3}>
                    {
                        isSkeleton ? (
                            <GridListTile cols={3}><Skeleton variant="rect" height={50} /></GridListTile>
                        ) : (
                                locations.map((location, index) => {
                                    return(
                                        <GridListTile 
                                            key={index} 
                                            onClick={() => setLatLng(index, {lat: parseFloat(location.lat), lng: parseFloat(location.lon)})}
                                            className={outline === index ? classes.outline : classes.button}
                                        >
                                            <GridListTileBar 
                                                title={location.display_name}
                                                actionIcon={
                                                    <LocationCityIcon />
                                                }
                                            />
                                        </GridListTile>
                                    );
                                })
                            )
                    }
                </GridList>
            </Collapse>
        </FormGroup>
    );
};

export default SwitchedField;