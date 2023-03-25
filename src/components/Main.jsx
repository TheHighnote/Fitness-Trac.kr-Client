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
  CreateRoutine,
  ActivityList,
  CreateActivity,
  EditRoutine,
  RoutineActivities,
} from "./";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  getAllPublicRoutines,
  fetchMe,
  getAllActivities,
} from "../API-Adapter";

const Main = () => {
  const [routines, setRoutines] = useState([]);
  const [activities, setActivities] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  const retrieveRoutines = async () => {
    const allRoutines = await getAllPublicRoutines();
    setRoutines(allRoutines);
  };

  const retrieveActivities = async () => {
    const allActivities = await getAllActivities();
    setActivities(allActivities);
  };
  async function getMe() {
    //only want getMe to run if token is present
    const token = localStorage.getItem("token");
    try {
      if (token) {
        const response = await fetchMe(token);
        setUsers(response);
      } else {
        setUsers({});
      }
    } catch (err) {
      console.error(err);
    }
  }
  useEffect(() => {
    if (loggedIn) {
      getMe();
    }
  }, [loggedIn]);
  useEffect(() => {
    retrieveRoutines();
    retrieveActivities();
  }, []);
  return (
    <>
      <div id="main">
        <BrowserRouter>
          <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  routines={routines}
                  currentUser={currentUser}
                  setCurrentUser={setCurrentUser}
                  loggedIn={loggedIn}
                  users={users}
                  setUsers={setUsers}
                  activities={activities}
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
              path="/activitylist"
              element={
                <ActivityList
                  activities={activities}
                  setActivities={setActivities}
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
            <Route
              path="/createroutine"
              element={
                <CreateRoutine
                  routines={routines}
                  setRoutines={setRoutines}
                  currentUser={currentUser}
                  setCurrentUser={setCurrentUser}
                  loggedIn={loggedIn}
                  users={users}
                  setUsers={setUsers}
                />
              }
            />
            <Route
              path="/:routineId/editroutine"
              element={
                <EditRoutine
                  routines={routines}
                  setRoutines={setRoutines}
                  currentUser={currentUser}
                  setCurrentUser={setCurrentUser}
                  loggedIn={loggedIn}
                  users={users}
                  setUsers={setUsers}
                />
              }
            />
            <Route
              path="/createactivity"
              element={
                <CreateActivity
                  activities={activities}
                  setActivities={setActivities}
                  currentUser={currentUser}
                  setCurrentUser={setCurrentUser}
                  loggedIn={loggedIn}
                  users={users}
                  setUsers={setUsers}
                />
              }
            />
            <Route
              path="/routineactivities"
              element={
                <RoutineActivities
                  routines={routines}
                  setRoutines={setRoutines}
                  activities={activities}
                  setActivities={setActivities}
                  currentUser={currentUser}
                  setCurrentUser={setCurrentUser}
                  loggedIn={loggedIn}
                  users={users}
                  setUsers={setUsers}
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
