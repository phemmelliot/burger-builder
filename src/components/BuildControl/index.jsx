import React from 'react';
import classes from './BuildControl.css'
import BurgerContext from '../BurgerContext';

const buildControl = props => {
  return (
    <BurgerContext.Consumer>
      {({addIngredient, removeIngredient}) => {
        return (
          <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button
              className={classes.Less}
              onClick={() => removeIngredient(props.type)}>
              Less
            </button>
            <button
             className={classes.More}
             onClick={() => addIngredient(props.type)}>
             More
            </button>
          </div>
        );
      }}
    </BurgerContext.Consumer>
  )
}

export default buildControl;
