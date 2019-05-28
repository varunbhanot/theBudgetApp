import { fetchData } from "./Actions";
import { FETCHING_DATA } from "../../constants/Redux";

describe('actions', () => {
    it('should create an action FETCHING_DATA', () => {
        const expected = {
            type: FETCHING_DATA
        }
        expect(fetchData()).toEqual(expected)
    });
});