import React from "react";
import Card from "common/Card";
import { BASE_URL, POSTER_SIZES } from "services/api";

export default function LandingPagePresentation({ imagesList }) {
  let imagesListJSX = imagesList?.map(item => {
    // console.log(`${BASE_URL}${POSTER_SIZES}${item.images}`);
    let imageSrc = `${BASE_URL}${POSTER_SIZES}${item.images}`;
    return (
      // <Card>
      <img src={imageSrc} alt="image" />
      // </Card>
    );
  });

  return (
    <div>
      {/* <h1>Landing Page Presentation Component</h1> */}
      {/* <Card imagesList={imagesList} />; */}
      {imagesListJSX}
    </div>
  );
}
