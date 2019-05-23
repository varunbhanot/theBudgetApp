import { FETCHING_DATA, FETCHING_DATA_ERROR, FETCHING_DATA_SUCCESS } from "../../constants/Redux";
import { takeEvery, call, put } from "redux-saga/effects";

import { getData } from "../../api/Api";


function* fetchData() {
    
    try {
        const data = yield call(getData)        
        yield put({ type: FETCHING_DATA_SUCCESS, data })
    } catch (error) {        
        yield put({ type: FETCHING_DATA_ERROR })
    }
}

export default function* homeSaga() {
    yield takeEvery(FETCHING_DATA, fetchData)
}