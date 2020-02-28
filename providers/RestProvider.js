import React from 'react'

const state = {
    url: '',
}

const RestContext = React.createContext(state);

export const RestProvider = RestContext.Provider;
export const RestConsumer = RestContext.Consumer;
export default RestContext;