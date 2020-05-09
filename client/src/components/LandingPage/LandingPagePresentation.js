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
    btnColor: "blue",
    btnBgColor: "orange"
  };
  let headerProps = {
    headerTitle: "OR REGISTER ACCOUNT",
    headerColor: "white"
  };
  return (
    <div>
      <ImagesTable imagesList={imagesList} />
      <div
        style={{
          width: "600px",
          backgroundColor: "yellow",
          display: "flex"
        }}
        className="registrationLoginDiv"
      >
        <Card
          inputProps={["USERNAME", "PASSWORD"]}
          btnProps={{
            btnName: "LOGIN",
            btnColor: "white",
            btnBgColor: "blue"
          }}
          headerProps={{
            headerTitle: "LOGIN TO ACCOUNT",
            headerColor: "white"
          }}
          cardColor="red"
          action={loginEventHandler}
        />
        <Card
          inputProps={inputProps}
          btnProps={btnProps}
          headerProps={headerProps}
          cardColor="green"
          action={registerEventHandler}
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
