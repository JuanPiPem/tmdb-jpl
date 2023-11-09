import React, { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "../../context/userContext";

import("./body.css");

const Body = ({ movies, onMovieInfo, userId }) => {
  const [displayedMovies, setDisplayedMovies] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const user = useUser();
  console.log("UUUUUUUU", user);

  const isFavorite = (movie) => {
    return favorite.some((film) => film.id === movie.id);
  };

  const handleFavoriteClick = (movie) => {
    if (isFavorite(movie)) {
      axios
        .delete(`/api/favorites/remove/${movie.id}`)
        .then((response) => {
          if (response.status === 202) {
            setFavorite(favorite.filter((film) => film.id !== movie.id));
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      axios
        .post("http://localhost:3001/api/favorites/add", {
          movie_id: movie.id,
          user_id: user.id,
        })
        .then((response) => {
          console.log("HHHHHH", response);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

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
          <button
            onClick={() => handleFavoriteClick(movie)}
            className="favorite-button"
          >
            {isFavorite(movie) ? "Remove" : "Add to Favorites"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Body;
