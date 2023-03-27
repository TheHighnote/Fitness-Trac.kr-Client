import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../API-Adapter";

function Login({ loggedIn, setLoggedIn }) {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  const setCurrentUser = (user) => {
    localStorage.setItem("currentUser", JSON.stringify(user));
    setUser(user);
  };

  const handleClick = async (event) => {
    event.preventDefault();
    const result = await loginUser(userName, password);
    if (result && result.token) {
      localStorage.setItem("token", result.token);
      setLoggedIn(true);
      setCurrentUser(userName);
      navigate("/");
    } else {
      console.log(result.error);
      alert("USERNAME OR PASSWORD INCORRECT");
    }
  };

  return (
    <div className="loginPageBox">
      <div className="loginPage">
        <h1>Please login</h1>
        <form onSubmit={handleClick}>
          <p>Username:</p>
          <input
            className="userNameInput"
            value={userName}
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <br></br>
          <p>Password:</p>
          <input
            className="passwordInput"
            value={password}
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br></br>
          <button className="submitBtn" type="submit">
            Submit
          </button>
          <br></br>
          <Link to="/register" className="registerLink">
            Don't have an account? Register here!
          </Link>
          <img id="logoDash" src="/Untitled_Artwork 29.png" alt="" />
        </form>
        
      </div>
    </div>
  );
}

export default Login;
