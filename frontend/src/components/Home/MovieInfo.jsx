import React from "react";

const MovieInfo = ({ movie }) => {
  return (
    <div className="movie.info">
      <div className="info-background"></div>
      <div className="info-content"></div>
      <h2>{movie.title}</h2>
      <p>Year: {movie.release_date}</p>
      <p>Vote Average: {movie.vote_average}</p>
      <p>Description: {movie.overview}</p>
    </div>
  );
};

export default MovieInfo;
