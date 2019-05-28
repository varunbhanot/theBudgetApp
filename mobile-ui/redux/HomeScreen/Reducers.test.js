import dataReducer from "./Reducers"
import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_ERROR } from "../../constants/Redux"

describe('INITIAL STATE', () => {
    it('should be correct', () => {
        const action = { type: 'dummy_action' }
        const expectedState = createExpectedState([], false, false, false)
        expect(dataReducer(undefined, action)).toEqual(expectedState)
    });

    it('should set isFetching to true', () => {
        const action = { type: FETCHING_DATA }
        const expectedState = createExpectedState([], false, true, false)
        expect(dataReducer(undefined, action)).toEqual(expectedState)
    });

    it('should set dataFetched to true ', () => {
        const action = { type: FETCHING_DATA_SUCCESS , data : [{data:'test'}] }
        const expectedState = createExpectedState([{data:'test'}], true, false, false)
        expect(dataReducer(undefined, action)).toEqual(expectedState)
    });

    it('should set error to true', () => {
        const action = { type: FETCHING_DATA_ERROR }
        const expectedState = createExpectedState([], true, false, true)
        expect(dataReducer(undefined, action)).toEqual(expectedState)
    });
});



const createExpectedState = (cashFlows, dataFetched, isFetching, error) => {
    return {
        cashFlows: cashFlows,
        dataFetched: dataFetched,
        isFetching: isFetching,
        error: error
    }
}

