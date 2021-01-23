import React, { useState } from 'react';
//import Conditions from '../Conditions/Conditions';
// import classes from './Forecast.module.css';

const Forecast = () => {
    let [responseObj, setResponseObj] = useState({});
    let [city, setCity] = useState('');
    let [unit, setUnit] = useState('imperial');
    let [responseObj, setResponseObj] = useState({});
    let [error, setError] = useState(false);
    let [loading, setLoading] = useState(false);

function getForecast(e) {
    e.preventDefault();

    if (city.length === 0) {
        return setError(true);
    }

    // Clear state in preparation for new data
    setError(false);
    setResponseObj({});
    
    setLoading(true);
    
  //  const uriEncodedCity = encodeURIComponent(city);

    fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=seattle`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "7b02074c19mshedbbe70e8fd2ae2p163b20jsne2411a44c687",
	     	"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
        }
    })
    .then(response => response.json())
    .then(response => {
        if (response.cod !== 200) {
            throw new Error()
        }

        setResponseObj(response);
        setLoading(false);
    })
    .catch(err => {
        setError(true);
        setLoading(false);
        console.log(err.message);
    });
}

    return (
        <div>
           <h2>Find Current Weather Conditions</h2>
           <div>
               {JSON.stringify(responseObj)}
           </div>
           <button onClick={getForecast}>Get Forecast</button>
       </div>
    )}

export default Forecast;