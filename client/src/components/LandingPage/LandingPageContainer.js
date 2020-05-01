import React, { Component } from "react";
import LandingPagePresentation from "./LandingPagePresentation";
import { API_URL } from "services/api";
import { fetchLatestMovies } from "store/actions/latestMovies";
import { connect } from "react-redux";
import { getViewPort } from "utilities/utils";
import getViewPortAction from "store/actions/viewport";

import { getLatestMoviesImages } from "store/selectors/latestMovies";

class LandingPageContainer extends Component {
  state = {
    viewportWidth: 0,
    viewportHeight: 0
  };
  //get all recent movies when page loads

  async componentDidMount() {
    //call the getViewPort function for sizes on load of page
    let viewport = getViewPort();
    //save the viewport sizes to store
    this.props.getViewPortAction(viewport);
    //call getLatestMovies api
    await this.props.fetchLatestMovies(API_URL.latestMovies);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.getChangesInWindowSize);
  }
  componentDidUpdate() {
    //check if prevProps and state changes
    const { viewportWidth, viewportHeight } = this.state;
    const viewport = {
      viewportWidth,
      viewportHeight
    };
    window.addEventListener("resize", this.getChangesInWindowSize);
    this.props.getViewPortAction(viewport);
    console.log("viewport  is", viewport);
  }

  //getting window size changes
  getChangesInWindowSize = () => {
    this.setState({
      viewportWidth: window.innerWidth,
      viewportHeight: window.innerHeight
    });
  };

  render() {
    const { imagesList } = this.props;

    return (
      <div className="landing-container">
        <LandingPagePresentation imagesList={imagesList} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    imagesList: getLatestMoviesImages(state)
  };
};

export default connect(mapStateToProps, {
  fetchLatestMovies,
  getViewPortAction
})(LandingPageContainer);
