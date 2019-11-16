import React from 'react';
import { Grid, Paper, Fab, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {Home} from '@material-ui/icons';
import { Map, LayersControl, LayerGroup, TileLayer, Polygon } from 'react-leaflet';
import MyMarker from './leaflet/MyMarker';
import MyPopup from './leaflet/MyPopup';
import PolyPopup from './leaflet/PolyPopup';
import LocateControl from './LocateControl';

const { Overlay, BaseLayer } = LayersControl;

const useStyles = makeStyles( theme => ({
    root: {
        height: "80vh"
    },
    Paper: {
        width: "80%",
        height: "80%",
        [theme.breakpoints.down('sm')]: {
            width: "100%",
            height: "100%"
        }
    },
    Fab: {
        position: "absolute",
        left: "10%",
        bottom: "15%",
        zIndex: 1000,
        marginLeft: "-32px"
    },
    mapLoading: {
        opacity: 0.3
    },
    spinner: {
        position: "absolute",
        top: "50vh",
        left: "50vw",
        marginTop: "-100px",
        marginLeft: "-100px",
        zIndex: 500
    }
}));

const MapComponent = ({ trailsInfo, handleClick, isLoading, choices }) => {

    let center = [0, 0];
    let zoom = 3;
    const locateOptions = {
        position: 'topleft',
        follow: false,
        setView: false,
        keepCurrentZoomLevel: true,
    }

    const classes = useStyles();

    return (
        <Grid container justify="center" alignContent="center" className={classes.root}>
            <Paper elevation={2} className={classes.Paper}>
                {isLoading ? (
                    <CircularProgress 
                        color="secondary"
                        size={200}
                        thickness={5}
                        className={classes.spinner}
                    />
                ) : null}
                <Map id="myMap" className={isLoading ? classes.mapLoading : ""} center={center} zoom={zoom} bounds={trailsInfo.bounds ? trailsInfo.bounds : null}>
                    <LayersControl position="topleft">
                        <BaseLayer checked name="openstreetmap">
                            <TileLayer
                                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                        </BaseLayer>
                        <Overlay name="travel limit" checked={true}>
                            <Polygon positions={trailsInfo.polygon || []} color="#38a832">
                                <PolyPopup 
                                    trailsNum={trailsInfo.trails.length} 
                                    mode={choices.mode} 
                                    timeLimit={choices.timeLimit} 
                                    travelType={choices.travelType}
                                />
                            </Polygon>
                        </Overlay>
                        <Overlay name="trails nearby" checked={true}>
                            <LayerGroup>
                                {/* mapping the trails markers */}
                                {trailsInfo.trails.map((trail, index) => {
                                    return (
                                        <MyMarker 
                                            key={index} 
                                            position={[trail.latitude, trail.longitude]}
                                            icon={choices.mode}
                                            markerColor={trail.difficulty}
                                        >
                                            <MyPopup trail={trail} />
                                        </MyMarker>
                                    )
                                })}
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