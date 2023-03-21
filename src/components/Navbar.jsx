import React from "react";
// import { Link } from "react-router-dom";

const Navbar = () => {
  
  return (
    <div id="navbar">
      <h2 id="title">Fitness Trac.kr</h2>
      <input 
      id="searchbar"
      type="text"
      placeholder="Search Here" />
    <div id="navbarButtons">
      <button>Register</button>
      <button>Log in</button>
      <button>Log Out</button>
    </div>
    </div>
  );
};

export default Navbar;