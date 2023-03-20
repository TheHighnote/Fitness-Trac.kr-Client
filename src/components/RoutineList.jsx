import React from "react";

const RoutineList = (props) => {
    const routines = props.routine
    const setRoutines = props.setRoutine
    const idx = props.idx
    

    console.log(routines, "****")
    return (
    <div id="allRoutines">
        {routines.length ? routines.map((routine, idx)=> {
            return(
                <div key = {idx}>       
                    <h2>{routine.name}</h2>
                    <li>{routine.goal}</li>
                    <li>{routine.creatorId.name}</li>
                </div>
            )
        }
        )
        : <div className="loader"></div>
    }
        </div>
        )
}


export default RoutineList;