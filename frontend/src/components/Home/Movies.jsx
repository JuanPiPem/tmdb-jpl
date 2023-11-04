import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import Body from "./Body";
import { useNavigate } from "react-router-dom";

const Movies = () => {
  const [user, setUser] = useState({});
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = (event) => {
    // Escucha cambios en el campo de búsqueda, pero no realiza la búsqueda aún.
    // Aquí puedes implementar lógica adicional si es necesario.
  };

  const handleSearchKeyPress = (event) => {
    if (event.key === "Enter") {
      // Realiza la búsqueda cuando el usuario presiona Enter.
      performSearch(event.target.value);
    }
  };

  const performSearch = (searchTerm) => {
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
          <Header
            user={user}
            search={handleSearch}
            searchKeyPress={handleSearchKeyPress}
          />
          <Body movies={searchResults} />
        </div>
      ) : (
        navigate("/register")
      )}
    </div>
  );
};

export default Movies;
