import {createStore, compose , applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'
import rootReducer from './redux/index';
import rootSaga from "./sagas/index";
import { composeWithDevTools } from 'remote-redux-devtools';



const sagaMiddleware = createSagaMiddleware();

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() || compose ;


export let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

// kick off root saga
let sagasManager = sagaMiddleware.run(rootSaga)

module.exports = {
  store,
  sagasManager,
  sagaMiddleware  
};