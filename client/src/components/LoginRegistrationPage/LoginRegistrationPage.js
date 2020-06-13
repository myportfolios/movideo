import React, { Fragment } from "react";
import RegistrationLoginCard from "common/RegistrationLoginCard";
import { accountType } from "services/constants";
import { loginUserAction, registerUserAction } from "auth/authAction";
import { connect } from "react-redux";

class LoginRegistrationPage extends React.Component {
  loginEventHandler = e => {
    e.preventDefault();
    //make api call

    this.props.loginUserAction(this.state, () => {
      //redirect user to collections page
      this.props.history.push("/my-collections");
    });
    this.setState({ state: {} });
  };

  registerEventHandler = () => {
    this.props.registerUserAction(this.state);
    this.setState({ state: {} });
  };
  handleUserInput = e => {
    console.log(e.target.id);
    this.setState(
      { [e.target.name]: e.target.value, cardId: e.target.id },
      () => console.log(this.state)
    );
  };
  render() {
    //props for login section of card

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
      handleUserInput: this.handleUserInput,
      loginEventHandler: this.loginEventHandler,
      id: "login",
      errorObj: this.props.loginError
    };

    //props for register section of card
    const registerProps = {
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
      cardColor: "blue",
      handleUserInput: this.handleUserInput,
      registerEventHandler: this.registerEventHandler,
      id: "register",
      errorObj: this.props.registrationError
    };

    return (
      <Fragment>
        <div style={{ textAlign: "center" }}>
          <h1>WHY REGISTER?</h1>
          <h4>
            {" "}
            As a registered user, you can create a collection where you can add
            movies you intend to watch.
          </h4>
          <h4>
            We send out weekly reminders of your collections on Friday nights so
            you can enjoy your weekends.
          </h4>
        </div>

        <RegistrationLoginCard
          registerProps={registerProps || {}}
          loginProps={loginProps || {}}
        />
      </Fragment>
    );
  }
}

export const mapStateToProps = state => {
  return {
    loginError: state.auth.errorMessage,
    registrationError: state.registration.errorMessage
  };
};

export default connect(mapStateToProps, {
  loginUserAction,
  registerUserAction
})(LoginRegistrationPage);
