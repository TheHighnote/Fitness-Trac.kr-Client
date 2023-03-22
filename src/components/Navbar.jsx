import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
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
        <Link to="/login">
          <button>Log in</button>
        </Link>
        <button>Log Out</button>
      </div>
    </div>
  );
};

export default Navbar;
