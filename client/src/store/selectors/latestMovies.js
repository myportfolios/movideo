import { createSelector } from "reselect";

export const getLatestMoviesImages = createSelector(
  [
    state =>
      state && state.LatestMoviesReducer && state.LatestMoviesReducer.payload
  ],
  moviesListArray => {
    // const movieImages = moviesListArray.map(movieList => movieList.poster_path);
    let size = 10;
    let randomMImages =
      moviesListArray &&
      moviesListArray.slice(0, size).map(() => {
        return (
          moviesListArray &&
          moviesListArray.splice(
            Math.floor(Math.random() * moviesListArray.length),
            1
          )[0]
        );
      });
    let movieImages =
      randomMImages &&
      randomMImages.map(movieList => {
        return {
          images: movieList.poster_path
        };
      });

    return movieImages;
  }
);
