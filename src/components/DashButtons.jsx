import React from "react";
import { Link } from "react-router-dom";

const DashButtons = ({ routines, setRoutines }) => {
  console.log(routines, "Routines in RoutineList");
  return (
    <div id="dashButtonWrapper">
      <div id="dashboardButtons">
        <Link to="/createroutine"><button className="material-symbols-outlined">post_add</button></Link>
        <Link to="/activitylist"><button className="material-symbols-outlined">fitness_center</button></Link>
        <Link to="/createactivity"><button className="material-symbols-outlined">update</button></Link>
        <button className="material-symbols-outlined">logout</button>
        <img id="logoSideBar" src="/Untitled_Artwork 30.png" alt="" />
      </div>
    </div>
  );
};

export default DashButtons;
