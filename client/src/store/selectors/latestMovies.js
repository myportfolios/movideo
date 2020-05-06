import { createSelector } from "reselect";

export const getLatestMoviesImages = createSelector(
  [
    state =>
      state && state.LatestMoviesReducer && state.LatestMoviesReducer.payload,
    state => state.posterLength.length
  ],
  (moviesListArray, posterLength) => {
    let randomMImages =
      moviesListArray &&
      moviesListArray.slice(0, posterLength).map(() => {
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
