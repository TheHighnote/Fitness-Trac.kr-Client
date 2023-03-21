const URL = "https://fitnesstracker-p0or.onrender.com/api";

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

