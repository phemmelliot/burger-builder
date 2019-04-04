import React from 'react';
import classes from './BuildControls.css'
import BuildControl from '../BuildControl';

const buildControls = props => {
  const controls = Object.keys(props.ingredients).map(ingredient => {
    return {
      label: ingredient.charAt(0).toUpperCase() + ingredient.slice(1),
      type: ingredient.toString()
    }
  }).map(control => {
    return <BuildControl key={control.label} {...control}/>
  })
  return (
    <div className={classes.BuildControls}>
      <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
      {controls}
      <button 
        className={classes.OrderButton}
        disabled={!props.purchaseAble}
        onClick={props.purchasing}>
        ORDER NOW
      </button>
    </div>
  )
}

export default buildControls;
