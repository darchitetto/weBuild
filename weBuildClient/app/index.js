import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger';
import reducer from '../app/reducers';
import AppContainer from './appContainer'
import { AppRegistry } from 'react-native';

//Log when in dev only
const loggerMiddleware = createLogger({predicate: (getState, action) => __DEV__});

function configureStore(initialState){
    const enhancer = compose (
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware,
        ),
    );

    return createStore(reducer, initialState, enhancer);
}

const store = configureStore({});

const App = () => (
    <Provider store = {store}>
        <AppContainer />
    </Provider>
)

AppRegistry.registerComponent('weBuildClient', () => App);