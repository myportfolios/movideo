import { createSelector } from "reselect";
import { getSizeByViewport } from "utilities/utils";

export const getLatestMoviesImages = createSelector(
  [
    state =>
      state && state.LatestMoviesReducer && state.LatestMoviesReducer.payload,
    state =>
      state.viewport &&
      state.viewport.payload &&
      state.viewport.payload.viewportWidth
  ],
  (moviesListArray, viewportWidth) => {
    let size = getSizeByViewport(viewportWidth)(viewportWidth);

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
