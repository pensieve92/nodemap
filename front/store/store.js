import {configureStore} from "@reduxjs/toolkit";
import {createWrapper, HYDRATE} from 'next-redux-wrapper'
import createSagaMiddleware  from 'redux-saga';

import rootSaga from '../sagas';
import userReducer from  '../slices/user';
import treeReducer from '../slices/tree';


const appReducer = (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        return { ...state, ...action.payload };
      default:
        return state;
    }
  };

const sagaMiddleware = createSagaMiddleware();

// export const makeStore = () => configureStore({
// 	reducer: {
//         tree: treeReducer,
//         appReducer
//   },
//   middleware : [sagaMiddleware],
//   devTools: process.env.NODE_ENV === 'development',
// });

export const makeStore = () => {
  const store = configureStore({
    reducer: {
          user: userReducer,
          tree: treeReducer,          
          appReducer
    },
    middleware : [sagaMiddleware],
    devTools: process.env.NODE_ENV === 'development',
  });
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store
}


export const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV === 'development',
});