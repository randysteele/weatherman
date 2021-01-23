import logo from './logo.svg';
import './App.css';
import WeatherComponent from './components/WeatherComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> WeatherMan App</h1>
      </header>
      <main>
        <WeatherComponent />
      </main>
      <footer> Page Create By Randy Steele
      </footer>
    </div>
  );
}

export default App;
