export const CHANGE_MESSAGE = "CHANGE_MESSAGE";
export const CHANGE_WEATHER ="CHANGE_WEATHER";
export const PRINT_CITY = "PRINT_CITY";


export const changeMessage = (message) =>({
    type: CHANGE_MESSAGE,
    payload: message
})

export const changeWeather = (weather) =>({
    type: CHANGE_WEATHER,
    payload:weather
})

export const printCity = (city) =>({
    type: PRINT_CITY,
    payload:city
})