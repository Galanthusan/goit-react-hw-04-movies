import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from '../HomePage/HomePage.module.css';
import moviesAPI from '../../services/moviesApi';
import { movies } from '../../router';

export default class HomePage extends Component {
  state = {
    trending: [],
  };

  componentDidMount() {
    moviesAPI
      .fetchTrendingMovies()
      .then((trending) => this.setState({ trending: trending }));
  }

  render() {
    const { trending } = this.state;
    const { location } = this.props;

    return (
      <div className={styles.HomePage}>
        <ul className={styles.list}>
          {trending.map((movie) => (
            <li key={movie.id} className={styles.listItem}>
              <Link
                to={{
                  pathname: `${movies}/${movie.id}`,
                  state: { from: location },
                }}
                className={styles.link}
              >
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

HomePage.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.string,
  }).isRequired,
};
