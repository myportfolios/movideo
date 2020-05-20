import { combineReducers } from "redux";
import { LatestMoviesReducer } from "./latestMoviesReducer";
import { getViewportReducer } from "./viewport";
import posterLengthReducer from "./posterSize";
import { atCineaMoviesReducer } from "./atCinemas";
import { oscarsNominationReducer } from "./oscars";

export default combineReducers({
  LatestMoviesReducer,
  viewport: getViewportReducer,
  posterLength: posterLengthReducer,
  atCinemaMovies: atCineaMoviesReducer,
  oscarNominations: oscarsNominationReducer
});
