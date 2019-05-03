import React from 'react';
import classes from './Order.css';

const order = (props) => {
  const ingredientsList = () => {
    const ingredientsKey = [];
    for(let key in props.ingredients){
      ingredientsKey.push(key);
    }

    return ingredientsKey.map(igKey => 
        <span
          key={igKey}
          className={classes.Ingredients}>
          {igKey}({props.ingredients[igKey]})
        </span>
      );
  };

  return(
    <div className={classes.Order}>
      <p>Ingredients: {ingredientsList()}</p>
      <p>Price: <strong>{props.price}</strong></p>
    </div>
  )
}

export default order;
