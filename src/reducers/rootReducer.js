import {combineReducers} from "redux";
import {weatherReducer} from "./weatherReducer.js";
import {messageReducer} from "./messageReducer.js";
import {inputReducer} from "./inputReducer.js";



export const rootReducer = combineReducers({
 weather: weatherReducer,message: messageReducer,input: inputReducer,
})