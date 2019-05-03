import React from 'react';
import Burger from '../Burger';
import Button from '../Button';
import classes from './Checkout.css';

const checkOutSummary = (props) => {
  console.log(props.ingredients);
  return (
    <div className={classes.Checkout}>
      <h1>We hope you enjoy it</h1>
      <div style={{ width: '100%', height: '300px', margin: 'auto'}}>
        <Burger ingredients={props.ingredients}/>
        <Button type="Danger">CANCEL</Button>
        <Button type="Success">CONTINUE</Button>
      </div>
    </div>
  )
}

export default checkOutSummary;
