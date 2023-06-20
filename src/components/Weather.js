import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ready:false});

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      temperature: response.data.main.temp,
      windSpeed: response.data.wind.speed,
      city: response.data.name,
      date: "25 May 2023",
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      imageUrl: "",
      ready:true
    });
  }

  if (weatherData.ready) {
    return (
      <div className="weather-info">
        <div className="row">
          <div className="col-6">
            <h1 className="city"> {weatherData.city}</h1>
            <ul>
              <li>
                Last updated:
                <span className="date">{weatherData.date}</span>
              </li>
              <li>
                <span className="description text-capitalize">{weatherData.description}</span>
              </li>
              <li>
                <ul>
                  <li>
                    Humidity:
                    <strong>
                      <span className="humidity">{weatherData.humidity}</span>%
                    </strong>
                  </li>
                  Wind:
                  <strong className="lowercase">
                    <span>{weatherData.windSpeed}</span>m/h
                  </strong>
                </ul>
              </li>
            </ul>
          </div>
          <div className="col-6">
            <div className="temperature-container d-flex justify-content-end">
              <img src={weatherData.imageUrl} alt={weatherData.description} />
              <span className="temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="unit">°C</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "1dbf926d3b4417bf379db7043bec1047";
    const unit = "metric";
    let city = "Kyiv";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading..........";
  }
}
