class WeatherComponent extends React.Component{
    constructor(props) {
        this.state = {
            error: null,
            isLoaded: false,
            weather: []
        };
    }

    componentDidMount() {
        fetch("https://api.weather.gov/openapi.json")
          .then(resp => resp.json())
          .then(result => {
            this.setState({
                isLoaded: true,
                weather: result.weather
            })
        })
    }


}
