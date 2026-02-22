export const API_KEY = 'f51e1d768cb8a0a008e8fc7e5d9c4170';
export const BASE_URL = 'https://api.themoviedb.org/3';

//Movies Lists EndPoints
export const TrendingMoviesEndPoints = '/trending/movie/day';
export const UpCommingMoviesEndPoints = '/movie/upcoming';
export const TopRatedMoviesEndPoints = '/movie/top_rated';
export const PopularMoviesEndPoints = '/movie/popular';

//Movie Details EndPoints
export const MovieDetailsEndPoint = (id:number) => `/movie/${id}`;
export const MovieCreditsEndPoint = (id: number) => `/movie/${id}/credits`;
export const SimilarMoviesEndPoint = (id: number) => `/movie/${id}/similar`;
export const MovieReviewsEndPoint = (id: number) => `/movie/${id}/reviews`;
export const MovieVideosEndPoint = (id: number) => `/movie/${id}/videos`;

//Images EndPoints
export const image500 = (path: string) => {
  return path
    ? { uri: `https://image.tmdb.org/t/p/w500${path}` }
    : null;
};
export const image342 = (path: string) => {
  return path
    ? { uri: `https://image.tmdb.org/t/p/w342${path}` }
    : null;
};

export const image185 = (path: string) => {
  return path
    ? { uri: `https://image.tmdb.org/t/p/w185${path}` }
    : null;
};

export const fallbackImage = require("../assets/images/icon.png");