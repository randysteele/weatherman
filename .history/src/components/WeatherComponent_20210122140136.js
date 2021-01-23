import React from 'react'

class WeatherComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            weather: []
        };
    }

    componentDidMount() {
        fetch("https://api.weather.gov/points/39.7456,-97.0892")
          .then(resp => resp.json())
          .then((result) => {
            this.setState({
                isLoaded: true,
                weather: result.weather
            });
        },
        (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
    render() {
        const { error, isLoaded, weather } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return (
            <ul>
              {props.weather.map(weather => (
                <li key={weather.id}>
                  {weather.city} {weather.state}
                </li>
              ))}
            </ul>
          );
        }
      }

}

export default WeatherComponent
