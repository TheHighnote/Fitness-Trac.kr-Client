import React from "react";
import { Dashboard, DashButtons } from "./";

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
                <ul>{routine.goal}</ul>
                <ul>{routine.creatorId.name}</ul>
              </div>
            );
          })
        ) : (
          <div className="loader"></div>
        )}
      </div>
      <Dashboard />
      <DashButtons />
    </div>
  );
};

export default Home;
