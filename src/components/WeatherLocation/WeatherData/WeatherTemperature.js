import React from 'react';
import WeaterIcons from 'react-weathericons';
import propTypes from 'prop-types';
import { SUN, FOG, SNOW, RAIN, CLOUD, CLOUDY, WINDY } from './../../../constans/constans.clima';
import './style.css';

const icons = {
    [SUN]: 'day-sunny',
    [FOG]: 'day-fog',
    [CLOUD]: 'day-cloud',
    [CLOUDY]: 'day-cloudy',
    [RAIN]: 'rain',
    [SNOW]: 'snow',
    [WINDY]: 'windy'

}

const getWeaterIcon = (weaterState) => {
    const icon = icons[weaterState]
    const size = '3x';

    if(icon){

        return <WeaterIcons className="wicon" name={icon} size={size} />

    } else {

        return <WeaterIcons className="wicon" name={'day-sunny'} size={size} />

    }
}

const WeatherTemperature = ({temperature, weaterState}) => (
    <div className="weatherTempetureCont">
        <span>
            {
                getWeaterIcon(weaterState)
            }
            <span className="tempeture" >{ `${temperature}`}</span>
            <span className="tempetureType" >{` C°`}</span> 
        </span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: propTypes.number.isRequired,
    weaterState: propTypes.string.isRequired
};

export default WeatherTemperature;