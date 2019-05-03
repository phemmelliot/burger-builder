import React, { Component } from 'react';
import Burger from '../../components/Burger';
import BuildControls from '../../components/BuildControls';
import BurgerContext from '../../components/BurgerContext';
import Modal from '../../components/Modal';
import Button from '../../components/Button';
import http from '../../utils/http';
import Spinner from '../../components/Spinner';
import withErrorHandler from '../withErrorHandler';
import classes from './BurgerBuilder.css';


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
    purchasing: false,
    isLoading: false,
    error: null,
  }

  componentDidMount() {
    http.get('/ingredients.json')
      .then(response => {
        this.setState({
          ingredients: response.data,
          })
        this.updatePurchaseState();
        this.calculatePrice();
        }).catch(error => this.setState({
        error
      }));
  }

  calculatePrice() {
    const sumArray = Object.keys(this.state.ingredients).map(igKey => 
      INGREDIENTS_PRICES[igKey]*this.state.ingredients[igKey]);
    const sum = sumArray.reduce((total, el) => total + el, 0);
    this.setState({
      price: sum + 4
    });
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

  updatePurchasingState = () => {
    console.log("Inside purchasing state");
    this.setState((prevState) => ({
      purchasing: !prevState.purchasing,
    }));
  }

  continuePurchasing = () => {
    // const order = {
    //   ingredients: this.state.ingredients,
    //   customer: {
    //     name: 'First customer',
    //     address: {
    //       country: 'Nigeria',
    //       state: 'Ondo',
    //       street: 'Yaba'
    //     },
    //     email: 'testUser@test.com'
    //   },
    //   deliveryMethod: 'fast',
    //   price: this.state.price,
    // }

    // this.setState({
    //   isLoading: true,
    // })
    // http.post('/orders.json', order)
    //   .then((response) => {
    //     this.setState(() => ({
    //       isLoading: false,
    //       purchasing: false,
    //     }));
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //     this.setState(() => ({
    //       isLoading: false,
    //       purchasing: false,
    //     }))
    //   });
    this.props.history.push('/checkout');
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

  renderModal = () => {
    const orderedIngredients = Object.keys(this.state.ingredients)
      .map(igKey =>
         <li key={igKey}>
          {igKey.charAt(0).toUpperCase() + igKey.slice(1)}: {this.state.ingredients[igKey]}
         </li>);

    const modalChildren = this.state.isLoading ? <Spinner /> : (
      <div>
        <h1>Your Order</h1>
        <p>A delicious burger with the following ingredients: </p>
        <ul>
          {orderedIngredients}
        </ul>
        <p><strong>Total Price: {this.state.price.toFixed(2)}</strong></p>
        <p>Continue to checkout?</p>
        <Button 
          type={'Success'}
          onClick={this.continuePurchasing}>
          Continue
        </Button>
        <Button
          type={'Danger'}
          onClick={this.updatePurchasingState}>
          Cancel
          </Button>
      </div>
    );

    return (
      <Modal show={this.state.purchasing}>
        {modalChildren}
      </Modal>
    )
  }

  render(){
    return(
      <>
        <BurgerContext.Provider value = {{ 
          addIngredient: this.addIngredient,
          removeIngredient: this.removeIngredient,
          cancelModal: this.updatePurchasingState,
          ingredients: this.state.ingredients }}>
          {this.renderModal()}
          {this.state.ingredients
             ? <div className={classes.Burger}>
                 <Burger ingredients={this.state.ingredients}/>
               </div>
              : <Spinner />}
          <BuildControls
            ingredients={this.state.ingredients}
            price={this.state.price}
            purchaseAble={this.state.purchaseAble}
            purchasing={this.updatePurchasingState}/>
        </BurgerContext.Provider>
      </>
    )
  }
}

export default withErrorHandler(BurgerBuilder, http);
