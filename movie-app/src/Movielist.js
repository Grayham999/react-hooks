// src/components/MovieList.js
import React, { useState } from 'react';
import MovieCard from './moviecard.js';
import Filter from './Filter';
import Inception from './inception.jpeg';
import Titanic from './titanic.jpeg'

const MovieList = () => {
  const [movies, setMovies] = useState([
    { title: 'Inception', description: 'Inception is a 2010 science fiction action film[4][5][6] written and directed by Christopher Nolan', posterURL: Inception, rating: 5 },
    { title: 'Titanic', description: 'Incorporating both historical and fictionalized aspects, it is based on accounts of the sinking of RMS Titanic in 1912.', posterURL: Titanic, rating: 4 },
    // Add more initial movies if needed
  ]);

  const [filter, setFilter] = useState({ title: '', rating: '' });

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const filteredMovies = movies.filter((movie) =>
    (filter.title === '' || movie.title.toLowerCase().includes(filter.title.toLowerCase())) &&
    (filter.rating === '' || movie.rating === Number(filter.rating))
  );

  return (
    <div>
      <Filter setFilter={setFilter} />
      <button onClick={() => addMovie({
        title: 'New Movie',
        description: 'New Description',
        posterURL: 'https://via.placeholder.com/150',
        rating: 3
      })}>Add New Movie</button>
      <div className="movie-list">
        {filteredMovies.map((movie, index) => (
          <MovieCard key={index} {...movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
