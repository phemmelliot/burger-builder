import React from 'react';
import PropTypes from 'prop-types';
import classes from './Burger.css';
import BurgerIngredient from '../BurgerIngredient';

const Burger = props => {
  const cookedIngredients = Object.keys(props.ingredients)
    .map(igName => {
      return [...Array(props.ingredients[igName])].map((_, index) => {
        return <BurgerIngredient key={index} type={igName}/>
      }) 
    })
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top"/>
      {cookedIngredients}
      <BurgerIngredient type="bread-bottom"/>
    </div>
  );
}

Burger.propTypes = { 
  ingredients: PropTypes.object.isRequired
};

export default Burger;

