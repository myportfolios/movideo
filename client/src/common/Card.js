import React from "react";
import { getPlaceholdersFromProps } from "utilities/utils";
import "./card.scss";
import PropTypes from "prop-types";

export default function Card({
  inputProps,
  btnProps,
  headerProps,
  cardColor,
  action,
  id
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

  const { btnColor, btnName, btnBgColor } = btnProps;
  const { headerTitle, headerColor } = headerProps;
  return (
    <div
      className="Card"
      style={{
        backgroundColor: cardColor
      }}
      id={id}
    >
      <div className="header-grid-item">
        {renderCardHeader(headerTitle, headerColor)}
      </div>
      <div className="input-box">{renderPlaceholderJSX(placeholdersKey)}</div>

      <div className="btn-grid-item">
        {renderBtnHandler(btnColor, btnName, btnBgColor, action)}
      </div>
    </div>
  );
}

function renderBtnHandler(btnColor, btnName, btnBgColor, action) {
  // const { btnColor, btnName } = btnProps;
  return (
    <div
      className="reg-login-btn"
      style={{ color: btnColor, backgroundColor: btnBgColor }}
      onClick={action}
    >
      {btnName}
    </div>
  );
}
function renderPlaceholderJSX(arrToMap) {
  let placeholdersJSX = arrToMap.map((item, index) => {
    return <input type="text" placeholder={`${item}...`} key={index} />;
  });
  return placeholdersJSX;
}
function renderCardHeader(headerTitle, headerColor) {
  return (
    <h2
      style={{
        color: headerColor,
        textAlign: "center"
      }}
    >
      {headerTitle}
    </h2>
  );
}

Card.propTypes = {
  inputProps: PropTypes.array.isRequired,
  btnProps: PropTypes.object.isRequired,
  headerProps: PropTypes.object.isRequired,
  cardColor: PropTypes.string.isRequired
};
