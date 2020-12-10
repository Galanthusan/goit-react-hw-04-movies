import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moviesApi from '../../services/moviesApi';
import styles from './Cast.module.css';

export default class Cast extends Component {
  state = {
    cast: [],
  };

  componentDidMount() {
    const { match } = this.props;
    moviesApi
      .fetchMovieCast(match.params.movieId)
      .then((cast) => this.setState({ cast }));
  }

  addDefaultSrc(e) {
    e.target.src =
      'https://ubisoft-avatars.akamaized.net/cc512ec4-578d-4d8c-978d-b120b9a89e3d/default_256_256.png';
  }

  render() {
    const { cast } = this.state;
    const imagePath = 'https://image.tmdb.org/t/p/w200';
    return (
      <div>
        <ul className={styles.list}>
          {cast.length > 0 ? (
            cast.map((member) => (
              <li key={member.credit_id}>
                <img
                  className={styles.img}
                  src={`${imagePath}/${member.profile_path}`}
                  alt={member.name}
                  onError={this.addDefaultSrc}
                />

                <p className={styles.nameTitle}>
                  Name: <span className={styles.name}>{member.name}</span>
                </p>
                <p className={styles.nameTitle}>
                  Character:
                  <span className={styles.name}>{member.character}</span>
                </p>
              </li>
            ))
          ) : (
            <p className={styles.noCast}>
              We don't have any cast information for this movie.
            </p>
          )}
        </ul>
      </div>
    );
  }
}

Cast.protoTypes = {
  cast: PropTypes.shape({
    name: PropTypes.string.isRequired,
    profile_path: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
  }).isRequired,
};
