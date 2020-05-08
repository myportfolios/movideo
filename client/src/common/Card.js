import React from "react";
import { getPlaceholdersFromProps } from "utilities/utils";
import "./card.scss";

export default function Card({ cardProps, btnProps }) {
  //return 4 elements from the 'props' arg
  //1.placeholders Array
  console.log(btnProps);
  const placeholders = getPlaceholdersFromProps(cardProps);
  const placeholdersKey = Object.values(placeholders);

  let placeholdersJSX = placeholdersKey.map((item, index) => {
    return <input type="text" placeholder={item} key={index} />;
  });
  const { btnColor, btnName, btnBgColor } = btnProps;
  return (
    <div
      className="Card"
      style={{
        backgroundColor: "blue"
      }}
    >
      {placeholdersJSX}
      {renderBtnHandler(btnColor, btnName, btnBgColor)}
    </div>
  );
}

function renderBtnHandler(btnColor, btnName, btnBgColor) {
  // const { btnColor, btnName } = btnProps;
  return (
    <span
      className="reg-login-btn"
      style={{ color: btnColor, backgroundColor: btnBgColor }}
    >
      {btnName}
    </span>
  );
}
