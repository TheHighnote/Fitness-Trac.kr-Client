import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createRoutine } from "../API-Adapter";
import CreateActivity from "./CreateActivity";

const CreateRoutine = (props) => {
  const [newName, setNewName] = useState("");
  const [newGoal, setNewGoal] = useState("");
  const [isPublic, setIsPublic] = useState(false);
  const navigate = useNavigate();

  const routines = props.routines;
  const setRoutines = props.setRoutines;

  const handleClick = async (event) => {
    event.preventDefault();
    const result = await createRoutine(newName, newGoal, isPublic);
    const routinesCopy = [...routines];
    routinesCopy.push(result);
    setRoutines(routinesCopy);
    navigate("/");
  };

  return (
    <div id="newRoutineFormBox">
      <div id="newRoutineFormFull">
        <form onSubmit={handleClick}>
          <div className="newPostLabelText">
            <h3>CREATE A NEW ROUTINE</h3>
            <label>
              <p>Name:</p>
              <input
                className="newPostInput"
                name="title"
                type="text"
                value={newName}
                onChange={(event) => {
                  console.log(event.target.value);
                  setNewName(event.target.value);
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
                value={newGoal}
                onChange={(event) => {
                  console.log(event.target.value);
                  setNewGoal(event.target.value);
                }}
              />
            </label>
          </div>
          <div className="newPostLabelText">
            <label>
              Make Your Routine Public?
              <input
                type="checkbox"
                checked={isPublic}
                onChange={(e) => setIsPublic(e.target.checked)}
              />
            </label>
          </div>
          <div>
            <button className="submitBtn" type="submit">
              POST
            </button>
          </div>
        </form>
      </div>
      <CreateActivity />
    </div>
  );
};

export default CreateRoutine;
