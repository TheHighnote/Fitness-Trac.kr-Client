import React from "react";

const RoutineList = ({routines, setRoutines}) => {    

    console.log(routines, "Routines in RoutineList")
    return (
    <div id="allRoutines">
        {routines.length ? routines.map((routine)=> {
            return(
                <div key = {routine.id}>       
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