import React from 'react';
import classes from './Toolbar.css';
import Logo from '../Logo';

const toolbar = props => (
  <header className={classes.Toolbar}>
    <Logo />
  </header>
);

export default toolbar;
