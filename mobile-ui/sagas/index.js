import {  all } from 'redux-saga/effects'

// Sagas 
import homeSaga from "./HomeScreen/Sagas"
import DebugConfig from "../config/DebugConfig"
import FixtureAPI from "../services/FixtureApi/Api"
import API from "../services/Api/Api"

export const api = DebugConfig.useFixtures ? FixtureAPI : API

export default function * root () {
    yield all([    
        homeSaga(api)
    ])
  }