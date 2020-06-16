import React, { Component } from "react";
import HeaderPresentation from "./HeaderPresentation";
import { getOscarNominations } from "store/actions/oscars";
import { signOutUser } from "auth/authAction";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
/**
 * use withRouter HOC to wrap a component that wants to push to history i.e this.props.history.push("path")
 *
 *
 */

class HeaderContainer extends Component {
  pushToHomePage = () => {
    this.props.history.push("./");
  };
  render() {
    const { auth, signOutUser } = this.props;

    return (
      <HeaderPresentation
        getOscarNominations={this.props.getOscarNominations}
        loggedIn={auth}
        signOutUser={signOutUser}
        pushToHomePage={this.pushToHomePage}
      />
    );
  }
}

export const mapStateToProps = state => {
  return {
    auth: state.auth.authenticated
  };
};
export default compose(
  connect(mapStateToProps, { getOscarNominations, signOutUser }),
  withRouter
)(HeaderContainer);
