import React, { useState } from 'react';
import Conditions from '../components/Conditions';

const Forecast = () => {
    let [responseObj, setResponseObj] = useState({});
    let [city, setCity] = useState('');
    let [unit, setUnit] = useState('imperial');

    const uriEncodedCity = encodeURIComponent(city);


    function getForecast(e) {
        e.preventDefault();


         fetch(`https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&q=${uriEncodedCity}`, {
            "method": "GET",
            "headers": {
              "x-rapidapi-key": "7b02074c19mshedbbe70e8fd2ae2p163b20jsne2411a44c687",
	          "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
        }
    })
    .then(response => response.json())
    .then(response => {
        setResponseObj(response)
        debugger
    });
}

    return (
        <div>
           <h2>Current Weather Conditions</h2>
           <form onSubmit={getForecast}>
                <input 
                    type="text"
                    placeholder="Enter City"
                    maxLength="50"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    />
                <label>
                    <input className ="imperial" checked
                        type="radio"
                        name="units"
                        checked={unit === "imperial"}
                        value="imperial"
                        onChange={(e) => setUnit(e.target.value)}
                        />
                        <span>Fahrenheit</span>
                    
                </label>
                <label>
                    <input className="metric"
                        type="radio"
                        name="units"
                        checked={unit === "metric"}
                        value="metric"
                        onChange={(e) => setUnit(e.target.value)}
                        />
                    <span>Celcius</span>
                </label>
                <button type="submit">Get Forecast</button>
            </form>
           <Conditions
               responseObj={responseObj}
               />           
       </div>
    )}

export default Forecast;