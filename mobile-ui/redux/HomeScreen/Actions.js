import { FETCHING_DATA } from "../../constants/Redux";

export function fetchData() {    
    return {
        type: FETCHING_DATA
    }
}