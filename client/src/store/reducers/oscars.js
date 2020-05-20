import { GET_OSCARS } from "services/constants";

export const oscarsNominationReducer = (
  state = {},
  action = { type: "", payload: "" }
) => {
  switch (action.type) {
    case GET_OSCARS:
      const { items } = action.payload.data;
      return {
        ...state,
        items
      };
    default:
      return state;
  }
};
