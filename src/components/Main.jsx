import React, { useEffect, useState } from "react";
import { RoutineList } from "./";
import { getAllPublicRoutines } from "../API-Adapter";

const Main = () => {
    const [routine, setRoutine] = useState([])
    
    
    const retrieveRoutines = async () => {
        const allRoutines = await getAllPublicRoutines()
        setRoutine(allRoutines)
        console.log("!!!!",routine)
    }

    
    useEffect(()=> {
        retrieveRoutines();
    }, [])
    
    return(
        <div id="main">
            <RoutineList routine = {routine} setRoutine = {setRoutine}/> 
        </div>
    )
}

export default Main