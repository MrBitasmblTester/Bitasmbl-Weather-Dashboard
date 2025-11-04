// src/components/SearchBar.jsx
import React, { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState('');
  return (
    <div className=\"flex mb-4\">
      <input value={city} onChange={e => setCity(e.target.value)} className=\"flex-1 p-2 border\" placeholder=\"Enter city\" />
      <button onClick={() => onSearch(city)} className=\"ml-2 p-2 bg-blue-500 text-white\">Search</button>
    </div>
  );
}