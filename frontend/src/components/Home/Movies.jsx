import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import Body from "./Body";

const Movies = () => {
  const [user, setUser] = useState({});

  const handleSearch = (event) => {
    // busqueda de peliculas
  };

  const handleLogout = () => {
    //  logica logout
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
      <Header user={user} onSearch={handleSearch} onLogout={handleLogout} />
      <Body />
    </div>
  );
};

export default Movies;
