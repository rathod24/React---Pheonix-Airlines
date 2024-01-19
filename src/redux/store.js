import {createStore} from "redux";
import journeyReducer from "./reducers/journeyReducer.js";

const store=createStore(journeyReducer)

export default store;
