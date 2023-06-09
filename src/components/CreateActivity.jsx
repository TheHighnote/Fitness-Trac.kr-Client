import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createActivity } from "../API-Adapter";

const CreateActivity = (props) => {
  const [newName, setNewName] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const navigate = useNavigate();

  const activities = props.activities;
  const setActivities = props.setActivities;
  const loggedIn = props.loggedIn;
  const currentUser = localStorage.getItem("currentUser");

  const handleClick = async (event) => {
    if (loggedIn && currentUser) {
      event.preventDefault();
      const result = await createActivity(newName, newDescription);
      const activitiesCopy = [...activities];
      activitiesCopy.push(result);
      setActivities(activitiesCopy);
      navigate("/activitylist");
    } else {
      alert("MUST BE LOGGED IN TO PERFORM THIS ACTION");
    }
  };

  return (
    <div id="newActivityFormBox">
      <div id="newActivityFormFull">
        <form onSubmit={handleClick}>
          <div className="newPostLabelText">
            <h3>CREATE AN ACTIVITY</h3>
            <label>
              <p>Name:</p>
              <input
                className="newPostInput"
                name="title"
                type="text"
                value={newName}
                onChange={(event) => {
                  setNewName(event.target.value);
                }}
              />
            </label>
          </div>
          <div className="newPostLabelText">
            <label>
              <p>Description:</p>
              <input
                className="newPostInput"
                name="Description"
                type="text"
                value={newDescription}
                onChange={(event) => {
                  setNewDescription(event.target.value);
                }}
              />
            </label>
          </div>
          <div>
            <button className="submitBtn2" type="submit">
              POST
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateActivity;
