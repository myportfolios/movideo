import React from "react";
import RegistrationLoginCard from "common/RegistrationLoginCard";
import { BASE_URL, POSTER_SIZES } from "services/api";

import "./landing-page.scss";

export default function LandingPagePresentation({ imagesList }) {
  const loginEventHandler = () => {
    // alert("logged in");
    console.log("logged into landing page");
  };
  const registerEventHandler = () => {
    // alert("registered");
    console.log("registered to landing page");
  };
  let inputProps = ["USERNAME", "EMAIL", "PASSWORD", "PASSWORD RE-TYPE"];
  let btnProps = {
    btnName: "REGISTER",
    btnColor: "white",
    btnBgColor: "#4D79FF"
  };
  let headerProps = {
    headerTitle: "OR REGISTER ACCOUNT",
    headerColor: "white"
  };
  const props = {
    loginEventHandler: loginEventHandler,
    registerEventHandler: registerEventHandler,
    inputProps: inputProps,
    btnProps: btnProps,
    headerProps: headerProps
  };

  return (
    <div>
      <ImagesTable imagesList={imagesList} />
      <RegistrationLoginCard props={props} />
    </div>
  );
}

/**Render props */
export const MenuBtnComponent = ({ children }) => {
  let labels = {
    register: "Register",
    signIn: "Sign In"
  };
  return children(labels);
};
export const ImagesTable = ({ imagesList }) => {
  let imagesListJSX = imagesList?.map(item => {
    let imageSrc = `${BASE_URL}${POSTER_SIZES}${item.images}`;
    return <img src={imageSrc} alt="image" key={item.images} />;
  });
  return <div className="images-gallery">{imagesListJSX}</div>;
};
