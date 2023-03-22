import React from "react";
import { Link } from "react-router-dom";

const DashButtons = ({ routines, setRoutines }) => {
  console.log(routines, "Routines in RoutineList");
  return (
    <div id="dashButtonWrapper">
      <div id="dashboardButtons">
        <button className="material-symbols-outlined">fitness_center</button>
        <Link to="/createroutine">
          <button className="material-symbols-outlined">post_add</button>
        </Link>
        <button className="material-symbols-outlined">update</button>
        <button className="material-symbols-outlined">logout</button>
        <img id="logoSideBar" src="/Untitled_Artwork 29.png" alt="" />
      </div>
    </div>
  );
};

export default DashButtons;
