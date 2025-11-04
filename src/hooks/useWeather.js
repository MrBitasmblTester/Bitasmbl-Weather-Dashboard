// src/hooks/useWeather.js
import { useState, useEffect } from 'react';

const API_KEY = 'YOUR_API_KEY';
export default function useWeather(city) {
  const [data, setData] = useState(null);
  useEffect(() => {
    if (!city) return;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
      .then(res => res.json())
      .then(setData);
  }, [city]);
  return data;
}