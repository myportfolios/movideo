// A middleware in redux basically is a function that returns  a function which returns another function

/**
 *
 * "dispatch" arg - it's the first argument passed into the first function. it intercepts the action b4
 * it dispatches them to the reducers.
 * "next" arg - it's the argument passed into the second function. It helps handle intances with multiple middlewares
 *
 * "action" - param2 the  action to be dispatched by the dispatch function.It is passed into the third function
 */
export default ({ dispatch }) => next => action => {
  // check to see if the action has a promise on its payload property
  //if it does, then wait for it to resolve
  // if it doesn't, then send the action on to the next middleware
  if (typeof action !== "function") {
    return next(action);
  }
  // wait for the promise to resolve
  // get its response data and then create a new action with the response data and dispatch it
  action.payload.then(function (responseData) {
    const newAction = { ...action, payload: responseData };
    //take all properties passed into the action middleware
    // dispatch the newAction to ensure that it passes through all the middlewares
    // this time it's dispatched as an object and not a function
    dispatch(newAction);
  });
};
