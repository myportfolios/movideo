import React from "react";
import RegistrationLoginCard from "common/RegistrationLoginCard";
import { BASE_URL, POSTER_SIZES } from "services/api";

import "./landing-page.scss";

export default function LandingPagePresentation({
  imagesList,
  loginEventHandler,
  registerEventHandler,
  handleUserInput,
  errorObj
}) {
  const loginProps = {
    inputProps: ["EMAIL", "PASSWORD"],
    btnProps: {
      btnName: "LOGIN",
      btnColor: "white",
      btnBgColor: "blue"
    },
    headerProps: {
      headerTitle: "LOGIN TO ACCOUNT",
      headerColor: "blue"
    },
    cardColor: "white",
    handleUserInput: handleUserInput,
    loginEventHandler: loginEventHandler,
    id: "login",
    errorObj: errorObj
  };
  const registerProps = {
    loginEventHandler: loginEventHandler,
    registerEventHandler: registerEventHandler,
    handleUserInput: handleUserInput,
    inputProps: ["NAME", "EMAIL", "PASSWORD", "PASSWORD RE-TYPE"],
    btnProps: {
      btnName: "REGISTER",
      btnColor: "white",
      btnBgColor: "#4D79FF"
    },
    headerProps: {
      headerTitle: "OR REGISTER ACCOUNT",
      headerColor: "white"
    },
    errorObj: {}
  };

  return (
    <div>
      <ImagesTable imagesList={imagesList} />
      <RegistrationLoginCard
        registerProps={registerProps}
        loginProps={loginProps}
      />
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
