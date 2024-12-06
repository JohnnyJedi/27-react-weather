import {CHANGE_WEATHER} from "../actions/dataActions.js";


const initialState = {
    country: "",
    city: "",
    temp: "",
    pressure: "",
    sunset: "",
};

export const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_WEATHER:
            return {...state, ...action.payload};
        default:
            return state
    }
}