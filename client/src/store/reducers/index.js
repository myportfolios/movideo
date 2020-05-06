import { combineReducers } from "redux";
import { LatestMoviesReducer } from "./latestMoviesReducer";
import { getViewportReducer } from "./viewport";
import posterLengthReducer from "./posterSize";

export default combineReducers({
  LatestMoviesReducer,
  viewport: getViewportReducer,
  posterLength: posterLengthReducer
});
