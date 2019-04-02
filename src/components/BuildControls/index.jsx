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
      {controls}
    </div>
  )
}

export default buildControls;
