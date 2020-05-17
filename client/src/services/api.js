/****** Movie Urls*****************/
export const API_URL = {
  latestMovies:
    "https://api.themoviedb.org/3/movie/popular?page=1&language=en-US&api_key=2afb1d4ebd6b0b7548fc20dd30d0ac26",
  atCinemas:
    "https://api.themoviedb.org/3/movie/now_playing?page=1&language=en-US&api_key=2afb1d4ebd6b0b7548fc20dd30d0ac26"
};
//CONFIGURATION API FOR MOVIES ENDPOINT//
export const BASE_URL = "http://image.tmdb.org/t/p/";
// export const POSTER_SIZES = "w500";
export const POSTER_SIZES = "w342";
export const IMAGE_POSTER_SIZES = "w185";
// export const POSTER_SIZES = "w154";
// export const POSTER_SIZES = "w185";

//use switch statement to render different poster_sizes based onmedia-query ranges
