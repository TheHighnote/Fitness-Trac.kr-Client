const URL = "https://fitnesstracker-p0or.onrender.com/api";

//User Endpoints

export const loginUser = async (username, password) => {
  try {
    console.log(`${URL}/users/login`);
    const response = await fetch(`${URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};
export const registerUser = async (username, password) => {
  try {
    const response = await fetch(`${URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};
export const fetchMe = async () => {
    try {
      const response = await fetch(`${URL}/users/me`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  }
  export const getRoutinesForUser = async (user) => {

    try {
      const response = await fetch(`${URL}/users/${user}/routines`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
        console.error(err);
    }
}
//Activity Endpoints  

export const getAllActivities = async () => {
    try {
      const response = await fetch(`${URL}/activities`, {
        headers: {
          "Content-Type": "application/json",  
        },  
      });  
      const result = await response.json();
      const postArray = result.posts;
  
      return postArray;
    } catch (error) {
      console.error(error);  
    }  
  };  

  export const createActivity = async (name, description) => {
    try {
      const response = await fetch(`${URL}/activities`, {
        method: "POST",  
        headers: {
          'Content-Type': 'application/json',  
        },  
        body: JSON.stringify({
          name: name,  
          description: description
        })   
      });  
  
      const result = await response.json();
  
      console.log(result);
      return result
    } catch (err) {
      console.error(err);  
    }  
  }  

  export const updateActivity = async (name, description) => {
    try {
      const response = await fetch(`${URL}/activities`, {
        headers: {
        'Content-Type': 'application/json',    
        'Authorization': `Bearer ${token}`
        },
        method: "PATCH",
        body: JSON.stringify({
          name: name,  
          description: description
        })  
      });  
  
        const result = await response.json();
        console.log(result);
        return result
      } catch (err) {
      console.error(err);    
      }
  }    

  export const routinesWithActivity = async (id) => {
    try {
      const response = await fetch(`${URL}/activities/${id}/routines`, {
        headers: {
          'Content-Type': 'application/json',  
        },  
      });  
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);  
    }  
  }  

//Routine Endpoints

export const getAllPublicRoutines = async () => {
    try {
        const response = await fetch(`${URL}/routines`, {
            headers: {
                "Content-Type": "application/json",
            },    
        });    
        const result = await response.json();
        console.log(result, "API routines result");
        return result;
    } catch (error) {
        console.error(error);
    }    
};    
export const createRoutine = async (name, goal, isPublic) => {
    try {
      const response = await fetch(`${URL}/routines`, {
        method: "POST",  
        headers: {
        'Content-Type': 'application/json',    
        'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          name: name,  
          goal: goal,
          isPublic: isPublic
        })  
      });  
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);  
    }  
  }  

  export const updateRoutines = async (name, goal, id) => {
    try {
      const response = await fetch(`${URL}/routines/${id}`, {
        method: "PATCH",  
        headers: {
        'Content-Type': 'application/json',    
        'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          name: name,  
          goal: goal
        })  
      });  
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);  
    }  
  }  

  export const deleteRoutines = async (id) => {
    try {
      const response = await fetch(`${URL}/routines/${id}`, {
        method: "DELETE",  
        headers: {
        'Content-Type': 'application/json',    
        'Authorization': `Bearer ${token}`
        },
      });  
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);  
    }  
}    

export const addActivityToRoutine = async (activityId, count, duration, id) => {
    try {
      const response = await fetch(`${URL}/routines/${id}/activities`, {
        method: "POST",  
        headers: {
        'Content-Type': 'application/json',    
        },
        body: JSON.stringify({
          activityId: activityId,  
          count: count, 
          duration: duration
        })  
      });  
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);  
    }  
  }  

//Routine Activity Endpoints

export const updateRoutineActivity = async (count, duration, id) => {
    try {
      const response = await fetch(`${URL}/routine_activities/${id}`, {
        method: "PATCH",
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          count: count,
          duration: duration
        })
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  }

  export const deleteRoutineActivity = async (id) => {
    try {
      const response = await fetch(`${URL}/routine_activities/${id}`, {
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
        },
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  }
  
