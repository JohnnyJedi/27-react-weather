

const Weather = ({weather, message}) => {
    const formatSunset = new Date(weather.sunset * 1000);
    const sunsetTime = formatSunset.toLocaleString();
    if (message) {

        return (
            <div className={'infoWeath'}>{message}</div>
        )

    } else {
        return (
            <div className={'infoWeath'}>
                <p>Location: {weather.country}, {weather.city}</p>
                <p>Temp: {weather.temp} </p>
                <p>Pressure: {weather.pressure}</p>
                <p>Sunset: {sunsetTime}</p>
            </div>
        );
    }

};

export default Weather;