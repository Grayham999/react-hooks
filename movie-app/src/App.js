// src/App.js
import React from 'react';
import MovieList from './Movielist';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>Movie App</h1>
      <MovieList />
    </div>
  );
};

export default App;

