import {
  ACTION_KEY_POST_LOGIN,
  ACTION_KEY_POST_LOGIN_ERROR
} from "services/constants";

const InitialState = {
  authenticated: "",
  errorMessage: {}
};

export const userAuthReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ACTION_KEY_POST_LOGIN:
      return {
        ...state,
        authenticated: action.payload
      };
    case ACTION_KEY_POST_LOGIN_ERROR:
      // console.log(action.payload);
      return {
        ...state,
        errorMessage: action.payload
      };

    default:
      return state;
  }
};
