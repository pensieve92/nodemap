import {configureStore} from "@reduxjs/toolkit";
import {createWrapper, HYDRATE} from 'next-redux-wrapper'

import treeReducer from "../slices/tree";

const appReducer = (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        return { ...state, ...action.payload };
      default:
        return state;
    }
  };

export const makeStore = () => configureStore({
	reducer: {
        tree: treeReducer,
        appReducer
	},
    devTools: process.env.NODE_ENV === 'development',
    
});

export const wrapper = createWrapper(makeStore, {debug:true})