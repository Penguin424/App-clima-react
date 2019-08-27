import React from 'react';
import PropTypes from 'prop-types';

import WeatherLocation from '../WeatherLocation/index';

const listCitiesMap = (cities) => (cities.map((city, i) =>  <WeatherLocation city={city} key={i} />))

const LocationList = ({cities}) => {
    return (
        <div>
            { listCitiesMap(cities) }
        </div>
    );
};

LocationList.propTypes = {
   cities: PropTypes.array.isRequired,
}

export default LocationList;