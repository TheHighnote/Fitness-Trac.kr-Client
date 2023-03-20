const URL = "https://fitnesstracker-p0or.onrender.com"

export const getAllPublicRoutines = async () => {
    try {
        const response = await fetch (`${URL}/api/routines`,{
            headers: {
                "Content-Type": "application/json",
            },
        });
        const result = await response.json();
        const routineArr = result.routines;
        return routineArr;    
    } catch (error) {
        console.error(error)
    }
};