import React from "react";
import axios from "axios";
import "./home.css";
import { useNavigate } from "react-router-dom";

const Header = ({ user, search, logout, favorites }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    axios
      .post(
        "http://localhost:3001/api/users/logout",
        {},
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        if (response.status === 204) {
          console.log("Cierre de sesión");
          navigate("/register");
        }
      });
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      console.log("soy enter");
      search(event.target.value);
      console.log(event.target.value);
    }
  };

  return (
    <header>
      <div className="user-profile">{user && <span>Hi, {user.name}</span>}</div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Movies..."
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className="action-buttons">
        <button className="favorites" onClick={favorites}>
          Favorites
        </button>
        <button className="logout" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
