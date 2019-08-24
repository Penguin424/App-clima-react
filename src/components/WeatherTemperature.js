import React from 'react';
import WeaterIcons from 'react-weathericons';

const icons = {
    sun: 'day-sunny',
    fog: 'day-fog',
    cloud: 'day-cloud',
    cloudy: 'day-cloudy',
    rain: 'rain',
    snow: 'snow',
    windy: 'windy'

}

const getWeaterIcon = (weaterState) => {
    const icon = icons[weaterState]

    if(icon){

        return <WeaterIcons name={icon} size="2x" />

    } else {

        return <WeaterIcons name={'day-sunny'} size="2x" />

    }
}

const WeatherTemperature = ({temperature, weaterState}) => (
    <div>
        <span>
            {
                getWeaterIcon(weaterState)
            }
            {`${temperature} C° `}
        </span>
    </div>
);

export default WeatherTemperature;