import React from "react";
import { getPlaceholdersFromProps } from "utilities/utils";
import "./card.scss";
import InputText from "common/InputText";
import PropTypes from "prop-types";

export default function Card({
  headerProps,
  inputProps,
  btnProps,
  cardColor,
  handleUserInput,
  action,
  id,
  errorObj
}) {
  //props list
  //1.inputProps - determines the number of text input to be rendered. Also adds placeholders
  //2.btnProps - contains props for the btn
  //3.headerProps - contains the title of the card
  //4.cardColor - card bg color
  //5/ action - event handler function
  //6.id - card id

  const placeholders = getPlaceholdersFromProps(inputProps);
  const placeholdersKey = Object.values(placeholders);

  return (
    <div
      className="Card"
      style={{
        backgroundColor: cardColor
      }}
      id={id}
    >
      <div className="header-grid-item">
        {/**Card Header Title */}
        {renderCardHeader(headerProps)}
      </div>
      <div className="input-box">
        {/**Card inputs  */}
        {renderPlaceholderJSX(placeholdersKey, handleUserInput, errorObj)}
      </div>

      <div className="btn-grid-item">
        {/**Card btn inputs  */}
        {renderBtnHandler(btnProps, action)}
      </div>
    </div>
  );
}

function renderBtnHandler(btnPropsArg, submitAction) {
  return (
    <div
      className="reg-login-btn"
      style={{
        color: btnPropsArg.btnColor,
        backgroundColor: btnPropsArg.btnBgColor
      }}
      onClick={submitAction}
    >
      {btnPropsArg.btnName}
    </div>
  );
}
function renderPlaceholderJSX(arrToMap, handleUserInputArg, errorObj) {
  //get type of error from errorObj keys
  let errorType = errorObj && Object.keys(errorObj).toString();
  let placeholdersJSX = arrToMap.map((item, index) => {
    return (
      <>
        <InputText
          // id={`${item}...`}
          placeholder={`${item}...`}
          key={index}
          handleUserInput={handleUserInputArg}
          name={item.toLowerCase()}
        />

        {item.toLowerCase() === errorType ? (
          <div>{toShowError(arrToMap, errorObj)}</div>
        ) : null}
      </>
    );
  });

  return <>{placeholdersJSX}</>;
}
function renderCardHeader(headerProps) {
  return (
    <h2
      style={{
        color: headerProps.headerColor,
        textAlign: "center"
      }}
    >
      {headerProps.headerTitle}
    </h2>
  );
}
function toShowError(arrayToMap, errorObject) {
  let error;
  for (let ele of arrayToMap) {
    for (let item in errorObject) {
      if (ele.toLowerCase() === item) {
        error = errorObject[item];
      }
    }
  }

  return error;
}

// function mapErrorToInput(inputOptions, errObj) {
//   // const error = inputOptions.map(item => console.log(item))
//   inputOptions.map(item => console.log(item.toLowerCase()));
//   console.log([errObj]);
// }

function mapErrorToInput(inputOptions, errObj) {
  console.log(inputOptions);
  var error;
  for (let x in inputOptions) {
    for (let y in errObj) {
      if (inputOptions[x].toLowerCase() === y) {
        error = errObj[y];
      }
      // error = inputOptions[x].toLowerCase() === y;
    }
  }

  return error;
}
Card.propTypes = {
  inputProps: PropTypes.array.isRequired,
  btnProps: PropTypes.object.isRequired,
  // headerProps: PropTypes.object.isRequired,
  cardColor: PropTypes.string.isRequired
};
