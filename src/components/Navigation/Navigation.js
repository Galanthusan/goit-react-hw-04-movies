import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import * as router from '../../router';

const Navigation = () => (
  <nav className={styles.Navigation}>
    <ul className={styles.list}>
      <li className={styles.listItem}>
        <NavLink
          to='/'
          exact
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          Home
        </NavLink>
      </li>
      <li className={styles.listItem}>
        <NavLink
          to={router.movies}
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          Movies
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
