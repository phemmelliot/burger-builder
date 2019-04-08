import React, { useState } from 'react';
import classes from './Layout.css'
import Toolbar from '../Toolbar'
import SideDrawer from '../SideDrawer';

const layout = props => {
  const [layoutState, setLayoutState] = useState({
    showSideDrawer: false
  });

  const sideDrawerHandler = () => {
    setLayoutState({
      showSideDrawer: !layoutState.showSideDrawer,
    });
  }

  return(
    <>
      <SideDrawer 
        showSideDrawer={layoutState.showSideDrawer}
        showDrawerHandler={sideDrawerHandler}/>
      <Toolbar showDrawerHandler={sideDrawerHandler}/>
      <main className={classes['burger-margin']}>
        {props.children}
      </main>
    </>
  );
}

export default layout;
