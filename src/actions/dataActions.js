export const CHANGE_MESSAGE = "CHANGE_MESSAGE";
export const CHANGE_WEATHER ="CHANGE_WEATHER";


export const changeMessage = (message) =>({
    type: CHANGE_MESSAGE,
    payload: message
})

export const changeWeather = (weather) =>({
    type: CHANGE_WEATHER,
    payload:weather
})