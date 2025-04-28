import { GET_ERRORS, SET_CURRENT_USER } from "./types";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken"; // Import the setAuthToken function
import { jwtDecode } from "jwt-decode"; // Import jwtDecode to decode the token


//Register User - Register user To the database
export const registerUser = (userData) => async (dispatch) => {
  try {
    const res = await axios.post("/api/users/register", userData);
    return res.data; // 🔄 RETURN SUCCESS
  } catch (err) {
    // const errorPayload = err.response?.data?.errors || { general: "An unexpected error occurred." };
    const errorPayload = err.response.data
    dispatch({
      type: GET_ERRORS,
      payload: errorPayload,
    });
    throw errorPayload; // ⛔ THROW TO BE CAUGHT IN COMPONENT
  }
};

//Login User - Get user token
export const loginUser = (userData) => async (dispatch) => {
  try {
    const res = await axios.post("/api/users/login", userData);
     
    const { token } = res.data; // Extract token from response
    localStorage.setItem("jwttoken", token); // Save token to local storage
    setAuthToken(token); // Set token in axios headers
    const decoded = jwtDecode(token); // Decode token to get user data
    //set current user
    dispatch(setCurrentUser(decoded)); // Dispatch action to set current user


    return res.data; // 🔄 RETURN SUCCESS
  } catch (err) {
    //save to local storage
    const errorPayload = err.response.data
    dispatch({
      type: GET_ERRORS,
      payload: errorPayload,
    });
    throw errorPayload; // ⛔ THROW TO BE CAUGHT IN COMPONENT
  }
};

//Set logged in user
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};
//Logout User
export const logoutUser = () => (dispatch) => {
  // Remove token from local storage
  localStorage.removeItem("token");
  // Remove auth header for future requests
  setAuthToken(false); // Set token to false in axios headers
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({})); // Dispatch action to set current user to empty object
};