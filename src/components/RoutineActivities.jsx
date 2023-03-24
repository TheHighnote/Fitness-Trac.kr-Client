import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateRoutines, routinesWithActivity } from "../API-Adapter";

const RoutineActivities = ({routines, setRoutines, activities, setActivities}) => {    

  async function routinesWithAnActivity() {
    try {
      const response = await routinesWithActivity(activities.id);
      setActivities(response);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
      routinesWithAnActivity();
  }, [activities]);
  return (
  <div id="allRoutines">
      {routines.length ? routines.map((routine)=> {
        console.log(routine)
          return(
              <div id="routine-view" key = {routine.id}>       
                  <h2>{routine.name}</h2>
                  <li>{routine.goal}</li>
                  <li>{routine.routineActivityId}</li>
              </div>
          )
      }
      )
      : <div className="loader"></div>
  }
      </div>
      )
}

export default RoutineActivities;
