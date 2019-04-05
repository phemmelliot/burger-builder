import React from 'react';
import classes from './Navigation.css';

const navigation = props => (
  <ul className={classes.Navigation}>
    <li className={classes.List}>
      <a className={classes.Link} href="/">
        Burger Builder
      </a>
    </li>
    <li className={classes.List}>
      <a className={classes.Link} href="/">
        Checkout
      </a>
    </li>
  </ul>
);

export default navigation;
