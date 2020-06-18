import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from 'reduxStore/rootReducer';
import {apiMiddleware} from 'reduxStore/middleware/apiMiddleware';

const initialState = {};

const enhancers = [];

const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
}

const middleware = [
    apiMiddleware
];

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
);

const store = createStore(
    rootReducer,
    initialState,
    composedEnhancers
);

export default store;
