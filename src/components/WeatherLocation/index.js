import React, {Component} from 'react';

import Location from './Location';
import WeatherData from './WeatherData';
import { SUN, WINDY } from './../../constans/constans.clima';
import './style.css';


const data1 = {
    tempeture: 5,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s'
}

const data2 = {
    tempeture: 10,
    weatherState: WINDY,
    humidity: 2,
    wind: '20 m/s'
}


class WeatherLocation extends Component{

    constructor(){
        super();

        this.state = {
            city: 'Tlaquepaque',
            data: data1
        }

    }

    handleUpdateClick = () => {
        console.log('click');

        if(this.state.city === 'Tlaquepaque'){
            this.setState({
                city: 'Guadalajara',
                data: data2
            });
        } else {

        this.setState({
            city: 'Tlaquepaque',
            data: data1
        });
        }


    }

    render(){

        const {data, city} = this.state;

        return(
            <div className="weatherLocationCont">
                <Location city={city}></Location>
                <WeatherData data={data} ></WeatherData>
                <button onClick={this.handleUpdateClick} >Actualizar</button>
            </div>
        );

    }

}






export default WeatherLocation;