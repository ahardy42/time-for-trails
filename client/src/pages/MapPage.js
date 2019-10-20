import React from 'react';
import NavBar from '../components/NavBar';
import MapWrapper from '../containers/MapWrapper';
import Footer from '../components/Footer';
import LocationContext from '../context/LocationContext';
import ChoicesContext from '../context/ChoicesContext';

const MapPage = ({history}) => {
    return(
        <>
            <NavBar />
            <ChoicesContext.Consumer>
                {({choices}) => <MapWrapper choices={choices} history={history} />}
            </ChoicesContext.Consumer>
            <Footer />
        </>
    )
}

export default MapPage;