
    import {useDispatch, useSelector} from "react-redux";
    import {printCity} from "../actions/dataActions.js";


    const Form = ({getWeather}) => {
        // const [city,setCity] = useState('');

        const {city} = useSelector((state) => state.input);
        const dispatch = useDispatch();

        const getCity = (e) => {
            e.preventDefault();
            getWeather(city);
            dispatch(printCity(''));

        }

        return (
            <form onSubmit={getCity}>
                <input onChange={e => dispatch(printCity(e.target.value))}  type="text" value={city}/>
                <button  type={"submit"}>Get Weather</button>
            </form>
        );
    };

    export default Form;