// import { createStore } from "redux";

import { createStore, applyMiddleware } from '../my-redux'

import thunk from 'redux-thunk';
import logger from 'redux-logger';
// import { applyMiddleware } from 'redux';

function countReducer(state = 0, action: any) {
  switch(action.type) {
    case "ADD": 
      return state + 1;
    case "MINUS": 
      return state - 1;
    default:  
      return state;
  }
}

//@ts-ignore
const store = createStore(countReducer, applyMiddleware(thunk, logger));

export default store;