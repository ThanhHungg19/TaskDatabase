import axios from "axios";

const apiLogin = "http://localhost:3001/auth/login";
const apiRegister = "http://localhost:3001/auth/register";

export const login = async ({ Email, Password }) => {
  try {
    const res = await axios.post(apiLogin, { Email, Password });
    const token = res.data.token;

    if (token) {
      // Store token in local storage
      localStorage.setItem("token", token);
      return { success: true, token }; // Return token on successful login
    }
  } catch (error) {
    console.error("Login failed:", error);
    return { success: false, error: error.response.data }; // Return error message on login failure
  }
};

export const register = async ({
  FirstName,
  LastName,
  Username,
  Email,
  Password,
}) => {
  try {
    const res = await axios.post(apiRegister, {
      FirstName,
      LastName,
      Username,
      Email,
      Password,
    });
    const token = res.data.token;

    if (token) {
      // Store token in local storage
      localStorage.setItem("token", token);
      return { success: true, token }; // Return token on successful registration
    }
  } catch (error) {
    console.log("Register failed:", error);
    return { success: false, error: error.response.data }; // Return error message on registration failure
  }
};
