import React, { useEffect, useState } from "react";
import { Navbar, RoutineList } from "./";
import { getAllPublicRoutines } from "../API-Adapter";

const Main = () => {
    const [routines, setRoutines] = useState([])
    
    
    const retrieveRoutines = async () => {
        const allRoutines = await getAllPublicRoutines()
        console.log(allRoutines, "allRoutines")
        setRoutines([...allRoutines])
        console.log("!!!!", routines)
    }

    
    useEffect(()=> {
        retrieveRoutines();
        console.log("useEffex rooteens", routines)
    }, [])
    
    return(
        <div id="main">
            <Navbar />
            <RoutineList routines = {routines} setRoutines = {setRoutines}/> 
        </div>
    )
}

export default Main