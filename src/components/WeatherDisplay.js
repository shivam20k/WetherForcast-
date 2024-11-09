import React from 'react';

const WeatherDisplay = ({ weatherData, forecastData }) => {
  return (
    <div className="weather-display">
      <h2>{weatherData.name}</h2>
      <p>Temperature: {weatherData.main.temp}°</p>
      <p>Condition: {weatherData.weather[0].description}</p>
      <h3>5-Day Forecast:</h3>
      <ul>
        {forecastData.map((day, index) => (
          <li key={index}>
            {new Date(day.dt_txt).toLocaleDateString()}: {day.main.temp}°
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeatherDisplay;
