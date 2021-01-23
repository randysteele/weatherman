import React, { useState } from 'react';
import Conditions from '../Conditions/Conditions';

const Forecast = () => {
    let [responseObj, setResponseObj] = useState({});

    function getForecast() {

    fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=seattle`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "7b02074c19mshedbbe70e8fd2ae2p163b20jsne2411a44c687",
	     	"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
        }
    })
    .then(response => response.json())
    .then(response => {
        setResponseObj(response)
    });
}

    return (
        <div>
           <h2>Find Current Weather Conditions</h2>
           <button onClick={getForecast}>Get Forecast</button>
           <Conditions
               responseObj={responseObj}
               />           
       </div>
    )}

export default Forecast;