import { combineReducers } from "redux";
import { LatestMoviesReducer } from "./latestMoviesReducer";
import { getViewportReducer } from "./viewport";

export default combineReducers({
  LatestMoviesReducer,
  viewport: getViewportReducer
});
