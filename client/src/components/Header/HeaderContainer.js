import React, { Component } from "react";
import HeaderPresentation from "./HeaderPresentation";
import { getOscarNominations } from "store/actions/oscars";
import { connect } from "react-redux";

class HeaderContainer extends Component {
  render() {
    return (
      <HeaderPresentation
        getOscarNominations={this.props.getOscarNominations}
      />
    );
  }
}

export default connect(null, { getOscarNominations })(HeaderContainer);
