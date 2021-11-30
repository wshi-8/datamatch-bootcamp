import { BrowserRouter } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import { createStore, combineReducers } from 'redux';
import {
    ReactReduxFirebaseProvider,
    firebaseReducer,
} from 'react-redux-firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDPd5DSsGtAQvxZhOvQeEenZR7stlv50w8",
    authDomain: "bootcamp-24057.firebaseapp.com",
    databaseURL: "https://bootcamp-24057-default-rtdb.firebaseio.com",
    projectId: "bootcamp-24057",
    storageBucket: "bootcamp-24057.appspot.com",
    messagingSenderId: "193578657257",
    appId: "1:193578657257:web:686bb2f472cd82ea679778"
};

firebase.initializeApp(firebaseConfig);

const rootReducer = combineReducers({
    firebase: firebaseReducer,
});

// Create store with reducers and initial state
const store = createStore(rootReducer);

// react-redux-firebase config
const rrfConfig = {
    userProfile: 'users',
};

const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
};

ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ReactReduxFirebaseProvider>
    </Provider>,
    document.getElementById('root'),
);
