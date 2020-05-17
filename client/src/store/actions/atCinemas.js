import axios from "axios";
import { GET_CINEMA_MOVIES } from "services/constants";
import { API_URL } from "services/api";

export const getMoviesAtCinemas = () => async dispatch => {
  //make api call
  const response = await axios.get(API_URL.atCinemas);

  dispatch({ type: GET_CINEMA_MOVIES, payload: response });
};
