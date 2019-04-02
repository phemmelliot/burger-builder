import React from 'react';
import PropTypes from 'prop-types';
import classes from './Burger.css';
import BurgerIngredient from '../BurgerIngredient';

const Burger = props => {
  let cookedIngredients = Object.keys(props.ingredients)
    .map(igName => {
      return [...Array(props.ingredients[igName])].map((_, index) => {
        return <BurgerIngredient key={igName+index} type={igName}/>
      }) 
    }).reduce((arr, el) => {
      return arr.concat(el)
    }, []);

    cookedIngredients = (cookedIngredients.length) ? cookedIngredients : "Please add ingredients";

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

