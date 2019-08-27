


const getWeatherServiceForName = (city) => {
    
    const api_key = "e7fd15c85fbdc793052a8808c6977b52";
    const url_base_weather = "https://api.openweathermap.org/data/2.5/weather";
    const api_weather = `${url_base_weather}?q=${city}&appid=${api_key}&units=metric`;

    return api_weather
}

export default getWeatherServiceForName;