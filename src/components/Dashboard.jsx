import React, { useEffect, useState } from "react";
import { fetchMe, getRoutinesForUser } from "../API-Adapter";
import DashButtons from "./DashButtons";

const Dashboard = ({ routines, setRoutines }) => {
  const [users, setUsers] = useState({});
  const [userRoutine, setUserRoutine] = useState({});

  async function getMe() {
    try {
      const response = await fetchMe();
      setUsers(response);
    } catch (err) {
      console.error(err);
    }
  }

  async function routineForUser() {
    try {
      const response = await getRoutinesForUser();
      setUserRoutine(response);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getMe();
    routineForUser();
  }, []);
  console.log(routines, "!!!!!!!!!!!!!!!!!!!!!!!!!!");
  console.log(routines.goal, "@@@@@@@@@@@");
  return (
    <div id="DashWrapper">
      <div id="Dashboard">
        <div>
          <img id="logoDash" src="/Untitled_Artwork 29.png" alt="" />
          <h1>MY DASHBOARD</h1>
          <h3>@{users.username}</h3>
          <div id="dashBoardFeed">
            <div id="dashBoardRoutines">
              <h1 id="activity-title">My Routines</h1>
              {routines.length ? (
                routines.map((routine) => {
                  return (
                    <div id="dash-view" key={routine.id}>
                      <h2>{userRoutine.name}</h2>
                      <ul>{userRoutine.goal}</ul>
                      <ul>{userRoutine.creatorName}</ul>
                    </div>
                  );
                })
              ) : (
                <div className="loader"></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
