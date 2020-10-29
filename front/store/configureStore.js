
import { createWrapper } from 'next-redux-wrapper'; // 1.
import { applyMiddleware, compose, createStore } from 'redux';    // 2.
import rootReducer from '../reducers';  // 3. 
import { composeWithDevTools} from 'redux-devtools-extension';  // 

const configureStroe = () => {  // 1-1.
    const middlewares = [];
    const enhancer = (process.env.NODE_ENV === 'production')
        ? compose(applyMiddleware(...middlewares))
        : composeWithDevTools(applyMiddleware(...middlewares))  // 4.

    const store = createStore(rootReducer, enhancer); // 2-1. createStore & 3-1 reducer
    return store;
}

const wrapper = createWrapper(configureStroe, { // 1-2.
    debug: process.env.NODE_ENV === 'development',
});

export default wrapper; // 1-3.