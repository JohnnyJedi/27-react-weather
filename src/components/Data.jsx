import Form from "./Form.jsx";
import Weather from "./Weather.jsx";
import {api_key, base_url} from "../utils/constants.js";
import {useDispatch} from "react-redux";
import {changeMessage, changeWeather} from "../actions/dataActions.js";


const Data = () => {


    const dispatch = useDispatch();


    const getWeather = (city) => {
        fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
            .then(result => result.json())
            .then(data => {
                console.log(data)
                dispatch(changeWeather({
                        country: data.sys.country,
                        city: data.name,
                        temp: data.main.temp,
                        pressure: data.main.pressure,
                        sunset: data.sys.sunset
                    }
                ))
                dispatch(changeMessage(''))
            })
            .catch(error => {
                console.log(error)
                dispatch(changeMessage("Enter correct city name"))
            });
    }
    return (
        <div>
            <Form getWeather={getWeather}/>
            <Weather/>
        </div>
    );
};

export default Data;