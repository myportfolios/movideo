import React from "react";
import Card from "common/Card";
import { BASE_URL, POSTER_SIZES } from "services/api";

import "./landing-page.scss";

export default function LandingPagePresentation({
  imagesList,
  loginEventHandler,
  registerEventHandler
}) {
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
  return (
    <div>
      <ImagesTable imagesList={imagesList} />
      <div className="registrationLoginDiv">
        <Card
          inputProps={["USERNAME", "PASSWORD"]}
          btnProps={{
            btnName: "LOGIN",
            btnColor: "white",
            btnBgColor: "blue"
          }}
          headerProps={{
            headerTitle: "LOGIN TO ACCOUNT",
            headerColor: "blue"
          }}
          cardColor="white"
          action={loginEventHandler}
          id="login"
        />
        <Card
          inputProps={inputProps}
          btnProps={btnProps}
          headerProps={headerProps}
          cardColor="blue"
          action={registerEventHandler}
          id="register"
        />
      </div>
    </div>
  );
}

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
