import {legacy_createStore as createStore} from "redux";
import {rootReducer} from "../reducers/rootReducer.js";

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


export const store = createStore(rootReducer);