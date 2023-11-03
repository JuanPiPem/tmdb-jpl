import React, { useEffect, useState } from "react";
import axios from "axios";
import("./body.css");

const Body = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZTQ0YjVkMTZmNDAxNjJlM2JlMGI2OD11YTVjYzAwZSIsInN1YiI6IjY1M2ZkOWRhNTA3MzNjMDBmZjRiNmU3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ana14Nl3FjCTn1-sP0iaD2KuOqJgmt0i5QT8yf9yRVA",
          },
        }
      )
      .then(function (response) {
        setMovies(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
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
