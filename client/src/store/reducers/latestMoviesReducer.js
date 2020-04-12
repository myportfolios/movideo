import { GET_LATEST_MOVIES } from "services/constants";

export const LatestMoviesReducer = (state = {}, action = {}) => {
  switch (action.type) {
    case GET_LATEST_MOVIES:
      const payload = action.payload.data.results;
      return {
        ...state,
        payload
      };
    default:
      return state;
  }
};
