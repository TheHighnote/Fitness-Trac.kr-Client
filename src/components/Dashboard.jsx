import React, { useEffect, useState } from "react";
import { fetchMe, getRoutinesForUser } from "../API-Adapter";
import DashButtons from "./DashButtons";

const Dashboard = ({ routines, setRoutines, loggedIn }) => {
  const [users, setUsers] = useState({});
  const [userRoutine, setUserRoutine] = useState([]);

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

  async function routineForUser() {
    try {
      const response = await getRoutinesForUser(users.username);
      setUserRoutine(response);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getMe();
  }, [loggedIn]);
  useEffect(() => {
    routineForUser();
  }, [users]);
  console.log(userRoutine, "!!!!!!!!!!!!!!!!!!!!!!!!!!");
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
              {userRoutine.length ? (
                userRoutine.map((routine) => {
                  console.log(routine);
                  return (
                    <div id="dash-view" key={routine.id}>
                      <p>{routine.name}</p>
                      <p>{routine.goal}</p>
                      <p>Public View: {routine.isPublic ? "True" : "False"}</p>
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
