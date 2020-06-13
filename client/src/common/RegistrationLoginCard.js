import React, { useState } from "react";
import Card from "./Card";
import { connect } from "react-redux";
import LoginModel from "models/login-model";

//refactor such that the props for each card are passed directly from the parent container

export class RegistrationLoginCard extends React.Component {
  //  !!this.props.registrationMsg.length && this.setState({ showMsg: true });
  render() {
    const { loginProps, registerProps, registrationMsg } = this.props;

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
        {!!registrationMsg && renderRegisterMsg(registrationMsg)}
      </div>
    );
  }
}

const renderRegisterMsg = str => {
  return (
    <h5
      style={{
        position: "absolute",
        border: "1px solid blue",
        padding: "30px 45px",
        backgroundColor: "white",
        bottom: "30px",
        marginLeft: "68%",
        borderRadius: "5px",
        color: "blue"
      }}
      className="displayMsgBox"
    >
      {str}
    </h5>
  );
};

const mapStateToProps = state => {
  return {
    registrationMsg: state.registration.status || ""
  };
};

export default connect(mapStateToProps, {})(RegistrationLoginCard);
