import { GET_VIEWPORT } from "services/constants";

const initialState = {};
export const getViewportReducer = (
  state = initialState,
  action = { type: "", payload: "" }
) => {
  switch (action.type) {
    case GET_VIEWPORT:
      const { payload } = action;
      console.log(payload);
      return {
        payload
      };
    default:
      return state;
  }
};
