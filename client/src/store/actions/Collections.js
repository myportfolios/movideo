import { ACTION_KEY_GET_CURRENT_USER_COLLECTIONS } from "services/constants";

export const getCurrentUserCollections = payload => {
  return {
    type: ACTION_KEY_GET_CURRENT_USER_COLLECTIONS,
    payload
  };
};
