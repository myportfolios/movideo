import React, { Component } from "react";
import LandingPagePresentation from "./LandingPagePresentation";
import { API_URL } from "services/api";
import { fetchLatestMovies } from "store/actions/latestMovies";
import { connect } from "react-redux";

import { getLatestMoviesImages } from "store/selectors/latestMovies";

class LandingPageContainer extends Component {
  //get all recent movies when page loads
  componentDidMount() {
    //call getLatestMovies api
    this.props.fetchLatestMovies(API_URL.latestMovies);
  }
  render() {
    const { imagesList } = this.props;
    return <LandingPagePresentation imagesList={imagesList} />;
  }
}

const mapStateToProps = state => {
  return {
    imagesList: getLatestMoviesImages(state)
  };
};

export default connect(mapStateToProps, { fetchLatestMovies })(
  LandingPageContainer
);
