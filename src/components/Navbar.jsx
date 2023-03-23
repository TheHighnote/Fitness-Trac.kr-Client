import React from "react";
import { Link } from "react-router-dom";
import { SearchBar } from "./";

const Navbar = (props) => {
  const loggedIn = props.loggedIn;
  const setLoggedIn = props.setLoggedIn;
  function onLogoutClick() {
    localStorage.removeItem("token");
    localStorage.removeItem("currentUser");
    setLoggedIn(false);
  }

  return (
    <div id="navbar">
      <Link to="/" id="navBarLogo">
        <img id="logoNav" src="/Untitled_Artwork 29.png" alt="" />
      </Link>

      <SearchBar id="searchBar" />

      <div id="navbarButtons">
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/register">
          <button>Register</button>
        </Link>
        {loggedIn ? (
          <Link>
            <button id="navbarButtons" onClick={onLogoutClick}>
              Logout
            </button>
          </Link>
        ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
