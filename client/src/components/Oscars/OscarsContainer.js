import React, { Component } from "react";
import OscarsPresentation from "./OscarsPresentation";
import { getOscarNominations } from "store/actions/oscars";
import { API_URL } from "services/api";
import { makeOscarCalls } from "utilities/utils";
import { OSCARS } from "services/constants";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";

class OscarsContainer extends Component {
  // state = {
  //   oscarYear: ""
  // };
  async componentDidMount() {
    let oscarYear = this.props.match.params.oscarsYear;

    let year;
    switch (oscarYear) {
      case "2009":
        year = OSCARS.NOMINATIONS_2009;
        break;
      case "2010":
        year = OSCARS.NOMINATIONS_2010;
        break;
      case "2011":
        year = OSCARS.NOMINATIONS_2011;
        break;
      case "2012":
        year = OSCARS.NOMINATIONS_2012;
        break;
    }

    await this.props.getOscarNominations(makeOscarCalls(year));
  }
  render() {
    const { oscars: list } = this.props;
    // console.log(this.props.match.params);
    const { oscarsYear } = this.props.match.params;
    return <OscarsPresentation list={list} oscarYear={oscarsYear} />;
  }
}
export const mapStateToProps = state => {
  return {
    oscars: state.oscarNominations.items
  };
};

export default compose(
  connect(mapStateToProps, { getOscarNominations }),
  withRouter
)(OscarsContainer);
