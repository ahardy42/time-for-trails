import React from 'react';
import {
    DirectionsWalkTwoTone,
    DriveEtaTwoTone
} from '@material-ui/icons/';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBiking, faHiking, faRunning, faSkiing, faMountain } from '@fortawesome/free-solid-svg-icons';

const MenuIcon = ({ type, size }) => {
    switch (type) {
        case "drive":
            return <DriveEtaTwoTone fontSize={size} htmlColor="green" />
        case "bike":
            return <FontAwesomeIcon icon={faBiking} size={size === "small" ? "sm" : null} color="green" />
        case "walk":
            return <DirectionsWalkTwoTone fontSize={size} htmlColor="green" />
        case "hike":
            return <FontAwesomeIcon icon={faHiking} size={size === "small" ? "sm" : null} color="green" />
        case "run":
            return <FontAwesomeIcon icon={faRunning} size={size === "small" ? "sm" : null} color="green" />
        case "ski":
            return <FontAwesomeIcon icon={faSkiing} size={size === "small" ? "sm" : null} color="green" />
        case "climb":
            return <FontAwesomeIcon icon={faMountain} size={size === "small" ? "sm" : null} color="green" />
        default:
            return null
    }
}

export default MenuIcon;