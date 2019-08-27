import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import Location from './Location';
import WeatherData from './WeatherData';
import axios from 'axios';
import PropTypes from 'prop-types';
import './style.css';

import  getWeatherServiceForName  from '../../services/axios.get.component'

class WeatherLocation extends Component{

    constructor(props){
        super(props);

        const {city} = props

        this.state = {
            city: city,
            data: null
        }

    }

    componentDidMount = async() => {
        this.handleUpdateClick();
        console.log()
    }    
    

    handleUpdateClick = async() => {
        let promise = await axios.get(getWeatherServiceForName(this.props.city));
        let data = await promise.data;
 
        let weatherRes = {
            city: this.props.city,
            data: {
                weatherState: data.weather[0].main,
                wind: data.wind.speed,
                humidity: data.main.humidity,
                tempeture: data.main.temp,
                iconId: data.weather[0].id
            }

        }


        this.setState({
            city: weatherRes.city,
            data: weatherRes.data
        })

        return console.log(weatherRes)

    }

    render(){

        const {data, city} = this.state;

        return(
            <div className="weatherLocationCont">
                <Location city={city}></Location>
                {data ? <WeatherData data={data} ></WeatherData> : <CircularProgress />}
            </div>
        );

    }

}

WeatherLocation.propType = {
    city: PropTypes.string.isRequired,
}




export default WeatherLocation;