// get viewport width
//get viewporth height
//divide the viewporth width into 10 equal parts
//divide the viewporth width into 10 equal parts

import { API_URL } from "services/api";
import { OSCARS } from "services/constants";
import axios from "axios";

export const getViewPort = () => {
  let viewport = {
    viewportWidth: null,
    viewportHeight: null
  };
  if (typeof window.innerWidth !== "undefined") {
    viewport.viewportWidth = window.innerWidth;
    viewport.viewportHeight = window.innerHeight;
  }
  return viewport;
};

export function getSizeByViewportWidth(viewportWidth) {
  let posterLength = 10;
  if (viewportWidth < 855) {
    posterLength = 1;
  }
  if (viewportWidth > 855) {
    if (viewportWidth <= 1283) {
      posterLength = 4;
    }
  }
  if (viewportWidth > 1283) {
    if (viewportWidth <= 1709) {
      posterLength = 6;
    }
  }
  if (viewportWidth > 1709) {
    if (viewportWidth <= 2138) {
      posterLength = 8;
    }
  }
  return posterLength;
}

export function getPlaceholdersFromProps(props) {
  // props is a list of input fields we want the card to have
  const placeholderObj = {};
  if (props && !!props.length) {
    for (let item of props) {
      placeholderObj[item] = item;
    }
  }

  return placeholderObj;
}
//check if is undefined
export const notUndefined = arg => {
  if (arg !== undefined || arg !== null || arg !== "null") {
    return arg;
  }
  return;
};
export const getJWT = () => {
  return localStorage.getItem("token");
};

export const makeOscarCalls = yearString => {
  // console.log(yearString);
  // console.log(API_URL.OSCAR_2012);
  // console.log(OSCARS);
  //the event returns the year identifier
  let nominationUrl = "";
  switch (yearString) {
    case OSCARS.NOMINATIONS_2009:
      nominationUrl = API_URL.OCSAR_2009;
      break;
    case OSCARS.NOMINATIONS_2010:
      nominationUrl = API_URL.OSCAR_2010;
      break;
    case OSCARS.NOMINATIONS_2011:
      nominationUrl = API_URL.OSCAR_2011;
      break;
    case OSCARS.NOMINATIONS_2012:
      nominationUrl = API_URL.OSCAR_2012;
      break;
  }
  // console.log(nominationUrl);
  return nominationUrl;
};
/***rename keys in an object */
/**
 *
 * obj  - object with key/keys we want to modify
 * newKeys -  object containing the previous key and the new key
 */
export function renameKeys(obj, newKeys) {
  const keyValues = Object.keys(obj).map(key => {
    const newKey = newKeys[key] || key;
    return { [newKey]: obj[key] };
  });
  return Object.assign({}, ...keyValues);
}

export const setAuthToken = token => {
  if (token) {
    //Apply token to every request
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    //Delete auth header
    delete axios.defaults.headers.common["Authorization"];
  }
};
