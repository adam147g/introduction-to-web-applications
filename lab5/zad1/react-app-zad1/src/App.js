// src/App.js
import React from 'react';
import './App.css'; // Możesz usunąć, jeśli nie chcesz korzystać z pliku CSS
import tadaaImage from './images/tadaa.jpg';

function App() {
  return (
    <div>
      <h1>Hello world</h1>
      <img src={tadaaImage} alt="Miodowe" style={{ maxWidth: '100%' }} />
    </div>
  );
}

export default App;
