import axios from "axios";
import { GET_OSCARS } from "services/constants";

export const getOscarNominations = nominationUrl => dispatch => {
  console.log(nominationUrl);
  const response = axios.get(nominationUrl);

  dispatch({ type: GET_OSCARS, payload: response });
};
