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
    width: 0,
    height: 0
  };
  //get all recent movies when page loads
  async componentDidMount() {
    console.log(window);
    let viewport = window.addEventListener(
      "resize",
      this.getChangesInWindowSize
    );
    // let viewport = getViewPort();
    this.props.getViewPortAction(viewport);
    //call getLatestMovies api
    await this.props.fetchLatestMovies(API_URL.latestMovies);
    // this.getChangesInWindowSize();
  }
  componentDidUpdate() {
    let viewport = window.addEventListener(
      "resize",
      this.getChangesInWindowSize
    );
  }

  componentWillUnmount() {
    let viewport = window.removeEventListener(
      "resize",
      this.getChangesInWindowSize
    );
    this.props.getViewPortAction(viewport);
  }

  // async componentDidUpdate() {
  //   let viewport = getViewPort();
  //   this.props.getViewPortAction(viewport);
  // }
  //getting window size changes
  getChangesInWindowSize = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
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
