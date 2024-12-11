import {useState} from "react";
import {api_key, base_url} from "../utils/constants.js";
import {changeMessage, changeWeather} from "../actions/dataActions.js";
import {useDispatch} from "react-redux";


const Form = () => {
    const [city, setCity] = useState('');
    const getCity = (e) => {
        e.preventDefault();
        getWeather(city);
        setCity('');
    }

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

        return (
            <form onSubmit={getCity}>
                <input onChange={e => setCity(e.target.value)} type="text" value={city}/>
                <button type={"submit"}>Get Weather</button>
            </form>
        );
    };
}
export default Form;