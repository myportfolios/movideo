import React, { Component } from "react";
import HeaderPresentation from "./HeaderPresentation";
import { getOscarNominations } from "store/actions/oscars";
import { connect } from "react-redux";

class HeaderContainer extends Component {
  render() {
    const { auth } = this.props;

    return (
      <HeaderPresentation
        getOscarNominations={this.props.getOscarNominations}
        auth={auth}
      />
    );
  }
}

export const mapStateToProps = state => {
  return {
    auth: state.auth.authenticated
  };
};
export default connect(mapStateToProps, { getOscarNominations })(
  HeaderContainer
);
