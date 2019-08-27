import React from 'react';
import WeaterIcons from 'react-weathericons';
import {SUN, SNOW, RAIN, CLOUD, DRIZZLE, THUNDER} from './../constans/constans.clima';
import './../components/WeatherLocation/WeatherData/style.css';

const getWeaterIcon = (iconId) => {
    const size = '3x';

    if(iconId <= 804 || iconId >= 801){

        if(iconId === 800){

            return <WeaterIcons className="wicon" name={SUN} size={size} />
    
        } 

        if(iconId <= 624 || iconId === 600){
                

            if(iconId <= 531 || iconId === 500){


                if(iconId <= 321 || iconId === 300){


                    if(iconId <= 232 || iconId === 200){
        
                        return <WeaterIcons className="wicon" name={THUNDER} size={size} />
        
                    }
        
                    return <WeaterIcons className="wicon" name={DRIZZLE} size={size} />
            
                }

                return <WeaterIcons className="wicon" name={RAIN} size={size} />
        
            } 

            return <WeaterIcons className="wicon" name={SNOW} size={size} />
    
        } 

        return <WeaterIcons className="wicon" name={CLOUD} size={size} />

    }
}

export default getWeaterIcon;