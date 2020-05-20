import React, { Component } from "react";
import OscarsPresentation from "./OscarsPresentation";
import { connect } from "react-redux";

class OscarsContainer extends Component {
  render() {
    console.log(this.props.oscars);
    const { oscars: list } = this.props;
    return <OscarsPresentation list={list} />;
  }
}
export const mapStateToProps = state => {
  return {
    oscars: state.oscarNominations.items
  };
};

export default connect(mapStateToProps, {})(OscarsContainer);
