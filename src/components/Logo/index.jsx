import React from 'react';
import classes from './Logo.css';
import Logo from '../../assets/burger-logo.png';

const logo = props => (
  <div className={classes.Logo}>
    <img src={Logo} alt={'burger icon'}/>
  </div>
);

export default logo;

