import React from 'react';

import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature'
import '../WeatherData/style.css';
import PropTypes from 'prop-types';

const WeatherData = ({data: {tempeture, weatherState, humidity, wind} }) => {

    return(
    <div className="weatherDataCount">
        <WeatherTemperature temperature={tempeture} weaterState={weatherState} />
        <WeatherExtraInfo humidity={humidity}  wind={wind} />
    </div>
    );
};

WeatherData.propTypes = {
    data: PropTypes.shape({
        tempeture: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired
    })
}

export default WeatherData;