import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createActivity } from "../API-Adapter";

const CreateActivity = (props) => {
  const [newName, setNewName] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const activities = props.activities;
  const setActivities = props.setActivities;

  const handleClick = async (event) => {
    event.preventDefault();
    const result = await createActivity(newName, description);
    const activitiesCopy = [...activities];
    console.log(result, "createActivities");
    activitiesCopy.push(result);
    setActivities(activitiesCopy);
    navigate("/activitylist");
  };

  return (
    <div id="newActivityFormBox">
      <div id="newActivityFormFull">
        <form onSubmit={handleClick}>
          <div className="newPostLabelText">
            <h3>CREATE A NEW ACTIVITY</h3>
            <label>
              Name:
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
              Goal:
              <input
                className="newPostInput"
                name="Description"
                type="text"
                value={description}
                onChange={(event) => {
                  console.log(event.target.value);
                  setDescription(event.target.value);
                }}
              />
            </label>
          </div>
          <div>
            <button className="newPostBtn" type="submit">
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