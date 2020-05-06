import { GET_POSTER_LENGTH } from "services/constants";

export const posterLengthAction = posterLength => {
  return {
    type: GET_POSTER_LENGTH,
    payload: posterLength
  };
};
