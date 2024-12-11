import {api_key, base_url} from "../utils/constants.js";

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

