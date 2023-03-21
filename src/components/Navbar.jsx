import React from "react";
// import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="navbar">
      <img id="title" src="/Untitled_Artwork 29.png" alt="" />
      <input id="searchBar" type="text" placeholder="Search Here" />
      <div id="navbarButtons">
        <button>Register</button>
        <button>Log in</button>
        <button>Log Out</button>
      </div>
    </div>
  );
};

export default Navbar;
