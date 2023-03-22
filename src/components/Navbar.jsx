import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const loggedIn = props.loggedIn;
  function onLogoutClick() {
    console.log("been clicked");
    localStorage.removeItem("token");
    window.location.reload(false);
  }

  return (
    <div id="navbar">
      <Link to="/" id="navBarLogo">
        <img id="logoNav" src="/Untitled_Artwork 29.png" alt="" />
      </Link>
      <input id="searchBar" type="text" placeholder="Search Here" />
      <div id="navbarButtons">
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
