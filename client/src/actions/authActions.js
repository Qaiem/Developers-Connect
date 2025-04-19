import { TEST_DISPATCH } from "./types";
import axios from "axios";

export const registerUser = (userData) => async (dispatch) => {
  try {
    const res = await axios.post("/api/users/register", userData);

    dispatch({
      type: TEST_DISPATCH,
      payload: res.data.message, // or user info depending on your API
    });
  } catch (err) {
    dispatch({
      type: "GET_ERRORS", // or whatever your error type is
      payload: err.response?.data?.errors || { general: "An unexpected error occurred." },
    });
  }
};
