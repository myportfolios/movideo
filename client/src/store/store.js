import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
// import async from "middlewares/async";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialState = {};
const middleware = [thunk];
const store = createStore(
  rootReducer, // consist of all the reducers
  initialState, // could be an empty object as declated above
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
/*The script below will save all data in Redux Store btw page refreshes */
//localhost:3000?debug_session=<some_string>
