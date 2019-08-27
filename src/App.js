import React, {Component} from 'react';
import './App.css';

import LocationList from './components/LocationList/index';

const cities = [
    'Tlaquepaque,mx',
    'Chicago,us',
    'Guadalajara,mx',
    'Ciudad de México, mx',
    'Bogota,col'
];



class App extends Component {

    render(){
        return( 

            <div className="App">

                <LocationList cities={cities} />

            </div>

        )
    }
}

export default App;