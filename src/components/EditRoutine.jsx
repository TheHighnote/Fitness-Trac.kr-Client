import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateRoutines } from "../API-Adapter";

const EditRoutine = (props) => {
  const [updatedName, setUpdatedName] = useState("");
  const [updatedGoal, setUpdatedGoal] = useState("");
  const navigate = useNavigate();

  const loggedIn = props.loggedIn;
  const currentUser = localStorage.getItem("currentUser");

  const handleClick = async (event) => {
    if (loggedIn && currentUser) {
      event.preventDefault();
      const result = await updateRoutines(updatedName, updatedGoal);
      const updatedRoutinesCopy = [...routines];
      updatedRoutinesCopy.push(result);
      navigate("/");
    } else {
      alert("MUST BE LOGGED IN TO PERFORM THIS ACTION");
    }
  };

  return (
    <div id="newRoutineFormBox">
      <div id="newRoutineFormFull">
        <form onSubmit={handleClick}>
          <div className="newPostLabelText">
            <h3>UPDATE ROUTINE</h3>
            <label>
              <p>Name:</p>
              <input
                className="newPostInput"
                name="title"
                type="text"
                value={updatedName}
                onChange={(event) => {
                  setUpdatedName(event.target.value);
                }}
              />
            </label>
          </div>
          <div className="newPostLabelText">
            <label>
              <p>Goal:</p>
              <input
                className="newPostInput"
                name="Goal"
                type="text"
                value={updatedGoal}
                onChange={(event) => {
                  setUpdatedGoal(event.target.value);
                }}
              />
            </label>
          </div>
          <div>
            <button className="submitBtn" type="submit">
              SAVE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditRoutine;
