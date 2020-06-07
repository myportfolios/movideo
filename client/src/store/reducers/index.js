import { combineReducers } from "redux";
import { LatestMoviesReducer } from "./latestMoviesReducer";
import { getViewportReducer } from "./viewport";
import posterLengthReducer from "./posterSize";
import { atCineaMoviesReducer } from "./atCinemas";
import { oscarsNominationReducer } from "./oscars";
import { userAuthReducer } from "auth/authReducers";

export default combineReducers({
  LatestMoviesReducer,
  viewport: getViewportReducer,
  posterLength: posterLengthReducer,
  atCinemaMovies: atCineaMoviesReducer,
  oscarNominations: oscarsNominationReducer,
  auth: userAuthReducer
});
