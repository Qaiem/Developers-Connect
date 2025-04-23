import { TEST_DISPATCH } from "./types";
import axios from "axios";

export const registerUser = (userData) => async (dispatch) => {
  try {
    const res = await axios.post("/api/users/register", userData);
    dispatch({
      type: TEST_DISPATCH,
      payload: res.data.user,
    });
    return res.data; // 🔄 RETURN SUCCESS
  } catch (err) {
    const errorPayload = err.response?.data?.errors || { general: "An unexpected error occurred." };
    dispatch({
      type: "GET_ERRORS",
      payload: errorPayload,
    });
    throw errorPayload; // ⛔ THROW TO BE CAUGHT IN COMPONENT
  }
};

