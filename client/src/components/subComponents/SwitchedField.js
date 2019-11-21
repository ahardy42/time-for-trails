import React from 'react';
import {
    Switch,
    FormControlLabel,
    FormGroup,
    TextField,
    Collapse,
    List,
    ListItem,
    ListItemText,
    Typography,
    Divider,
    ListItemSecondaryAction,
    Hidden,
    Button,
    IconButton
} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchLocation } from '@fortawesome/free-solid-svg-icons';
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
    },
    list: {
        maxHeight: "150px",
        overflow: "scroll",
        boxShadow: "inset 0 0 5px 0 black"
    }
})

const SwitchedField = ({ handleChange, searchVal, isSkeleton, locations, setChecked, checked, handleSubmit, isDisabled }) => {

    const classes = useStyles();

    return (
        <FormGroup>
            <FormControlLabel
                control={
                    <Switch checked={checked} onChange={() => {setChecked(!checked)}} value={checked} />
                }
                label={checked ? "un-check to use your location" : "search for a location"}
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
                        <Typography variant="subtitle1" align="center" gutterBottom>Select A City Below!</Typography>
                    </>
                ) : null}
                <List className={!isSkeleton && locations.length > 2 ? classes.list : null}>
                    {
                        isSkeleton ? (
                            <ListItem><Skeleton variant="rect" height={50} width="100%" /></ListItem>
                        ) : (
                                locations.map((location, index) => {
                                    return (
                                        <ListItem
                                            button
                                            key={index}
                                        >
                                            <ListItemText primary={location.display_name} secondary={location.type} />
                                            <Hidden xsDown>
                                                <Button
                                                    variant="contained"
                                                    disabled={isDisabled}
                                                    onClick={() => handleSubmit({ lat: parseFloat(location.lat), lng: parseFloat(location.lon) })}
                                                >
                                                    {isDisabled ? "Please fill out all Fields!" : "Search!"}
                                                    </Button>
                                            </Hidden>
                                            <ListItemSecondaryAction>
                                                <Hidden smUp>
                                                    <IconButton 
                                                        edge="end" 
                                                        aria-label="submit"
                                                        onClick={() => handleSubmit({ lat: parseFloat(location.lat), lng: parseFloat(location.lon) })}
                                                    >
                                                        <FontAwesomeIcon icon={faSearchLocation} />
                                                    </IconButton>
                                                </Hidden>
                                            </ListItemSecondaryAction>
                                        </ListItem>
                                    );
                                })
                            )
                    }
                </List>
            </Collapse>
        </FormGroup>
    );
};

export default SwitchedField;