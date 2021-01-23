class WeatherComponent extends React.Component{
    constructor(props) {
        this.state = {
            error: null,
            isLoaded: false,
            weather: []
        };
    }

    componentDidMount() {
        fetch("https://api.weather.gov/points/{40.415530},{-82.709360}")
          .then(resp => resp.json())
          .then(result => {
            this.setState({
                isLoaded: true,
                weather: result.weather
            })
        })
    }
    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return (
            <ul>
              {weather.map(weather => (
                <li key={weather.id}>
                  {weather.name} {weather.price}
                </li>
              ))}
            </ul>
          );
        }
      }

}
