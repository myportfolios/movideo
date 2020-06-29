import React, { Component } from "react";
import LandingPagePresentation from "./LandingPagePresentation";
import { API_URL } from "services/api";
import { fetchLatestMovies } from "store/actions/latestMovies";
import { connect } from "react-redux";
import { getViewPort, getSizeByViewportWidth } from "utilities/utils";
import getViewPortAction from "store/actions/viewport";
import { posterLengthAction } from "store/actions/posterSize";
import { loginUserAction, registerUserAction } from "auth/authAction";
import { getLatestMoviesImages } from "store/selectors/latestMovies";

class LandingPageContainer extends Component {
  state = {
    viewportWidth: 0,
    viewportHeight: 0,
    posterLength: null
  };
  //get all recent movies when page loads

  async componentDidMount() {
    //call the getViewPort function for sizes on load of page
    let viewport = getViewPort();

    //save the viewport sizes to store
    this.props.getViewPortAction(viewport);
    this.setState({
      viewportWidth: viewport.viewportWidth,
      viewportHeight: viewport.viewportHeight
    });
    let posterLength = await getSizeByViewportWidth(this.state.viewportWidth);
    this.setState({
      posterLength
    });
    await this.props.posterLengthAction(posterLength);
    //call getLatestMovies api
    await this.props.fetchLatestMovies(API_URL.latestMovies);
  }

  // componentWillUnmount() {
  //   window.removeEventListener("resize", this.getChangesInWindowSize);
  // }
  async componentDidUpdate(prevProps, prevState) {
    //check if prevProps and state changes

    const { imagesList, posterLength } = this.props;

    const { viewportWidth, viewportHeight } = this.state;
    const viewport = {
      viewportWidth,
      viewportHeight
    };
    window.addEventListener("resize", this.getChangesInWindowSize);

    if (this.state.viewportWidth !== prevState.viewportWidth) {
      let updatedViewportState = this.props.getViewPortAction(viewport);
      let posterLength = await getSizeByViewportWidth(
        updatedViewportState.payload.viewportWidth
      );
      await this.props.posterLengthAction(posterLength);
    }
  }

  //getting window size changes
  getChangesInWindowSize = () => {
    this.setState({
      viewportWidth: window.innerWidth,
      viewportHeight: window.innerHeight
    });
  };

  loginEventHandler = e => {
    e.preventDefault();
    //make api call
    this.props.loginUserAction(this.state, () => {
      //redirect user to collections page
      this.props.history.push("/my-collections");
    });
  };

  registerEventHandler = e => {
    e.preventDefault();

    this.props.registerUserAction(this.state);
  };
  handleUserInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { imagesList, looggedInStatus } = this.props;
    const isLoggedIn = looggedInStatus && !!looggedInStatus.length;

    return (
      <div className="landing-container">
        <LandingPagePresentation
          imagesList={imagesList}
          loginEventHandler={this.loginEventHandler}
          registerEventHandler={this.registerEventHandler}
          handleUserInput={this.handleUserInput}
          errorObj={this.props.loginError}
          isLoggedIn={isLoggedIn}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    imagesList: getLatestMoviesImages(state),
    posterLength: state.posterLength && state.posterLength.length,
    viewportWidth: state.viewport && state.viewport.viewportWidth,
    loginError: state.auth.errorMessage,
    looggedInStatus: state.auth.authenticated
  };
};

export default connect(mapStateToProps, {
  fetchLatestMovies,
  getViewPortAction,
  posterLengthAction,
  registerUserAction
})(LandingPageContainer);

//continue to fix y the posterLength gets to zero
//refactor componentDidUpdate to be in sync with mount
