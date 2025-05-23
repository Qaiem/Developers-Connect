import { GET_ERRORS } from "../actions/types";

const initialState = {};
  
  export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ERRORS:
            return action.payload; // Return the error payload to the state
      default:
        return state;
    }
  }
  