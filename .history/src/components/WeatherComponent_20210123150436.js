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
        fetch("http://api.weatherapi.com/v1/current.json?key=52cfceb9a11845559d2195750212301&q=45013")
          .then(resp => resp.json())
          .then(
              (result) => {
            this.setState({
                isLoaded: true,
                weather: [result.weather]
            });
            debugger
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
          return (
            <ul>
              {this.state.weather.map(places => (
                <li key={this.id}>
                  {places.properties.cwa}
                </li>
              ))}
            </ul>
          );
        }
      }



export default WeatherComponent
