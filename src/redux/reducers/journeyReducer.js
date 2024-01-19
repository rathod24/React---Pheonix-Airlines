import { USER_JOURNEY_DETAILS} from "../actions/actionTypes";
import { journeyData } from "../actions/actionCreator";

let initialState = null;

const journeyReducer = (state=initialState,action)=>{
    switch(action.type) {
        case USER_JOURNEY_DETAILS : return (action.payload);
        default : return state;
    }
}

export default journeyReducer;