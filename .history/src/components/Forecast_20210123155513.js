import React, { useState } from 'react';
//import Conditions from '../Conditions/Conditions';
// import classes from './Forecast.module.css';

const Forecast = () => {

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
    
    const uriEncodedCity = encodeURIComponent(city);

    fetch(`https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&q=${uriEncodedCity}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
            "x-rapidapi-key": process.env.REACT_APP_API_KEY
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