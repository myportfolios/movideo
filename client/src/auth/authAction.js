import axios from "axios";
import {
  ACTION_KEY_POST_LOGIN,
  ACTION_KEY_POST_LOGIN_ERROR,
  ACTION_KEY_POST_REGISTER,
  ACTION_KEY_POST_REGISTER_ERROR,
  SIGN_OUT_USER
} from "services/constants";
import { API_URL } from "services/api";
import { renameKeys, setAuthToken } from "utilities/utils";
import jwt_decode from "jwt-decode";

export const loginUserAction = (userDetailsObj, callBack) => async dispatch => {
  await axios
    .post(API_URL.POST_LOGIN, userDetailsObj)
    .then(res => {
      //save to local storage
      const { token } = res.data;
      //set token to local storage
      localStorage.setItem("token", token);
      //set token to Auth header
      setAuthToken(token);
      //use jwt-decode to decode token and extract user data from token
      const decoded = jwt_decode(token);

      //set current user
      dispatch(setCurrentUser(decoded));
      // navigate to my-collections page using the callBack
      callBack();
    })
    .catch(err =>
      dispatch({
        type: ACTION_KEY_POST_LOGIN_ERROR,
        payload: err.response.data
      })
    );
};
export const signOutUser = () => {
  localStorage.clear("token");
  return {
    type: SIGN_OUT_USER,
    payload: ""
  };
};

export const registerUserAction = userDetailsObj => async dispatch => {
  let newPayload = renameKeys(userDetailsObj, {
    "password re-type": "password2"
  });
  await axios
    .post(API_URL.POST_REGISTER, newPayload)
    .then(res => {
      if (res) {
        dispatch({
          type: ACTION_KEY_POST_REGISTER,
          payload: "Success!",
          userAction: newPayload.cardId
        });
      }
    })
    .catch(err =>
      dispatch({
        type: ACTION_KEY_POST_REGISTER_ERROR,
        payload: err.response.data
      })
    );
};

//set logged in user
export const setCurrentUser = decoded => {
  return {
    type: ACTION_KEY_POST_LOGIN,
    payload: decoded
  };
};
