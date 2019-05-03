import React from 'react';
import classes from './Navigation.css';
import { NavLink } from 'react-router-dom';

const navigation = props => (
  <ul className={classes.Navigation}>
    <li className={classes.List}>
      <NavLink className={classes.Link} to="/">
        Burger Builder
      </NavLink>
    </li>
    <li className={classes.List}>
      <NavLink className={classes.Link} to="/checkout">
        Checkout
      </NavLink>
    </li>
  </ul>
);

export default navigation;
