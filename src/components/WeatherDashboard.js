import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './Search';
import WeatherDisplay from './WeatherDisplay';
import Favorites from './Favorites';
import './styles.css';

const WeatherDashboard = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [unit, setUnit] = useState('metric');
  const [error, setError] = useState(null);

  const fetchWeather = async (city) => {
    const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;
    const unitParam = unit === 'metric' ? 'metric' : 'imperial';
    try {
      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unitParam}&appid=${apiKey}`
      );
      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unitParam}&appid=${apiKey}`
      );
      setWeatherData(weatherResponse.data);
      setForecastData(forecastResponse.data.list.slice(0, 5));
      setError(null);
    } catch (error) {
      setError('City not found or network issue. Please try again.');
    }
  };

  useEffect(() => {
    if (city) fetchWeather(city);
  }, [city, unit]);

  const addFavorite = () => {
    if (city && !favorites.includes(city)) {
      setFavorites([...favorites, city]);
    }
  };

  const removeFavorite = (cityToRemove) => {
    setFavorites(favorites.filter((fav) => fav !== cityToRemove));
  };

  return (
    <div className="weather-dashboard">
<div className="heading-card">
  <h1>Check Your City Live Weathers Forecast </h1>
</div>      <Search setCity={setCity} />
      <button onClick={() => setUnit(unit === 'metric' ? 'imperial' : 'metric')}>
        Switch to {unit === 'metric' ? 'Fahrenheit' : 'Celsius'}
      </button>
      <button onClick={addFavorite}>Add to Favorites</button>

      {error && <div className="error-message">{error}</div>}

      {weatherData && <WeatherDisplay weatherData={weatherData} forecastData={forecastData} />}

      <Favorites favorites={favorites} removeFavorite={removeFavorite} setCity={setCity} />
    </div>
  );
};

export default WeatherDashboard;
