import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Location = ({city}) => {

    return(

        <div className="locationCont">
            <h1>{city}</h1>
        </div>
    );
}

Location.ProTypes = {
    ciyt: PropTypes.string.isRequired,
}



export default Location;