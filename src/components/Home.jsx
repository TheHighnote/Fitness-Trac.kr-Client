import React from "react";
import Dashboard from "./Dashboard";

const Home = ({ routines, setRoutines }) => {
  console.log(routines, "Routines in RoutineList");

  return (
    <div id="home-page"> 
      <div id="allRoutines">
      {routines.length ? (
        routines.map((routine) => {
          return (
            <div id="routine-view" key={routine.id}>
              <h2>{routine.name}</h2>
              <li>{routine.goal}</li>
              <li>{routine.creatorId.name}</li>
            </div>
          );
        })
        ) : (
          <div className="loader"></div>
          )}
    </div>
          <Dashboard />
          </div>
  );
};

export default Home;
