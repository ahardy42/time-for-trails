import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {StateProvider} from '../context/ChoicesContext';
import {choicesReducer} from '../context/choicesReducer';
import MapPage from '../pages/MapPage';
import EntryPage from '../pages/EntryPage';
import NoPage from '../pages/NoPage';

const RouteComponent = () => {

    const initialState = { latLng: {}, mode: "", timeLimit: 0, travelType: "" };

    return (
        <StateProvider initialState={initialState} reducer={choicesReducer}>
            <Router>
                <Switch>
                    <Route exact path="/" component={EntryPage} />
                    <Route exact path="/map" component={MapPage} />
                    <Route path="*" component={NoPage} />
                </Switch>
            </Router>
        </StateProvider>
    );
}

export default RouteComponent;