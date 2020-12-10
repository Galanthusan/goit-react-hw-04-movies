import React, { Component } from 'react';
import Spinner from 'react-loader-spinner';
import styles from './Loader.module.css';

export default class Loader extends Component {
  render() {
    return (
      <Spinner
        className={styles.Loader}
        type='ThreeDots'
        color='#1be5a8'
        height={55}
        width={55}
        timeout={3000} //3 secs
      />
    );
  }
}
