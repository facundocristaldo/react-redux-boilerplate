import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import allReducers from '../reducers'

const initialState = {count:0, lastAction:undefined}

const middleWare = [thunk];

const store = createStore(allReducers,initialState,composeWithDevTools(applyMiddleware(...middleWare)))

export default store;