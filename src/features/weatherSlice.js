import {createSlice} from "@reduxjs/toolkit";

const weatherSlice = createSlice({
    name: "weather",
    initialState: {
        country: "",
        city: "",
        temp: "",
        pressure: "",
        sunset: "",
    },
    reducers: {
        changeWeather: (state, action) => {
            return ({
                country: action.payload.country,
                city: action.payload.city,
                temp: action.payload.temp,
                pressure: action.payload.pressure,
                sunset: action.payload.sunset,
            })
        }
    }
})

export const {changeWeather} = weatherSlice.actions;
export default weatherSlice.reducer;