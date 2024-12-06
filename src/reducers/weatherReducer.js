import {CHANGE_MESSAGE, CHANGE_WEATHER} from "../actions/dataActions.js";



// const initialState = {
//     message: 'Enter city name',
//     weather:{
//         country: "",
//         city: "",
//         temp: "",
//         pressure: "",
//         sunset: "",
//     }
// };

export const weatherReducer = (state, action) => {
    switch (action.type) {
        case CHANGE_MESSAGE:
            return {...state, message: action.payload};
        case CHANGE_WEATHER:
            return {...state,  weather:action.payload};
        default:
            return state
    }
}