import React, { Component } from "react";
import { connect } from "react-redux";
import AtCinemasPresentation from "./AtCinemasPresentation";
import { getMoviesAtCinemas } from "store/actions/atCinemas";

class AtCinemasContainer extends Component {
  componentDidMount() {
    this.props.getMoviesAtCinemas();
  }
  render() {
    // console.log(this.props.moviesAtCinemas);
    const { moviesAtCinemas: list } = this.props;
    return (
      <div>
        <AtCinemasPresentation list={list} />
      </div>
    );
  }
}
export const mapStateToProps = state => {
  return {
    moviesAtCinemas: state.atCinemaMovies.data
  };
};
export default connect(mapStateToProps, { getMoviesAtCinemas })(
  AtCinemasContainer
);
