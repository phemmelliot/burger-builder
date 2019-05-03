import React from 'react';
import classes from './Navigation.css';
import { NavLink } from 'react-router-dom';

const navigation = props => (
  <ul className={classes.Navigation}>
    <li className={classes.List}>
      <NavLink 
        activeClassName={classes.active}
        className={classes.Link}
        exact
        to="/">
        Burger Builder
      </NavLink>
    </li>
    <li className={classes.List}>
      <NavLink
        activeClassName={classes.active}
        className={classes.Link}
        to="/orders">
        Orders
      </NavLink>
    </li>
  </ul>
);

export default navigation;
