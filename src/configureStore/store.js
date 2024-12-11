import {applyMiddleware, legacy_createStore as createStore} from "redux";
import {rootReducer} from "../reducers/rootReducer.js";
import {thunk} from "redux-thunk";
import logger from "redux-logger";

// const initialState = {
//     message: 'Enter city name',
//     weather:{
//         country: "",
//         city: "",
//         temp: "",
//         pressure: "",
//         sunset: "",
//     }
// }


export const store = createStore(rootReducer,applyMiddleware(thunk,logger));