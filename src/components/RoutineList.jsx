import React from "react";

const RoutineList = ({routines, setRoutines}) => {    

    return (
    <div id="allRoutines">
        {routines.length ? routines.map((routine)=> {
            return(
                <div id="routine-view" key = {routine.id}>       
                    <h2>{routine.name}</h2>
                    <li>{routine.goal}</li>
                    <li>{routine.creatorId}</li>
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