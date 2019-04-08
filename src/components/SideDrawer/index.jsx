import React from 'react';
import classes from './SideDrawer.css';
import Logo from '../Logo';
import Backdrop from '../Backdrop';

const sideDrawer = props => {
  let drawerClasses = [classes.Close, classes.SideDrawer,];

  if(props.showSideDrawer){
    drawerClasses = [classes.SideDrawer, classes.Open]
  }
  return (
    <>
      <Backdrop show={props.showSideDrawer} closeDrawer={props.showDrawerHandler}/>
      <div className={drawerClasses.join(' ')}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <ul className={classes.Navigation}>
            <li className={classes.List}>
              <a className={[classes.Link, classes.active].join(' ')} href="/">
                Burger Builder
              </a>
            </li>
            <li className={classes.List}>
              <a className={classes.Link} href="/">
                Checkout
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default sideDrawer;
