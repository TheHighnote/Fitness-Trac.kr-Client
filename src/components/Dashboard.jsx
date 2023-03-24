import React, { useEffect, useState } from "react";
import { deleteRoutines, fetchMe, getRoutinesForUser } from "../API-Adapter";
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
  const handleClickDelete = async (id) => {
    const result = await deleteRoutines(id);

    const filteredData = userRoutine.filter((element) => {
      console.log(element, "!@#$%^&*()");
      if (element.id !== id) {
        return true;
      } else {
        return false;
      }
    });
    setUserRoutine(filteredData);
  };

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
          <h1 id="dashboard-header">DASHBOARD</h1>
          {loggedIn ? <h3>@{users.username}</h3> : <h3></h3>}
          <div id="dashBoardFeed">
            <div id="dashBoardRoutines">
              {loggedIn ? (
                <h1 id="dash-title">My Routines</h1>
              ) : (
                <h1 id="dash-title">Log in to view my Routines</h1>
              )}
              {userRoutine.length ? (
                userRoutine.map((routine) => {
                  console.log(routine);
                  return (
                    <div id="dash-view" key={routine.id}> 
                    {loggedIn ? (
                      <div>
                      <p>{routine.name}</p>
                      <p>{routine.goal}</p> 
                      <p>Public View: {routine.isPublic ? "True" : "False"}</p>
                      </div>
                      ) : (<p></p>)}
                      {routine.id && loggedIn ? (
                        <div>
                          <button
                            className="deleteBtn"
                            onClick={() => {
                              handleClickDelete(routine.id);
                            }}
                          >
                            DELETE
                          </button>
                        </div>
                      ) : null}
                    </div>
                  );
                })
              ) : (
                <div></div>
            
              )}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
