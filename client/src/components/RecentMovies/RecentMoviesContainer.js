import React, { Component } from "react";
import { connect } from "react-redux";
import RecentMoviesPresentation from "./RecentMoviesPresentation";
import { API_URL } from "services/api";
import { fetchLatestMovies } from "store/actions/latestMovies";

class RecentMoviesContainer extends Component {
  async componentDidMount() {
    await this.props.fetchLatestMovies(API_URL.latestMovies);
  }
  render() {
    const { latestMovies: list } = this.props;
    return (
      <div>
        <RecentMoviesPresentation list={list} />
      </div>
    );
  }
}

export const mapStateToProps = state => {
  return {
    latestMovies: state.LatestMoviesReducer.payload
  };
};

export default connect(mapStateToProps, { fetchLatestMovies })(
  RecentMoviesContainer
);
