import { GET_CINEMA_MOVIES } from "services/constants";
export const atCineaMoviesReducer = (
  state = {},
  action = { type: "", payload: "" }
) => {
  switch (action.type) {
    case GET_CINEMA_MOVIES:
      const data = action.payload.data.results;
      return {
        ...state,
        data
      };
    default:
      return state;
  }
};
