const URL = "https://fitnesstracker-p0or.onrender.com";

export const getAllPublicRoutines = async () => {
  try {
    const response = await fetch(`${URL}/api/routines`, {
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
export const loginUser = async (username, password) => {
  try {
    console.log(`${URL}/users/login`);
    const response = await fetch(`${URL}/api/users/login`, {
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
