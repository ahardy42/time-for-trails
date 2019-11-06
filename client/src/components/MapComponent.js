import React from 'react';
import { Grid, Paper, Fab, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {Home} from '@material-ui/icons';
import { Map, LayersControl, LayerGroup, Marker, TileLayer, Polygon, Popup } from 'react-leaflet';
import LocateControl from './LocateControl';
import { useChoicesValue } from '../context/ChoicesContext';
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
});

const MapComponent = ({ trailsInfo, handleClick, isLoading }) => {
    let [context] = useChoicesValue();
    let center = [0, 0];
    let zoom = 3;
    const locateOptions = {
        position: 'topleft',
        follow: false,
        setView: false,
        keepCurrentZoomLevel: true,
    }

    const classes = useStyles();

    const renderPopup = ({name, imgSmall, url, summary}) => {
        return (
            <Popup options={{autoPan: true}}>
                <div className="popup-content">
                    <h3>{name}</h3>
                    <p>{summary}</p>
                    <br/>
                    <img src={imgSmall} alt='trail image'/>
                    <br/>
                    <a href={url} target='_blank'>here's some more info...</a>
                </div>
            </Popup>
        )
    }

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
                        <Overlay name="distance polygon" checked={true}>
                            <Polygon positions={trailsInfo.polygon || []} />
                        </Overlay>
                        <Overlay name="trails" checked={true}>
                            <LayerGroup>
                                {/* mapping the trails markers */}
                                {trailsInfo.trails.map((trail, index) => <Marker key={index} position={[trail.latitude, trail.longitude]}>{renderPopup(trail)}</Marker>)}
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