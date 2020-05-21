import React from "react";
import Card from "./Card";
//refactor such that the props for each card are passed directly from the parent container

export default function RegistrationLoginCard({ props }) {
  console.log("props for login card ", props);
  const {
    loginEventHandler,
    inputProps,
    btnProps,
    headerProps,
    registerEventHandler
  } = props;
  return (
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
  );
}
