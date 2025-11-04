// src/App.jsx
import React from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';

function App() {
  return (
    <div className=\"container mx-auto p-4\">  
      <SearchBar />
      <WeatherCard />
    </div>
  );
}

export default App;