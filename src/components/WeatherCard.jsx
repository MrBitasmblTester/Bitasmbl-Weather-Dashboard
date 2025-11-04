// src/components/WeatherCard.jsx
import React from 'react';

export default function WeatherCard({ data }) {
  if (!data) return <div className=\"text-center\">No data</div>;
  return (
    <div className=\"bg-white shadow rounded p-4\">
      <h2 className=\"text-2xl mb-2\">{data.name}</h2>
      <p>{data.weather[0].description}</p>
      <p>Temp: {data.main.temp}°C</p>
    </div>
  );
}