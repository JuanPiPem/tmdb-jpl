import React from "react";
import "./home.css";

const Header = ({ user, search, logout, favorites }) => {
  return (
    <header>
      <div className="user-profile">
        {user && <span>Hi! {user.name}</span>}

        <button className="logout" onClick={logout}>
          Logout
        </button>
      </div>
      <div className="actions">
        <div className="search-bar">
          <input type="text" placeholder="Search Movies..." onChange={search} />
        </div>
        <button className="favorites" onClick={favorites}>
          Favorites
        </button>
      </div>
    </header>
  );
};

export default Header;
