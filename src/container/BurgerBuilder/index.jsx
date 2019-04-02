import React, { Component } from 'react';
import Burger from '../../components/Burger';
import BuildControls from '../../components/BuildControls';
import BurgerContext from '../../components/BurgerContext';

const INGREDIENTS_PRICES = {
  salad: 0.6,
  bacon: 0.4,
  cheese: 0.9,
  meat: 2.0,
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      meat: 0,
      cheese: 0,
      bacon: 0
    },
    price: 4,
    purchaseAble: false,
  }

  updatePurchaseState = () => {
    this.setState((prevState) => {
      const sum = Object.keys(prevState.ingredients)
                    .map(igKey => prevState.ingredients[igKey])
                    .reduce((total, el) => total + el, 0)
      return {
        purchaseAble: sum > 0
      }
    })
  }

  addIngredient = type => {
    this.setState((prevState, props) => {
        return {
          ingredients: {
            ...this.state.ingredients,
            [type]: prevState.ingredients[type] + 1
          },
          price: prevState.price + INGREDIENTS_PRICES[type]
        }
      }
    )
    this.updatePurchaseState();
  }

  removeIngredient = type => {
    this.setState((prevState, props) => ({
      ingredients: {
        ...prevState.ingredients,
        [type]: ((prevState.ingredients[type] === 0)
          ? prevState.ingredients[type]
          : prevState.ingredients[type] - 1) 
      },
      price: (prevState.ingredients[type] === 0)
       ? prevState.price
       : prevState.price - INGREDIENTS_PRICES[type]
     }
    ))
    this.updatePurchaseState();
  }

  render(){
    return(
      <>
        <Burger ingredients={this.state.ingredients}/>
        <BurgerContext.Provider value = {{ 
          addIngredient: this.addIngredient,
          removeIngredient: this.removeIngredient}}>
          <BuildControls
            ingredients={this.state.ingredients}
            price={this.state.price}
            purchaseAble={this.state.purchaseAble}/>
        </BurgerContext.Provider>
      </>
    )
  }
}

export default BurgerBuilder;
