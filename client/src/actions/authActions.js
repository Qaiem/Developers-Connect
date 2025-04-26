import { GET_ERRORS } from "./types";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken"; // Import the setAuthToken function


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

//Logout User
// export const logoutUser = () => (dispatch) => {
//   localStorage.removeItem("token");
//   delete axios.defaults.headers.common["Authorization"];
//   dispatch(setCurrentUser({}));
// };