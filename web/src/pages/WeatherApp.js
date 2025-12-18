import React, { useState } from "react";
import "./WeatherApp.css";

function WeatherApp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

  async function fetchWeather() {
    if (!city.trim()) {
      setError("Please enter a city.");
      return;
    }

    setError("");
    setLoading(true);
    setWeather(null);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );

      if (!response.ok) {
        throw new Error("City not found.");
      }

      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  }

  return (
    <div className="weather-app">
      <div className="weather-card">
        <h1 className="weather-title">Weather App</h1>

        <div className="search-box">
          <input
            type="text"
            placeholder="Enter city name..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && fetchWeather()}
          />
          <button onClick={fetchWeather}>Search</button>
        </div>

        {loading && <p className="loading">Loading...</p>}

        {error && <p className="error">{error}</p>}

        {weather && (
          <div className="weather-info">
            <h2>{weather.name}</h2>

            <div className="weather-main">
              <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt="Weather Icon"
              />
              <h3>{Math.round(weather.main.temp)}°C</h3>
            </div>

            <p className="weather-description">
              {weather.weather[0].description}
            </p>

            <div className="weather-details">
              <p>Humidity: {weather.main.humidity}%</p>
              <p>Wind: {Math.round(weather.wind.speed)} km/h</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default WeatherApp;
