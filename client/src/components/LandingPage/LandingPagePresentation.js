import React from "react";
import Card from "common/Card";
import { BASE_URL, POSTER_SIZES } from "services/api";

import "./landing-page.scss";

export default function LandingPagePresentation({ imagesList }) {
  let cardProps = ["USERNAME", "EMAIL", "PASSWORD", "PASSWORD RE-TYPE"];
  let btnProps = {
    btnName: "Register",
    btnColor: "blue",
    btnBgColor: "orange"
  };
  return (
    <div>
      <ImagesTable imagesList={imagesList} />
      {renderWelcomeBox()}
      <RegistrationLoginComponent />
      <div>
        <Card cardProps={cardProps} btnProps={btnProps} />
      </div>
    </div>
  );
}

export const renderWelcomeBox = () => {
  return (
    <div className="render-welcome-box">
      <h2 className="welcome-header">Movideo</h2>
      <h5 className="welcome-para">
        Register or Sign In to create collection of movies
      </h5>
      <MenuBtnComponent>
        {({ register, signIn }) => (
          <div className="welcome-btns">
            <button className="btn btn--register">{register}</button>
            <button className="btn btn--signIn">{signIn}</button>
          </div>
        )}
      </MenuBtnComponent>
    </div>
  );
};

export const RegistrationLoginComponent = () => {
  return (
    <div className="registrationLoginDiv">
      <div className=" inputContainer">
        <div className="inputContainer--fullname">
          <h5 className="text">Fullname</h5>
          <input type="text" name="fullname" placeholder="fullname" />
        </div>
        <div className="inputContainer--email">
          <h5 className="text">Email</h5>
          <input type="text" name="email" placeholder="email" />
        </div>
        <div className="inputContainer--password">
          <h5 className="text">Password</h5>
          <input type="text" name="password" placeholder="password" />
        </div>
        <div className="inputContainer--confirmPassword">
          <h5 className="text">Confirm Password</h5>
          <input
            type="text"
            name="confirmPassword"
            placeholder="confirmPassword"
          />
        </div>
      </div>
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
