import { USER_JOURNEY_DETAILS } from "./actionTypes";

export const journeyData = (data)=>{
    return {
        type:USER_JOURNEY_DETAILS,
        payload :data,
    }
}