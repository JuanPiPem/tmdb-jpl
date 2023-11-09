import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import Body from "./Body";
import MovieInfo from "./MovieInfo";

import { useNavigate } from "react-router-dom";

const Movies = () => {
  const [user, setUser] = useState({});
  const [searchResults, setSearchResults] = useState([]);
  const [info, setInfo] = useState(null);

  const navigate = useNavigate();

  const handleSearch = (searchTerm) => {
    axios
      .get("https://api.themoviedb.org/3/search/movie", {
        params: {
          api_key: "ee44b5d16f40162e3be0b6811a5cc00e",
          query: searchTerm,
        },
      })
      .then((response) => {
        setSearchResults(response.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleInfo = (movie) => {
    console.log("Mostrando información de la película:", movie);
    setInfo(movie);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/users/me", { withCredentials: true })
      .then((result) => result.data)
      .then((userData) => {
        if (userData) setUser(userData);
      });
  }, []);

  return (
    <div>
      {user.name ? (
        <div>
          <Header user={user} search={handleSearch} />
          <Body movies={searchResults} onMovieInfo={handleInfo} />
          {info && <MovieInfo movie={info} />}
        </div>
      ) : (
        navigate("/register")
      )}
    </div>
  );
};

export default Movies;
