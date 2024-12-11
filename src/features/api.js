import {api_key, base_url} from "../utils/constants.js";
import {changeWeather} from "./weatherSlice.js";
import {changeMessage} from "./messageSlice.js";




export const fetchWeather = (city) =>{
    return dispatch => {
        fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
            .then(result => result.json())
            .then(data => {
                dispatch(changeWeather({
                    country: data.sys.country,
                    city: data.name,
                    temp: data.main.temp,
                    pressure: data.main.pressure,
                    sunset: data.sys.sunset,
                }));
                dispatch(changeMessage(''));
            })
            .catch(error => {
                console.error(error);
                dispatch(changeMessage("Enter correct city name"));
            });
    }
}