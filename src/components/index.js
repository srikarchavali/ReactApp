//  Handles Signup details of user
export const fetchRequest = async (setUser, username, email, password) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({
                username: username,
                email: email,
                password: password
            })
        })
        const data = await response.json();
        console.log(data)
        setUser(data)
    } catch (error) {
        console.log(error)
    }
}

// Handles login details of user
export const loginUser = async (setUser, email, password) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
          email: email,
          password: password
      })
    });
    const data = await response.json();
    setUser(data)
    console.log(data);
    return data.value;
  } catch (error) {
    console.log(error);
  }
};