import React from "react";
import Card from "common/Card";
import { BASE_URL, POSTER_SIZES } from "services/api";

import "./landing-page.scss";

export default function LandingPagePresentation({ imagesList }) {
  return (
    <div>
      <ImagesTable imagesList={imagesList} />
      {renderWelcomeBox()}
    </div>
  );
}

export const renderWelcomeBox = () => {
  return (
    <div className="render-welcome-box">
      <h2>Welcome Text</h2>
      <h5>Register or Sign In to create collection of movies</h5>
      <MenuBtnComponent>
        {({ register, signIn }) => (
          <div>
            <button>{register}</button>
            <button>{signIn}</button>
          </div>
        )}
      </MenuBtnComponent>
    </div>
  );
};

export const MenuBtnComponent = ({ children }) => {
  let labels = {
    register: "Register",
    signIn: "Sign In"
  };
  return children(labels);
};
export const ImagesTable = ({ imagesList }) => {
  let imagesListJSX = imagesList?.map((item, index) => {
    let imageSrc = `${BASE_URL}${POSTER_SIZES}${item.images}`;
    return (
      <img
        src={imageSrc}
        alt="image"
        key={item.images}
        style={{ opacity: "0.6" }}
      />
    );
  });
  return (
    <div
      className="images-gallery"
      // style={{ width: "1710px", margin: "0 auto" }}
    >
      {imagesListJSX}
    </div>
  );
};
