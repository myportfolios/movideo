import { ACTION_KEY_GET_CURRENT_USER_COLLECTIONS } from "services/constants";

const initialState = {
  usersCollection: []
};
export const saveCurrentUserCollections = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_KEY_GET_CURRENT_USER_COLLECTIONS:
      return {
        ...state,
        usersCollection: action.payload
      };
    default:
      return state;
  }
};
