import React from 'react';
import classes from './Layout.css'
import Toolbar from '../Toolbar'

const layout = props => (
  <>
    <Toolbar />
    <main className={classes['burger-margin']}>
      {props.children}
    </main>
  </>
);

export default layout;

