import React from "react";
import Card from "common/Card";
import { BASE_URL, POSTER_SIZES } from "services/api";

import "./landing-page.scss";

export default function LandingPagePresentation({ imagesList, viewport }) {
  // let POSTER_SIZES = getPosterSizeFromViewport(viewport);
  let imagesListJSX = imagesList?.map(item => {
    // console.log(`${BASE_URL}${POSTER_SIZES}${item.images}`);
    let imageSrc = `${BASE_URL}${POSTER_SIZES}${item.images}`;
    // console.log("imageSrc", imageSrc);
    // console.log("imageSrc", typeof imageSrc);
    return (
      // <Card>

      <img
        src={imageSrc}
        alt="image"
        key={item.images}
        style={{ opacity: "0.1" }}
      />

      // </Card>
    );
  });

  return (
    <div className="landing-presentation">
      {imagesListJSX}
      {renderWelcomeBox()}
    </div>
  );
}

// const getPosterSizeFromViewport = viewport => {
//   let posterSize = Math.floor(viewport.viewportwidth / 2);
//   console.log(posterSize);
//   return posterSize;
// };

export const renderWelcomeBox = () => {
  return (
    <div className="render-welcome-box">
      <h2>Welcome Text</h2>
      <h5>Register or Sign In to create collection of movies</h5>
      <div>
        <button>Register</button>
        <button>Sign In</button>
      </div>
    </div>
  );
};
