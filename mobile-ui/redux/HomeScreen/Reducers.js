import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_ERROR } from "../../constants/Redux"
const initialState = {
    cashFlows: [],
    dataFetched: false,
    isFetching: false,
    error: false
}


export default function dataReducer(state = initialState, action) {
    console.log(state)
    switch (action.type) {
        case FETCHING_DATA:
            return {
                ...state,
                cashFlows: [],
                isFetching: true
            }
        case FETCHING_DATA_SUCCESS:
            return {
                ...state,
                cashFlows: action.data,
                dataFetched: true
            }
        case FETCHING_DATA_ERROR:
            return {
                ...state,     
                isFetching: false,           
                dataFetched: true,
                error: true
            }
        default:
            return state;
    }

}