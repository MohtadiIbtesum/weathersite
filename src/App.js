import React, { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=970000fc7abc573ea130dffd016eea40&units=metric`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        
      });
      setLocation("");
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input
          type="text"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          placeholder="Enter Location"
          onKeyPress={searchLocation}
        />
      </div>
      {data.main ? <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            
            <h1>{data.main.temp}℃</h1>
          </div>
          <div className="description">
            <p className="bold">{data.weather[0].description}</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p className="bold">{data.main.feels_like}℃</p>
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            <p className="bold">{data.main.humidity}%</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p className="bold">{data.wind.speed} kmh</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div> : null }
      
    </div>
  );
}

export default App;
