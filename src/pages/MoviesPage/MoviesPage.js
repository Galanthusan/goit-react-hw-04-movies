import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import getQueryParams from '../../utils/getQueryParams';
import moviesAPI from '../../services/moviesApi';
import Searchbar from '../../components/Searchbar/Searchbar';
import styles from './MoviesPage.module.css';

export default class MoviesPage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    const { query } = getQueryParams(this.props.location.search);

    if (query) {
      this.fetchMovies(query);
    }
  }

  componentDidUpdate(prevProps) {
    const { query: prevQuery } = getQueryParams(prevProps.location.search);
    const { query: nextQuery } = getQueryParams(this.props.location.search);

    if (prevQuery !== nextQuery) {
      this.fetchMovies(nextQuery);
    }
  }

  fetchMovies = (query) => {
    moviesAPI
      .fetchMoviesWithQuery(query)
      .then((movies) => this.setState({ movies }));
  };

  handleChangeQuery = (query) => {
    this.props.history.push({
      ...this.props.location,
      search: `query=${query}`,
    });
  };

  render() {
    const { movies } = this.state;
    const { match, location } = this.props;
    return (
      <>
        <Searchbar onSubmit={this.handleChangeQuery} />
        <div className={styles.MoviesPage}>
          {movies.length > 0 && (
            <ul className={styles.list}>
              {movies.map((movie) => (
                <li key={movie.id} className={styles.listItem}>
                  <Link
                    to={{
                      pathname: `${match.url}/${movie.id}`,
                      state: { from: location },
                    }}
                    className={styles.link}
                  >
                    {movie.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </>
    );
  }
}
