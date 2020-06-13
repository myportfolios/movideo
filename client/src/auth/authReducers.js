import {
  ACTION_KEY_POST_LOGIN,
  ACTION_KEY_POST_LOGIN_ERROR,
  ACTION_KEY_POST_REGISTER,
  ACTION_KEY_POST_REGISTER_ERROR
} from "services/constants";

const InitialState = {
  authenticated: "",
  errorMessage: {},
  userAction: ""
};

export const userAuthReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ACTION_KEY_POST_LOGIN:
      return {
        ...state,
        authenticated: action.payload,
        userAction: action.userAction
      };
    case ACTION_KEY_POST_LOGIN_ERROR:
      return {
        ...state,
        errorMessage: action.payload
      };

    default:
      return state;
  }
};

export const userRegistrationReducer = (
  state = { status: "", userAction: "" },
  action
) => {
  switch (action.type) {
    case ACTION_KEY_POST_REGISTER:
      console.log(action.payload);
      return {
        ...state,
        status: action.payload,
        userAction: action.userAction
      };
    case ACTION_KEY_POST_REGISTER_ERROR:
      console.log(action.payload);

      return {
        ...state,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};
