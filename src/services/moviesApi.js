const baseURL = 'https://api.themoviedb.org/3';
const apiKey = 'ecd5279c99212444501111ba3287ac5a';

const fetchTrendingMovies = () => {
  return fetch(`${baseURL}/trending/movie/week?api_key=${apiKey}`)
    .then((res) => res.json())
    .then((data) => data.results);
};

const fetchMoviesWithQuery = (searchQuery) => {
  return fetch(
    `${baseURL}/search/movie?api_key=${apiKey}&query=${searchQuery}&page=1`
  )
    .then((res) => res.json())
    .then((data) => data.results);
};

const fetchMovieDetails = (movieId) => {
  return fetch(`${baseURL}/movie/${movieId}?api_key=${apiKey}`).then((res) =>
    res.json()
  );
};

const fetchMovieCast = (movieId) => {
  return fetch(`${baseURL}/movie/${movieId}/credits?api_key=${apiKey}`)
    .then((res) => res.json())
    .then((data) => data.cast);
};

const fetchMovieReviews = (movieId) => {
  return fetch(`${baseURL}/movie/${movieId}/reviews?api_key=${apiKey}&page=1`)
    .then((res) => res.json())
    .then((data) => data.results);
};

export default {
  fetchTrendingMovies,
  fetchMoviesWithQuery,
  fetchMovieDetails,
  fetchMovieCast,
  fetchMovieReviews,
};
