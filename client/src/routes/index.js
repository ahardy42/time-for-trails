import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LocationContext from '../context/LocationContext';
import ChoicesContext from '../context/ChoicesContext';
import MapPage from '../pages/MapPage';
import EntryPage from '../pages/EntryPage';
import NoPage from '../pages/NoPage';

class RouteComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: {},
            setLocation: this.setLocation,
            choices: {},
            setChoices: this.setChoices
        }
    }
    setChoices = choices => {
        this.setState({
            choices: choices
        });
    }
    setLocation = coords => {
        this.setState({
            location: coords
        })
    }
    render() {
        return (
            <ChoicesContext.Provider value={{choices: this.state.choices, setChoices: this.state.setChoices}}>
            <LocationContext.Provider value={{location: this.state.location, setLocation: this.state.setLocation}}>
                <Router>
                    <Switch>
                        <Route exact path="/" component={EntryPage} />
                        <Route exact path="/map" component={MapPage} />
                        <Route path="*" component={NoPage} />
                    </Switch>
                </Router>
            </LocationContext.Provider>
            </ChoicesContext.Provider>
        );
    }
}

export default RouteComponent;