import axios from "axios";
import { GET_OSCARS } from "services/constants";

export const getOscarNominations = nominationUrl => async dispatch => {
  const response = await axios.get(nominationUrl);

  dispatch({ type: GET_OSCARS, payload: response });
};
