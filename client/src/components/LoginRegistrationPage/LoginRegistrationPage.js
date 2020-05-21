import React from "react";
import Card from "common/Card";
import RegistrationLoginCard from "common/RegistrationLoginCard";

export default function LoginRegistrationPage() {
  const loginEventHandler = () => {
    // alert("logged in");
    console.log("logged in");
  };
  const registerEventHandler = () => {
    // alert("registered");
    console.log("registered");
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

  return <RegistrationLoginCard props={props} />;
}
