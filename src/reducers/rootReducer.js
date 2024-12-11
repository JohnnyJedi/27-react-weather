import {combineReducers} from "redux";
import {weatherReducer} from "./weatherReducer.js";
import {messageReducer} from "./messageReducer.js";




export const rootReducer = combineReducers({
 weather: weatherReducer,message: messageReducer,
})