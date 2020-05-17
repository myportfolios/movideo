import { combineReducers } from "redux";
import { LatestMoviesReducer } from "./latestMoviesReducer";
import { getViewportReducer } from "./viewport";
import posterLengthReducer from "./posterSize";
import { atCineaMoviesReducer } from "./atCinemas";

export default combineReducers({
  LatestMoviesReducer,
  viewport: getViewportReducer,
  posterLength: posterLengthReducer,
  atCinemaMovies: atCineaMoviesReducer
});
