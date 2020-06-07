export default class LoginModel {
  constructor(init = {}) {
    convertToModel(init);
  }
}
const convertToModel = inputObj => {
  this["inputProps"] = inputObj["inputProps"] || {};
  this["btnProps"] = inputObj["btnProps"] || {};
  this["headerProps"] = inputObj["headerProps"] || {};
  this["cardColor"] = inputObj["cardColor"] || "";
  this["id"] = inputObj["id"] || "";
  this["errorObj"] = inputObj["errorObj"] || {};
};
