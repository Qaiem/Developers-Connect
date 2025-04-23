// reducers/authReducer.js
import { TEST_DISPATCH } from "../actions/types";

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case TEST_DISPATCH:
      return {
        ...state,
        isAuthenticated: true, // set to true on successful registration/login
        user: action.payload     // this should be a user object, not just a message
      };
    default:
      return state;
  }
}
