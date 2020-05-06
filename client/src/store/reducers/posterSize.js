import { GET_POSTER_LENGTH } from "services/constants";

const posterLengthReducer = (
  state = {},
  action = { type: "", payload: "" }
) => {
  switch (action.type) {
    case GET_POSTER_LENGTH:
      return {
        ...state,
        length: action.payload
      };
    default:
      return state;
  }
};
export default posterLengthReducer;
