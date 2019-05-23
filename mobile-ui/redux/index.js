import {combineReducers } from 'redux';

//reducers
import dataReducer from "./HomeScreen/Reducers";

const rootReducer = combineReducers({
  cashflows: dataReducer
});


export default rootReducer;
