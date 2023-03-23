import React from "react";
import { Link, onClick } from "react-router-dom";

// const lightmode = () => {
//   let element = document.body
//   element.classList.toggle("light-mode");
// }
const DashButtons = ({ routines, setRoutines }) => {
  console.log(routines, "Routines in RoutineList");
  return (
    <div id="dashButtonWrapper">
      <div id="dashboardButtons">
        <Link to="/createroutine"><button className="material-symbols-outlined">post_add</button></Link>
        <Link to="/activitylist"><button className="material-symbols-outlined">fitness_center</button></Link>
        <Link to="/createactivity"><button className="material-symbols-outlined">logout</button></Link>
        {/* <button onClick={lightmode()} className="material-symbols-outlined">light_mode</button> */}
        <button className="material-symbols-outlined">light_mode</button>
        <img id="logoSideBar" src="/Untitled_Artwork 30.png" alt="" />
      </div>
    </div>
  );
};

export default DashButtons;
