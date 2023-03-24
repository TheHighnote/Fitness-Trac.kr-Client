import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateRoutines } from "../API-Adapter";

const EditRoutine = (props) => {
console.log(props, "EDIT ROUTINE PROPS")
  const [updatedName, setUpdatedName] = useState("");
  const [updatedGoal, setUpdatedGoal] = useState("");
  const routines = props.routines;
  const routineToken = localStorage.getItem("token");
  console.log("ROUTINE TOKEN",routineToken)
  const navigate = useNavigate();
  const {routineId} = useParams();

  const loggedIn = props.loggedIn;
  const currentUser = localStorage.getItem("currentUser");

  const handleClick = async (event) => {
    console.log("testing string")
    if (loggedIn && currentUser) {
      event.preventDefault();
      const result = await updateRoutines(updatedName, updatedGoal, routineId, routineToken);
      console.log(result, "RESULT")
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
            <button onSubmit={handleClick} className="submitBtn" type="submit">
              SAVE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditRoutine;
