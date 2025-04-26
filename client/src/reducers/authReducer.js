import isEmpty from "../validation/is-empty";
  
import { SET_CURRENT_USER } from "../actions/types";

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload), // Convert payload to boolean
        user: action.payload // Set user to payload or empty object
      };
    default:
      return state;
  }
}
