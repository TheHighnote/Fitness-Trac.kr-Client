import React, { useEffect, useState } from "react";
import { Dashboard, DashButtons } from "./";
import { Link } from "react-router-dom";

const Home = ({
  activities,
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
        <h1 id="activity-title">Routines</h1>
        {routines.length ? (
          routines.map((routine) => {
            return (
              <Link to="/activitylist" id="routine-view" key={routine.id}>
                <h2>{routine.name}</h2>
                <p>{routine.goal}</p>
                <p>@{routine.creatorName}</p>
                <p>Post #{routine.id}</p>
              </Link>
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
        activities={activities}
      />
      <DashButtons />
    </div>
  );
};

export default Home;
