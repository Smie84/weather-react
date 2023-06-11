import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: ` https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ac209dae1f283fb332a5bb7f50b0f468&units=metric`;
    axios.get(url).then(displayWeather);
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="weather-app-wrapper">
      <div className="weather-app">
        <form className="search-form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type a city..."
                className="form-control"
                autocomplete="off"
                onChange={changeCity}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="form-control btn btn-primary shadow-sm"
              />
            </div>
          </div>
        </form>
      </div>
      <div className="overview mt-3">
        <h1>Rustenburg</h1>
        <ul>
          <li>Wednesday 22:00</li>

          <li>Cloudy</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Cloudy icon"
              className="weather-icon float-left"
            />
            <strong>19</strong>
            <span className="units">
              <a href="/">°C</a> | <a href="/">°F</a>
            </span>
          </div>
        </div>
        <div class="col-6">
          <ul>
            <li>Precipitation: 0%</li>
            <ul>
              <li>Humidity: {weather.humidity}80%</li>
              <li>Wind: {weather.wind}5km/h</li>
            </ul>
          </ul>
        </div>
      </div>
      <small>
        <a
          href="https://github.com/Smie84/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>
        by Simiso Sesedza
      </small>
    </div>
  );
}
