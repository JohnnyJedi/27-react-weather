import {useState} from "react";
import {fetchWeather} from "../actions/dataActions.js";
import {useDispatch} from "react-redux";

const Form = () => {
    const [city, setCity] = useState('');
    const dispatch = useDispatch();

    const getCity = (e) => {
        e.preventDefault();
        dispatch(fetchWeather(city));
        setCity('');
    }



    return (
        <form onSubmit={getCity}>
            <input
                onChange={(e) => setCity(e.target.value)}
                type="text"
                value={city}
                placeholder="Enter city"
            />
            <button type="submit">Get Weather</button>
        </form>
    );
}

export default Form;