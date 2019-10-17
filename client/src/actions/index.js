import axios from "axios";
import { AUTH_USER, AUTH_ERROR } from "./types";

// export const signup = ({ email, password }) => dispatch => {
//   axios.post("http://localhost:3090/register", {
//     email: email,
//     password: password
//   });
// };
// same as the bottom code

export const register = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post(
      "http://localhost:3090/register",
      formProps
    );

    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem("token", response.data.token);
    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: "Email in use" });
  }
};

export const login = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post(
      "http://localhost:3090/login",
      formProps
    );

    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem("token", response.data.token);
    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: "Invalid login credentials" });
  }
};

export const signout = () => {
  localStorage.removeItem("token");

  return {
    type: AUTH_USER,
    payload: ""
  };
};
