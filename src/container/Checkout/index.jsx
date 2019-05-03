import React, { Component } from 'react';
import CheckoutSummary from '../../components/CheckoutSummary';
import BurgerContext from '../../components/BurgerContext';

class Checkout extends Component {
  static contextType = BurgerContext;

  render() {
    const { ingredients } = this.context;
    return (
      <div>
        <CheckoutSummary ingredients={ingredients}/>
      </div>
    )
  }
}

export default Checkout;
