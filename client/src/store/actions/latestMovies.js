import { GET_LATEST_MOVIES } from "services/constants";
import axios from "axios";
//using redux-thunk enables us to return a function instead of an action object
//when the action is called, the dispatch  method takes the action and passes it to our middleware(s) instead of directly
// to our reducers.
// we can stop or modify the action in the returned function

//with redux-thunk, the function waits till the  api call is completed and a value is received instead of a promise
//it then calls the dispatch method with a new action with the same "TYPE" and the response from our call
//becomes the payload

export const fetchLatestMovies = latestMoviesUrl => async dispatch => {
  const response = await axios.get(latestMoviesUrl);

  dispatch({ type: GET_LATEST_MOVIES, payload: response });
};
