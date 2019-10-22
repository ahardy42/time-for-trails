import React from 'react';
import NavBar from '../components/NavBar';
import MapWrapper from '../containers/MapWrapper';
import Footer from '../components/Footer';
import ChoicesContext from '../context/ChoicesContext';

const MapPage = ({history}) => {
    return(
        <>
            <NavBar history={history} />
            <ChoicesContext.Consumer>
                {({choices, setChoices}) => "mode" in choices ? <MapWrapper setChoices={setChoices} choices={choices} history={history} /> : history.push("/")}
            </ChoicesContext.Consumer>
            <Footer />
        </>
    )
}

export default MapPage;