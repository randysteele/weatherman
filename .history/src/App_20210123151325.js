import logo from './logo.svg';
import './App.css';
import WeatherComponent from './components/WeatherComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> WeatherMan App</h1>
        <WeatherComponent />
      </header>
    </div>
  );
}

export default App;
