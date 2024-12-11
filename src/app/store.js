import message from '../features/messageSlice.js'
import weather from '../features/weatherSlice.js'
import {configureStore} from "@reduxjs/toolkit";

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


export const store = configureStore({
    reducer:{
        message,weather
    }
});