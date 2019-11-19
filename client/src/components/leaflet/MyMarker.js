import React from 'react';
import L from 'leaflet';
import { Marker } from 'react-leaflet';
import 'leaflet.awesome-markers';
import '@fortawesome/free-solid-svg-icons';

const MyMarker = ({ position, icon, markerColor, children }) => {

    const returnIcon = icon => {
        switch (icon) {
            case "bike":
                return "biking";
            case "run":
                return "running";
            case "hike":
                return "hiking";
            case "ski":
                return "skiing";
            default:
                return;
        }
    }

    const returnColor = markerColor => {
        switch (markerColor) {
            case "greenBlue": 
                return "green";
            case "blueBlack": 
                return "blue";
            case "dblack": 
                return "black"
            default: 
                return markerColor;
        }
    }

    const customIcon = L.AwesomeMarkers.icon({
        icon: returnIcon(icon),
        prefix: 'fa',
        markerColor: returnColor(markerColor)
    });

    return (
        <Marker
            position={position}
            icon={customIcon}
        >
            {children}
        </Marker>
    );

}

export default MyMarker;