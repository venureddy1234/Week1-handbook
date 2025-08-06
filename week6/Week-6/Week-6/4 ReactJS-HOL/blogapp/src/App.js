// src/App.js
import React from 'react';
import './App.css';
import Posts from './Posts'; // Import the Posts component

function App() {
  return (
    <div className="App">
      <h1>Welcome to Blog App</h1>
      <Posts /> {/* Render the Posts component here */}
    </div>
  );
}

export default App;
