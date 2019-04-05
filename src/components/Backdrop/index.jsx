import React, {useContext} from 'react';
import classes from './Backdrop.css';
import BurgerContext from '../BurgerContext';

const backdrop = props => {
  const burgerContext = useContext(BurgerContext); 
  return (
    props.show && <div 
      className={classes.Backdrop}
      onClick={burgerContext.cancelModal}></div>
  );
}

export default backdrop;
