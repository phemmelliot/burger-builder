import React from 'react';
import classes from './Toolbar.css';
import Logo from '../Logo';
import Navigation from '../Navigation';

const toolbar = props => (
  <header className={classes.Toolbar}>
    <div 
      className={classes.Menu}
      onClick={props.showDrawerHandler}>
      Menu
    </div>
    <Logo />
    <div className={classes.Navigation}>
      <Navigation />
    </div>
  </header>
);

export default toolbar;
