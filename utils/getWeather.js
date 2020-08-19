import { useState, useEffect, useCallback } from 'react';
import getLocation from '../utils/getLocation';

const API_Key = '2679115de849ac01b004ee085233073e';
const Base_URL = 'http://api.openweathermap.org/data/2.5/weather';

const getWeather = () => {
  const [weatherData, setWeatherData] = useState(null);

  const coordinates = getLocation();

  const fetchWeatherData = useCallback(async () => {
    try {
      const queryString = `?lat=${coordinates.lat}&lon=${coordinates.lon}&units=metric&appid=${API_Key}`;
      const URL = Base_URL + queryString;
      console.log(URL)
      const response = await fetch(URL);
      if (response.ok) {
        const weatherData = await response.json();
        setWeatherData(weatherData);
        console.log(`Weather Data: ${weatherData} `);
      }
    } catch (err) {
      console.log("API call failed");
    }
  }, []);

  useEffect(() => {
    if (coordinates) {
      fetchWeatherData();
    }
  }, []);

  return weatherData;
};

export default getWeather;
