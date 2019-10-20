import { createContext } from 'react';

const ChoicesContext = createContext({
    choices: {},
    setChoices: () => {}
});

export default ChoicesContext;