import React from "react";
import Card from "common/Card";
import { BASE_URL, POSTER_SIZES } from "services/api";

import "./landing-page.scss";

export default function LandingPagePresentation({ imagesList }) {
  let imagesListJSX = imagesList?.map(item => {
    console.log("item", item);
    // console.log(`${BASE_URL}${POSTER_SIZES}${item.images}`);
    let imageSrc = `${BASE_URL}${POSTER_SIZES}${item.images}`;
    // console.log("imageSrc", imageSrc);
    // console.log("imageSrc", typeof imageSrc);
    return (
      // <Card>
      <img src={imageSrc} alt="image" key={item.images} />
      // </Card>
    );
  });

  return (
    <div className="landing-presentation">
      {/* <h1>Landing Page Presentation Component</h1> */}
      {/* <Card imagesList={imagesList} />; */}
      {imagesListJSX}
    </div>
  );
}
