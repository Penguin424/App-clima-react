import React from 'react';
import propTypes from 'prop-types';
import getWeaterIcon from './../../../services/icons.change';

const WeatherTemperature = ({temperature, iconId}) => {

    return(
        <div className="weatherTempetureCont">
            <span>
                {
                    getWeaterIcon(iconId)
                }
                <span className="tempeture" >{ `${temperature}`}</span>
                <span className="tempetureType" >{` C°`}</span> 
            </span>
        </div>
);
}


WeatherTemperature.propTypes = {
    temperature: propTypes.number.isRequired,
    weaterState: propTypes.string.isRequired
};

export default WeatherTemperature;