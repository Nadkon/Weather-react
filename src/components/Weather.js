import React from "react";

export default function Weather() {
  let weatherData = {
    city: "Kyiv",
    date: "25 May 2023",
    description: "Sunny",
    humidity: 20,
    temperature: +25,
    windSpeed: 1,
    imageUrl: "",
  };

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
              <span className="description">{weatherData.description}</span>
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
            <span className="temperature"></span>
            <span className="unit">{weatherData.temperature}°C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
