import React from 'react';
import classes from './Layout.css'

const layout = props => (
  <>
    <div>
      Toolbar, Sidebar and backdrop
    </div>
    <main className={classes['burger-margin']}>
      {props.children}
    </main>
  </>
);

export default layout;

