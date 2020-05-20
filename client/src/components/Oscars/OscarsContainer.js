import React, { Component } from "react";
import OscarsPresentation from "./OscarsPresentation";
import { connect } from "react-redux";

class OscarsContainer extends Component {
  state = {
    oscarYear: ""
  };
  componentDidMount() {
    const { oscarsYear: oscarYear } = this.props.match.params;
    console.log("oscar year is: ", oscarYear);
    this.setState({ oscarYear });
  }
  render() {
    const { oscars: list } = this.props;
    return <OscarsPresentation list={list} oscarYear={this.state.oscarYear} />;
  }
}
export const mapStateToProps = state => {
  return {
    oscars: state.oscarNominations.items
  };
};

export default connect(mapStateToProps, {})(OscarsContainer);
