import {  all } from 'redux-saga/effects'

// Sagas 
import homeSaga from "./HomeScreen/Sagas";

export default function * root () {
    yield all([    
        homeSaga()
    ])
  }