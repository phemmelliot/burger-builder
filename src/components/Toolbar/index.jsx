import React from 'react';
import classes from './Toolbar.css';
import Logo from '../Logo';
import Navigation from '../Navigation';

const toolbar = props => (
  <header className={classes.Toolbar}>
    <Logo />
    <Navigation />
  </header>
);

export default toolbar;
