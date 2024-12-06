import {legacy_createStore as createStore} from "redux";
import {weatherReducer} from "../reducers/weatherReducer.js";

const initialState = {

    message: 'Enter city name',
    weather:{
        country: "",
        city: "",
        temp: "",
        pressure: "",
        sunset: "",
    }
}


export const store = createStore(weatherReducer, initialState);