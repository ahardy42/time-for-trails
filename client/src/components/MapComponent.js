import React, { useContext } from 'react';
import { Grid, Paper, Fab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {Home} from '@material-ui/icons';
import { Map, LayersControl, LayerGroup, Marker, TileLayer, Polygon, Popup } from 'react-leaflet';
import LocateControl from './LocateControl';
import ChoicesContext from '../context/ChoicesContext';
const { Overlay, BaseLayer } = LayersControl;

const useStyles = makeStyles({
    root: {
        height: "80vh"
    },
    Paper: {
        width: "80%",
        height: "80%"
    },
    Fab: {
        position: "absolute",
        left: "10%",
        bottom: "15%",
        zIndex: 1000,
        marginLeft: "-32px"
    }
});

const MapComponent = ({ trailsInfo, setChoices }) => {
    let { choices } = useContext(ChoicesContext);
    let center = [0, 0];
    let zoom = 3;
    const locateOptions = {
        position: 'topleft',
        follow: false,
        setView: false,
        keepCurrentZoomLevel: true,
    }

    const handleClick = event => {
        setChoices({}); // setting choices to an empty object triggers a history.push("/"); in MapPage component!
    }

    const classes = useStyles();

    return (
        <Grid container justify="center" alignContent="center" className={classes.root}>
            <Paper elevation={2} className={classes.Paper}>
                <Map id="myMap" center={center} zoom={zoom} bounds={trailsInfo.bounds ? trailsInfo.bounds : null}>
                    <LayersControl position="topleft">
                        <BaseLayer checked name="openstreetmap">
                            <TileLayer
                                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                        </BaseLayer>
                        <Overlay name="distance polygon" checked={true}>
                            <Polygon positions={trailsInfo.polygon || []} />
                        </Overlay>
                        <Overlay name="trails" checked={true}>
                            <LayerGroup>
                                {/* mapping the trails markers */}
                                {trailsInfo.trails.map((trail, index) => <Marker key={index} position={[trail.latitude, trail.longitude]}><Popup>{trail.name}<br></br><a href={trail.url} target="_blank">link to trail</a></Popup></Marker>)}
                            </LayerGroup>
                        </Overlay>
                    </LayersControl>
                    <LocateControl options={locateOptions} />
                </Map>
                <Fab color="primary" className={classes.Fab} onClick={handleClick}>
                    <Home />
                </Fab>
            </Paper>
        </Grid>
    );
}

export default MapComponent;