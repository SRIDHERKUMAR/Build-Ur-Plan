import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from './redux';
import {Provider} from 'react-redux';
import App from './App';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {};
const store = createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
);
//const history = syncHistoryWithStore(createBrowserHistory, store)
const rootElement = document.getElementById('root');

render(
        <Provider store={store}>
            <App/>
        </Provider>,
    rootElement
);
