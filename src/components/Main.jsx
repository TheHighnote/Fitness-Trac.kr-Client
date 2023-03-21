import React, { useEffect, useState } from "react";
import { Navbar, RoutineList, Login } from "./";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getAllPublicRoutines } from "../API-Adapter";

const Main = () => {
  const [routines, setRoutines] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

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
                <RoutineList routines={routines} setRoutines={setRoutines} />
              }
            />
            <Route
              path="/login"
              element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default Main;
