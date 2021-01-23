import React from 'react';

const Forecast = () => {
   function getForecast() {
      // weather data fetch function will go here
   }
   return (
    <div>
    <h2>Find Current Weather Conditions</h2>
    <div>
        {JSON.stringify(responseObj)}
    </div>
    <button onClick={getForecast}>Get Forecast</button>
</div>
   )
}
export default Forecast;