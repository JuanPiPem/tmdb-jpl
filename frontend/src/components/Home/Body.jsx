import React, { useEffect, useState } from "react";
import axios from "axios";

import("./body.css");

const Body = ({ movies, onMovieInfo }) => {
  const [displayedMovies, setDisplayedMovies] = useState([]);

  useEffect(() => {
    if (movies.length > 0) {
      setDisplayedMovies(movies);
    } else {
      axios
        .get(
          "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
          {
            params: {
              api_key: "ee44b5d16f40162e3be0b6811a5cc00e",
            },
          }
        )
        .then((response) => {
          setDisplayedMovies(response.data.results);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  }, [movies]);

  const handleMovieClick = (movie) => {
    onMovieInfo(movie);
  };

  return (
    <div className="movie-grid">
      {displayedMovies.map((movie) => (
        <div
          key={movie.id}
          className="movie-card"
          onClick={() => handleMovieClick(movie)}
        >
          <img
            src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
            alt={movie.title}
            className="movie-poster"
          />
          <h3 className="movie-title">{movie.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Body;
