import React, { createContext, useContext, useReducer } from 'react';

// from https://medium.com/simply/state-management-with-react-hooks-and-context-api-at-10-lines-of-code-baf6be8302c

/**
 * ChoicesContext now contains the provider and consumer
 * Provider is being exported with the value set to the result of useReducer (which is the initial state and the dispatch function)
 * Children would be our App!
 * 
 * useChoicesValue is a custom hook that gives us access to the value in any functional component in the tree!!!
 */

export const ChoicesContext = createContext();

export const StateProvider = ({reducer, initialState, children}) => {
    return(
        <ChoicesContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </ChoicesContext.Provider>
    );
}

export const useChoicesValue = () => useContext(ChoicesContext);