import React from "react";

const Home = ({ routines, setRoutines }) => {
  console.log(routines, "Routines in RoutineList");
  return (
    <div id="allRoutines">
      {routines.length ? (
        routines.map((routine) => {
          return (
            <div id="routine-view" key={routine.id}>
              <h2>"HELLO WORLD</h2>
              <li>{routine.goal}</li>
              <li>{routine.creatorId.name}</li>
            </div>
          );
        })
      ) : (
        <div className="loader"></div>
      )}
    </div>
  );
};

export default Home;
