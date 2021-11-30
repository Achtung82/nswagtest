import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { WeatherClient, WeatherForecast } from "./data/WeatherClient";

function App() {
  const [weatherList, setweatherList] = useState<WeatherForecast[]>([]);
  useEffect(() => {
    const client = new WeatherClient("https://localhost:7232");
    client.getWeatherForecast().then((weather) => {
      setweatherList(weather);
      console.log(weather);
    });
  }, []);

  const wlist = weatherList.map((weather) => (
    <li key={weather.id}>
      {weather.summary}
      <br />
      {weather.temperatureC}
    </li>
  ));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>{wlist}</ul>
      </header>
    </div>
  );
}

export default App;
