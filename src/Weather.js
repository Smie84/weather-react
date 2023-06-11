import React from "react";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="weather-app-wrapper">
      <div className="weather-app">
        <form className="search-form">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type a city..."
                className="form-control"
                autocomplete="off"
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
              <li>Humidity: 80%</li>
              <li>Wind: 5km/h</li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
}
