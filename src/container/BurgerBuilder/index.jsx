import React, { Component } from 'react';
import Burger from '../../components/Burger';

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 2,
      meat: 1,
      cheese: 2,
      bacon: 1
    }
  }
  render(){
    return(
      <>
        <Burger ingredients={this.state.ingredients}/>
        <div>Build Control</div>
      </>
    )
  }
}

export default BurgerBuilder;
