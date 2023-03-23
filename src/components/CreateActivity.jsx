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
      console.log(result, "createActivities");
      activitiesCopy.push(result);
      setActivities(activitiesCopy);
      navigate("/activitylist");
    } else {
      alert("NEED TO BE LOGGED IN");
    }
  };

  return (
    <div id="newActivityFormBox">
      <div id="newActivityFormFull">
        <form onSubmit={handleClick}>
          <div className="newPostLabelText">
            <h3>CREATE A NEW ACTIVITY</h3>
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
                name="Description"
                type="text"
                value={newDescription}
                onChange={(event) => {
                  console.log(event.target.value);
                  setNewDescription(event.target.value);
                }}
              />
            </label>
          </div>
          <div>
            <button className="submitBtn" type="submit">
              POST
            </button>
          </div>
          <img id="logoDash" src="/Untitled_Artwork 29.png" />
        </form>
      </div>
    </div>
  );
};

export default CreateActivity;
