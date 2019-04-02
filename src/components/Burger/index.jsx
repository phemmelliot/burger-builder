import React from 'react';
import PropTypes from 'prop-types';
import classes from './Burger.css';
import BurgerIngredient from '../BurgerIngredient';

const Burger = props => {
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top"/>
      <BurgerIngredient type="cheese"/>
      <BurgerIngredient type="meat"/>
      <BurgerIngredient type="bread-bottom"/>
    </div>
  );
}

Burger.propTypes = {

};

export default Burger;

