import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moviesApi from '../../services/moviesApi';
import styles from './Reviews.module.css';

export default class Reviews extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    const { match } = this.props;
    moviesApi
      .fetchMovieReviews(match.params.movieId)
      .then((reviews) => this.setState({ reviews }));
  }

  render() {
    const { reviews } = this.state;
    return (
      <ul className={styles.list}>
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <li key={review.id}>
              <h2 className={styles.author}>
                Author: <span className={styles.name}>{review.author}</span>
              </h2>
              <p>{review.content}</p>
            </li>
          ))
        ) : (
          <p className={styles.noReviews}>
            We don't have any reviews for this movie.
          </p>
        )}
      </ul>
    );
  }
}

Reviews.protoTypes = {
  reviews: PropTypes.shape({
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};
