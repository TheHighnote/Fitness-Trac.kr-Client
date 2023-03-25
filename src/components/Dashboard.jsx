import React, { useEffect, useState } from "react";
import { deleteRoutines, fetchMe, getRoutinesForUser } from "../API-Adapter";
import { Link } from "react-router-dom";
import DashButtons from "./DashButtons";

const Dashboard = ({ routines, setRoutines, loggedIn, users, activities }) => {
  // const [users, setUsers] = useState({});
  const [userRoutine, setUserRoutine] = useState([]);

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
      if (element.id !== id) {
        return true;
      } else {
        return false;
      }
    });
    setUserRoutine(filteredData);
  };

  useEffect(() => {
    if (users && users.id) {
      routineForUser();
    }
  }, [users]);
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
                  return (
                    <div id="dash-view" key={routine.id}>
                      {loggedIn ? (
                        <div>
                          <p>{routine.name}</p>
                          <p>{routine.goal}</p>
                          <p>
                            Public View: {routine.isPublic ? "True" : "False"}
                          </p>
                          <select>

                            {
                              activities && activities.length ? 
                              activities.map((e, idx) => {
                                return (
                                  <option value={e.id}>{e.name}</option>
                                )
                              })
                              : null
                            }
                          </select>
                        </div>
                      ) : (
                        <p></p>
                      )}
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
                          <Link to={`${routine.id}/editroutine`}>
                            <button>Edit</button>
                          </Link>
                          <Link to="/routineactivities">
                            <button>activities</button>
                          </Link>
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
