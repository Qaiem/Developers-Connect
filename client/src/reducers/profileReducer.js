import { GET_PROFILE, PROFILE_LOADING, CLEAR_CURRENT_PROFILE } from "../actions/types";

const initaialState = {
profile: null,
profiles: null,
loading: false,
error: null,
};

export default function profileReducer(state = initaialState, action) {
  switch (action.type) {
    case PROFILE_LOADING:
      return {
        ...state,
        loading: true,
      };
      case GET_PROFILE:
        return {
          ...state,
          profile: action.payload,
          loading: false,
        };
      case CLEAR_CURRENT_PROFILE:
        return {
          ...state,
          profile: null,
        };
    default:
      return state;
  }
}