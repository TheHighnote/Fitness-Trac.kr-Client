import React, { useEffect, useState } from "react";
import { fetchMe } from "../API-Adapter";
import DashButtons from "./DashButtons";

const Dashboard = ({ routines, setRoutines }) => {
  const [users, setUsers] = useState({});

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
    getMe();
  }, []);
  console.log(routines, "ASDFGHJKLKJHGFDSA");
  return (
    <div id="DashWrapper">
      <div id="Dashboard">
        <div>
          <img id="logoDash" src="/Untitled_Artwork 29.png" alt="" />
          <h1>MY DASHBOARD</h1>
          <h3>@{users.username}</h3>
          <div id="dashBoardFeed">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
