import React, { useEffect, useState } from "react";
import {
  Navbar,
  RoutineList,
  Login,
  Register,
  Home,
  Dashboard,
  SearchBar,
  DashButtons,
} from "./";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getAllPublicRoutines, fetchMe } from "../API-Adapter";

const Main = () => {
  const [routines, setRoutines] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  const retrieveRoutines = async () => {
    const allRoutines = await getAllPublicRoutines();
    setRoutines([...allRoutines]);
  };
  async function getMe() {
    try {
      const response = await fetchMe();
      console.log(response);
      setUsers(response);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    retrieveRoutines();
    getMe();
  }, []);
  console.log(users);
  return (
    <>
      <div id="main">
        <BrowserRouter>
          <Navbar loggedIn={loggedIn} />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  routines={routines}
                  currentUser={currentUser}
                  loggedIn={loggedIn}
                  users={users}
                  setUsers={setUsers}
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
            <Route
              path="/dashboard"
              element={
                <Dashboard
                  routines={routines}
                  currentUser={currentUser}
                  setCurrentUser={setCurrentUser}
                  loggedIn={loggedIn}
                  users={users}
                  setUsers={setUsers}
                />
              }
            />
            <Route
              path="/searchbar"
              element={
                <SearchBar
                  routines={routines}
                  currentUser={currentUser}
                  setCurrentUser={setCurrentUser}
                  loggedIn={loggedIn}
                  users={users}
                  setUsers={setUsers}
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                />
              }
            />
            <Route
              path="/dashbuttons"
              element={
                <DashButtons
                  routines={routines}
                  currentUser={currentUser}
                  setCurrentUser={setCurrentUser}
                  loggedIn={loggedIn}
                  users={users}
                  setUsers={setUsers}
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
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
