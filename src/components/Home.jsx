import React, { useEffect, useState } from "react";
import { Dashboard, DashButtons } from "./";

const Home = ({
  routines,
  setRoutines,
  currentUser,
  setCurrentUser,
  loggedIn,
  users,
  setUsers,
}) => {
  return (
    <div id="home-page">
      <div id="allRoutines">
        {routines.length ? (
          routines.map((routine) => {
            return (
              <div id="routine-view" key={routine.id}>
                <h2>{routine.name}</h2>
                <ul>{routine.goal}</ul>
                <ul>{routine.creatorId}</ul>
              </div>
            );
          })
        ) : (
          <div className="loader"></div>
        )}
      </div>
      <Dashboard
        routines={routines}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        loggedIn={loggedIn}
        users={users}
        setUsers={setUsers}
      />
      <DashButtons />
    </div>
  );
};

export default Home;
