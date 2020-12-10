import React, { Component, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Link } from 'react-router-dom';
import GoBackButton from '../../components/GoBackButton/GoBackButton';
import Loader from '../../components/Loader/Loader';
import moviesApi from '../../services/moviesApi';
import { cast, reviews } from '../../router';
import styles from './MovieDetailsPage.module.css';

const AsyncCast = lazy(() =>
  import('../Cast/Cast' /* webpackChunkName: "cast-page" */)
);
const AsyncReviews = lazy(() =>
  import('../Reviews/Reviews' /* webpackChunkName: "cast-page" */)
);

const getIdFromProps = (props) => props.match.params.movieId;
const getPathFromProps = (props) => props.match.path;

export default class MovieDetailsPage extends Component {
  state = {
    movie: null,
  };
  componentDidMount() {
    const movieId = getIdFromProps(this.props);
    moviesApi
      .fetchMovieDetails(movieId)
      .then((movie) => this.setState({ movie }));
  }

  handleGoBack = () => {
    const { location, history } = this.props;

    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }
    return history.push('/');
  };

  render() {
    const { movie } = this.state;
    const { location, match } = this.props;
    const path = getPathFromProps(this.props);
    const imagePath = 'https://image.tmdb.org/t/p/w300';
    return (
      <div className={styles.MovieDetailsPage}>
        <div>
          <GoBackButton onGoback={this.handleGoBack} />
        </div>

        {movie && (
          <>
            <img src={`${imagePath}/${movie.poster_path}`} alt={movie.title} />
            <div className={styles.MovieInfo}>
              <h2>
                {movie.title}
                <span>{movie.release_date}</span>
              </h2>
              <p>
                User score<span>{movie.vote_average}</span>
              </p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              <ul className={styles.list}>
                {movie.genres.map((genre) => (
                  <li key={genre.id} className={styles.listItem}>
                    {genre.name}
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}

        <h3>Additional info</h3>
        <Link
          to={{
            pathname: `${match.url}/cast`,
            state: { ...location.state },
          }}
          className={styles.additionalInfoLinks}
        >
          Cast
        </Link>
        <Link
          to={{
            pathname: `${match.url}/reviews`,
            state: { ...location.state },
          }}
          className={styles.additionalInfoLinks}
        >
          Reviews
        </Link>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route path={path + cast} component={AsyncCast} />
            <Route path={path + reviews} component={AsyncReviews} />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

MovieDetailsPage.propTypes = {
  location: PropTypes.shape({
    from: PropTypes.objectOf(PropTypes.string),
  }).isRequired,
};
