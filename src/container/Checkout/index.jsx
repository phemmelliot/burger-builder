import React, { Component } from 'react';
import CheckoutSummary from '../../components/CheckoutSummary';
import BurgerContext from '../../components/BurgerContext';
import { Route } from 'react-router-dom';
import Contact from '../Contact';

class Checkout extends Component {
  state = {
    ingredients: {
      salad: 0,
      meat: 0,
      cheese: 0,
      bacon: 0
    },
    price: 4,
  }
  static contextType = BurgerContext;

  componentDidMount() {
    const params = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    let price;
    for(let param of params.entries()){
      if(param[0] === 'price'){
          price = param[1]
      } else {
        ingredients[param[0]] = param[1];
      }
    }

    this.setState({
      ingredients,
      price
    });
  }

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  }

  checkoutContinuedHandler = () => {
    this.props.history.replace('/checkout/contact-data')
  }

  render() {
    const { ingredients } = this.state;
    return (
      <div>
        <CheckoutSummary
          ingredients={ingredients}
          cancel={this.checkoutCancelledHandler}
          continue={this.checkoutContinuedHandler}/>
        <Route
          path={this.props.match.path + '/contact-data'}
          render={() => <Contact ingredients={this.state.ingredients} price={this.state.price}/>}/>
      </div>
    )
  }
}

export default Checkout;
