import {createContext} from 'react';

const LocationContext = createContext({
    location: [],
    setLocation: () => {}
});

export default LocationContext;