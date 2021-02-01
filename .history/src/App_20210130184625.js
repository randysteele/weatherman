import './App.css';
import Forecast from './components/Forecast'
import 'materialize-css/dist/css/materialize.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> WeatherMan App</h1>
      </header>
      <main>
       <Forecast />
      </main>
      <footer> Created By Randy Steele
      </footer>
    </div>
  );
}

export default App;
