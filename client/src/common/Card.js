import React from "react";
import { getPlaceholdersFromProps } from "utilities/utils";
import "./card.scss";

export default function Card({ cardProps }) {
  //return 4 elements from the 'props' arg
  //1.placeholders Array
  console.log(cardProps);
  const placeholders = getPlaceholdersFromProps(cardProps);
  const placeholdersKey = Object.values(placeholders);

  let placeholdersJSX = placeholdersKey.map((item, index) => {
    return <input type="text" placeholder={item} key={index} />;
  });

  return <div className="Card">{placeholdersJSX}</div>;
}
