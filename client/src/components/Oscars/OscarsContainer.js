import React, { Component } from "react";
import OscarsPresentation from "./OscarsPresentation";
import { connect } from "react-redux";

class OscarsContainer extends Component {
  componentDidMount() {
    console.log(this.props);
    console.log("Helloooo");
  }
  render() {
    const { oscars: list } = this.props;
    return <OscarsPresentation list={list} test={this.props} />;
  }
}
export const mapStateToProps = state => {
  return {
    oscars: state.oscarNominations.items
  };
};

export default connect(mapStateToProps, {})(OscarsContainer);
