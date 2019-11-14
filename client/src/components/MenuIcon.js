import React from 'react';
import {
    DirectionsBikeTwoTone,
    DirectionsWalkTwoTone,
    DriveEtaTwoTone,
    DirectionsRunTwoTone
} from '@material-ui/icons/';

const MenuIcon = ({ type, size }) => {
    switch (type) {
        case "drive":
            return <DriveEtaTwoTone fontSize={size} htmlColor="green" />
        case "bike":
            return <DirectionsBikeTwoTone fontSize={size} htmlColor="green" />
        case "walk":
            return <DirectionsWalkTwoTone fontSize={size} htmlColor="green" />
        case "hike":
            return <DirectionsWalkTwoTone fontSize={size} htmlColor="green" />
        case "run":
            return <DirectionsRunTwoTone fontSize={size} htmlColor="green" />
        default:
            return null
    }
}

export default MenuIcon;