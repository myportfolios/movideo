import React from "react";
import Card from "./Card";
import LoginModel from "models/login-model";
//refactor such that the props for each card are passed directly from the parent container

export default function RegistrationLoginCard(props) {
  const { loginProps, registerProps } = props;

  return (
    <div className="registrationLoginDiv">
      <Card
        inputProps={loginProps.inputProps}
        btnProps={loginProps.btnProps}
        headerProps={loginProps.headerProps}
        cardColor={loginProps.cardColor}
        handleUserInput={loginProps.handleUserInput}
        action={loginProps.loginEventHandler}
        id={loginProps.id}
        errorObj={loginProps.errorObj}
      />

      <Card
        inputProps={registerProps.inputProps}
        btnProps={registerProps.btnProps}
        headerProps={registerProps.headerProps}
        cardColor={registerProps.cardColor}
        handleUserInput={registerProps.handleUserInput}
        action={registerProps.registerEventHandler}
        id={registerProps.id}
        errorObj={registerProps.errorObj}
      />
    </div>
  );
}
