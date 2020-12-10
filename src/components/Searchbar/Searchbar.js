import React, { Component } from 'react';
import styles from './Searchbar.module.css';

export default class Searchbar extends Component {
  state = {
    inputValue: '',
  };

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.inputValue);
    this.setState({ inputValue: '' });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <div className={styles.Searchbar}>
        <form onSubmit={this.handleSubmit} className={styles.SearchForm}>
          <input
            type='text'
            autoComplete='off'
            placeholder='Search movies'
            value={inputValue}
            onChange={this.handleChange}
          ></input>
          <button type='submit' className={styles.SearchFormButton}>
            Seacrh
          </button>
        </form>
      </div>
    );
  }
}
