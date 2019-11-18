import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Radio } from '@material-ui/core';
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBiking, faHiking, faRunning, faSkiing, faMountain } from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles({
    checked: {
        backgroundColor: "rgba(0, 0, 0, 0.54)",
        padding: "10px",
        margin: "-10px -5px -10px -10px",
        borderRadius: "100%"
    }
});

const iconsGroup = {
    run: faRunning,
    bike: faBiking,
    hike: faHiking,
    ski: faSkiing,
    climb: faMountain
}

const StyledRadio = (props) => {

    const classes = useStyles();

    return (
        <Radio
            id={`radio-${props.value}`}
            color="default"
            checkedIcon={<FontAwesomeIcon icon={iconsGroup[props.value]} inverse className={classes.checked}/>}
            icon={<FontAwesomeIcon icon={iconsGroup[props.value]} />}
            {...props}
        ></Radio>
    );
}

export default StyledRadio;
