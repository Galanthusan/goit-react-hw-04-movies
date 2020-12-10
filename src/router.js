import { lazy } from 'react';

// export default {
//   home: '/',
//   movies: '/movies',
//   movieDetails: '/movies/:movieId',
// };
export const movies = '/movies';
export const cast = '/cast';
export const reviews = '/reviews';

export const routes = [
  {
    path: '/',
    label: 'Home',
    exact: true,
    component: lazy(() =>
      import('./pages/HomePage/HomePage' /* webpackChunkName: "home-page" */)
    ),
  },

  {
    path: movies,
    label: 'Movies',
    exact: true,
    component: lazy(() =>
      import(
        './pages/MoviesPage/MoviesPage' /* webpackChunkName: "movies-page" */
      )
    ),
  },
  {
    path: `${movies}/:movieId`,
    label: 'Movie Details',
    component: lazy(() =>
      import(
        './pages/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "movie-details-page"*/
      )
    ),
  },
];

export default routes;
