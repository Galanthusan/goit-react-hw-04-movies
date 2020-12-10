import React from 'react';
import PropTypes from 'prop-types';
import styles from './GoBackButton.module.css';

const GobackButton = ({ onGoback }) => (
  <button type='button' className={styles.GoBackButton} onClick={onGoback}>
    Go back
  </button>
);

GobackButton.protoTypes = {
  onGoback: PropTypes.func.isRequired,
};

export default GobackButton;
