import { GET_VIEWPORT } from "services/constants";

const getViewPortAction = viewport => {
  return {
    type: GET_VIEWPORT,
    payload: viewport
  };
};
export default getViewPortAction;
