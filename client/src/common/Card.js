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
  errorObj,
  cardInputStateObj //stateObj
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
        {renderPlaceholderJSX(
          placeholdersKey,
          handleUserInput,
          errorObj,
          id,
          placeholdersKey,
          cardInputStateObj
        )}
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
function renderPlaceholderJSX(
  arrToMap,
  handleUserInputArg,
  errorObj,
  cardId,
  placeholdersKey,
  cardInputStateObj
) {
  //get type of error from errorObj keys
  let errorType = errorObj && Object.keys(errorObj).toString();
  let placeholdersJSX = arrToMap.map((item, index) => {
    return (
      <>
        <InputText
          cardId={cardId}
          placeholder={`${item}...`}
          key={index}
          handleUserInput={handleUserInputArg}
          name={item.toLowerCase()}
          value={mapItemToInput(placeholdersKey, cardInputStateObj)}
        />

        {item.toLowerCase() === errorType ? (
          <div style={{ color: "orangeRed" }}>
            {toShowError(arrToMap, errorObj)}
          </div>
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

function mapErrorToInput(inputOptions, errObj) {
  var error;
  for (let x in inputOptions) {
    for (let y in errObj) {
      if (inputOptions[x].toLowerCase() === y) {
        error = errObj[y];
      }
      // error = inputOptions[x].toLowerCase() === y;
    }
  }
  console.log(error);
  return error;
}

function mapItemToInput(arrayToMap, inputObj) {
  // inputObj = inputObj || [];
  let inputValue;

  for (let x of arrayToMap) {
    for (let y in inputObj) {
      if (x.toLowerCase() === y) {
        inputValue = inputObj[y];
      }
    }
  }

  return inputValue;
}
Card.propTypes = {
  inputProps: PropTypes.array.isRequired,
  btnProps: PropTypes.object.isRequired,
  // headerProps: PropTypes.object.isRequired,
  cardColor: PropTypes.string.isRequired
};
