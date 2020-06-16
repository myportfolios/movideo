import axios from "axios";
import {
  ACTION_KEY_POST_LOGIN,
  ACTION_KEY_POST_LOGIN_ERROR,
  ACTION_KEY_POST_REGISTER,
  ACTION_KEY_POST_REGISTER_ERROR,
  CLEAR_REGISTER_INPUT_FIELDS,
  SIGN_OUT_USER
} from "services/constants";
import { API_URL } from "services/api";
import { renameKeys } from "utilities/utils";

// export const loginUserAction = (userDetailsObj, callBack) => async dispatch => {
//   const response = await axios.post(API_URL.POST_LOGIN, userDetailsObj);

//   dispatch({ type: ACTION_KEY_POST_LOGIN, payload: response.data.token });
//   callBack();
// };

// buba@gmail.com
// 303030

// export const loginUserAction = (userDetailsObj, callBack) => async dispatch => {
//   await axios
//     .post(API_URL.POST_LOGIN, userDetailsObj)
//     .then(
//       res => dispatch({ type: ACTION_KEY_POST_LOGIN, payload: res.data.token })
//       // callBack()
//     )
//     .catch(err => console.log(err.response.data));
// };

export const loginUserAction = (userDetailsObj, callBack) => async dispatch => {
  console.log(userDetailsObj);
  await axios
    .post(API_URL.POST_LOGIN, userDetailsObj)
    .then(res => {
      if (res) {
        dispatch({
          type: ACTION_KEY_POST_LOGIN,
          payload: res.data.token,
          userAction: userDetailsObj.cardId
        });
        localStorage.setItem("token", res.data.token);
        callBack();
      }
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
  console.log(newPayload);
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

export const clearRegistrationFields = () => {
  return {
    type: CLEAR_REGISTER_INPUT_FIELDS,
    payload: {
      name: "",
      email: "",
      password: ""
    }
  };
};
//uset setInterval and clearInterval
