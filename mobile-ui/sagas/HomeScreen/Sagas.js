import { FETCHING_DATA, FETCHING_DATA_ERROR, FETCHING_DATA_SUCCESS } from "../../constants/Redux";
import { takeEvery, call, put } from "redux-saga/effects";

function* fetchData(api) {
    
    try {
        const data = yield call(api.getData)        
        yield put({ type: FETCHING_DATA_SUCCESS, data })
    } catch (error) {        
        yield put({ type: FETCHING_DATA_ERROR })
    }
}

export default function* homeSaga(api) {
    yield takeEvery(FETCHING_DATA, fetchData.bind(null, api))
}