import axios from "axios";

const setAuthToken = (token) => {
  if (token) {
    // Apply to every request
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    // Delete auth header
    delete axios.defaults.headers.common["Authorization"];
  }
};
export default setAuthToken;
// This function sets the Authorization header for all axios requests.