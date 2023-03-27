import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../API-Adapter";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [user, setUser] = useState("");

  const navigate = useNavigate();

  const registerNewUser = async (username, password) => {
    if (!username || !password) {
      alert("ALL FIELDS ARE REQUIRED");
      return;
    }
    if (password.length < 8 ){
      alert("PASSWORD MUST BE 8 CHARACTERS OR MORE")
      return null;
    }
    try {
      const result = await registerUser(username, password);
      localStorage.setItem("token", result.token);
      setUsername(username);
      setPassword(password);
      setUser(username);
      setConfirmPassword(confirmPassword);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="loginPageBox">
      <div className="loginPage">
        <h1>Create Account</h1>
        <form
          className="registrationForm"
          onSubmit={(e) => {
            e.preventDefault();
            registerNewUser(username, password, confirmPassword);
          }}
        >
          <p>Username:</p>
          <input
            className="userNameInput"
            value={username}
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <p>Password:</p>
          <input
            className="passwordInput"
            value={password}
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br></br>
          <p>Confirm Password:</p>
          <input
            className="passwordInput"
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <br></br>
          {confirmPassword === password ? <button className="submitBtn" type="submit">
            Submit
          </button>:" "}
          <br></br>
          <div id="log-link">
          <Link to="/login" className="registerLink">
            Already have an account? Login here!
          </Link>
          </div>
          <img id="logoDash" src="/Untitled_Artwork 29.png" alt="" />
        </form>
      </div>
    </div>
  );
}

export default Register;
