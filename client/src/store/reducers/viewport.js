import { GET_VIEWPORT } from "services/constants";

const initialState = {};
export const getViewportReducer = (
  state = initialState,
  action = { type: "", payload: "" }
) => {
  switch (action.type) {
    case GET_VIEWPORT:
      const { viewportWidth, viewportHeight } = action.payload;

      return {
        viewportWidth,
        viewportHeight
      };
    default:
      return state;
  }
};
