import { createSelector } from "reselect";

export const getLatestMoviesImages = createSelector(
  [
    state =>
      state && state.LatestMoviesReducer && state.LatestMoviesReducer.payload
  ],
  moviesListArray => {
    // const movieImages = moviesListArray.map(movieList => movieList.poster_path);
    let movieImages =
      moviesListArray &&
      moviesListArray.map(movieList => {
        return {
          images: movieList.poster_path
        };
      });
    console.log("movieImages", movieImages);
    return { movieImages };
  }
);
