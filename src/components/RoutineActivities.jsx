import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateRoutines, routinesWithActivity } from "../API-Adapter";

const RoutineActivities = ({
  activities,
  routines,
  setRoutines,
  currentUser,
  setCurrentUser,
  loggedIn,
  users,
  setUsers,
}) => {
  console.log(activities[0])


  return (
    <div id="home-page">
      <div id="allRoutines">
        <h1 id="activity-title">RoutineActivities</h1>
        {routines.length ? (
          routines.map((routine) => {
            return (
              <div id="routine-view" key={routine.id}>
                 {routines.id === activities.routineId ? (
                <h1 id="dash-title">{activities.id}</h1>
              ) : (
                <h1 id="dash-title">not working</h1>
              )}
              </div>
            );
          })
        ) : (
          <div className="loader"></div>
        )}
      </div>
    </div>
  );
};


export default RoutineActivities;
