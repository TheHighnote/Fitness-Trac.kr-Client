import React, { useEffect, useState } from "react";
import { Navbar, RoutineList, Login, Register, Home } from "./";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getAllPublicRoutines } from "../API-Adapter";

const Main = () => {
  const [routines, setRoutines] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const retrieveRoutines = async () => {
    const allRoutines = await getAllPublicRoutines();
    console.log(allRoutines, "allRoutines");
    setRoutines([...allRoutines]);
    console.log("!!!!", routines);
  };

  useEffect(() => {
    retrieveRoutines();
    console.log("useEffex rooteens", routines);
  }, []);

  return (
    <>
      <div id="main">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  routines={routines}
                  currentUser={currentUser}
                  loggedIn={loggedIn}
                />
              }
            />
            <Route
              path="/routinelist"
              element={
                <RoutineList routines={routines} setRoutines={setRoutines} />
              }
            />
            <Route
              path="/login"
              element={
                <Login
                  setCurrentUser={setCurrentUser}
                  loggedIn={loggedIn}
                  setLoggedIn={setLoggedIn}
                />
              }
            />
            <Route
              path="/register"
              element={
                <Register
                  setCurrentUser={setCurrentUser}
                  loggedIn={loggedIn}
                  setLoggedIn={setLoggedIn}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default Main;
