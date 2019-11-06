import React from 'react';
import { Redirect } from 'react-router-dom';
import NavBar from '../components/NavBar';
import MapWrapper from '../containers/MapWrapper';
import Footer from '../components/Footer';
import { useChoicesValue } from '../context/ChoicesContext';

const MapPage = () => {

    const [context] = useChoicesValue();

    if (context.mode === "") {
        return <Redirect to="/" />
    }

    return (
        <>
            <NavBar />
            <MapWrapper />
            <Footer />
        </>
    )
}

export default MapPage;