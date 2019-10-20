import React, { useContext } from 'react';
// import {ic} from 'leaflet';
import { Map, LayersControl, LayerGroup, Marker, TileLayer, Polygon, Popup} from 'react-leaflet';
import LocateControl from './LocateControl';
import ChoicesContext from '../context/ChoicesContext';
const { Overlay, BaseLayer } = LayersControl;

const MapComponent = ({ trailsInfo }) => {
    let { choices } = useContext(ChoicesContext);
    let center = [0, 0];
    let zoom = 3;
    const locateOptions = {
        position: 'topleft',
        follow: false,
        setView: false,
        keepCurrentZoomLevel: true,
    }
    return (
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
    );
}

export default MapComponent;