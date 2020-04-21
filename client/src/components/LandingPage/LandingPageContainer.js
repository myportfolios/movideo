import React, { Component } from "react";
import LandingPagePresentation from "./LandingPagePresentation";
import { API_URL } from "services/api";
import { fetchLatestMovies } from "store/actions/latestMovies";
import { connect } from "react-redux";
import { getViewPort } from "utilities/utils";

import { getLatestMoviesImages } from "store/selectors/latestMovies";

class LandingPageContainer extends Component {
  state = {
    viewport: {}
  };
  //get all recent movies when page loads
  async componentDidMount() {
    this.state.viewport = getViewPort();
    // console.log("viewport", viewport);
    //call getLatestMovies api
    await this.props.fetchLatestMovies(API_URL.latestMovies);
    // await this.setState({ viewport: this.state.viewport });
  }
  render() {
    const { imagesList } = this.props;
    const { viewport } = this.state;
    console.log(viewport);
    return (
      <div className="landing-container">
        <LandingPagePresentation imagesList={imagesList} viewport={viewport} />
      </div>
    );
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
