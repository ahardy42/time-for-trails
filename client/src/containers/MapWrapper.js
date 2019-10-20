import React from 'react';
import L from 'leaflet';
import MapComponent from '../components/MapComponent';
import API from '../utils/API';

class MapWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            trailsInfo: {
                trails: [],
                polygon: []
            }
        }
    }
    componentDidMount = async () => {
        // hit api with location information
        let location = await API.getLocation();
        let {coords} = location;
        let position = API.getPosition(coords);
        let {mode, travelType, timeLimit} = this.props.choices;
        let realTime = API.getTimeLimit(timeLimit);
        let trails = await API.getTrails(mode, position, travelType, realTime);
        
        // create a bounds object
        let bounds = L.polygon(trails.polygon).getBounds();
        trails.bounds = bounds;
        
        // set state with trails
        this.setState({
            trailsInfo: trails
        })
    }
    render() {
        return (
            <MapComponent trailsInfo={this.state.trailsInfo} />
        );
    }
}

export default MapWrapper;