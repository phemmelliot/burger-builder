import React, { Component } from 'react';
import Button from '../../components/Button';
import classes from './Contact.css';
import http from '../../utils/http';
import Spinner from '../../components/Spinner';
import { withRouter } from 'react-router-dom';

class Contact extends Component {
  state = {
    email: '',
    name: '',
    address: {
      street: '',
      postal: ''
    },
    isLoading: false,
  }

  componentDidMount() {

  }

  orderBurger = (e) => {
    e.preventDefault();
    const order = {
      ingredients: this.props.ingredients,
      customer: {
        name: 'First customer',
        address: {
          country: 'Nigeria',
          state: 'Ondo',
          street: 'Yaba'
        },
        email: 'testUser@test.com'
      },
      deliveryMethod: 'fast',
      price: this.props.price,
    }

    this.setState({
      isLoading: true,
    })
    http.post('/orders.json', order)
      .then((response) => {
        console.log(response);
        this.setState(() => ({
          isLoading: false,
        }));
        this.props.history.push('/');
      })
      .catch((error) => {
        console.log(error)
        this.setState(() => ({
          isLoading: false,
        }))
      });
  }

  render() {
    return (
      this.state.isLoading
       ? <Spinner /> :
      <div className={classes.Contact}>
        <h2>Your Contact Form</h2>
        <form>
          <input type="text" placeholder="Your Name" name="name"/>
          <input type="email" placeholder="Your Email" name="email"/>
          <input type="text" placeholder="Street" name="street"/>
          <input type="text" placeholder="Postal Code" name="postal"/>
          <Button
            type="Success"
            onClick={this.orderBurger}>
            Order Now
          </Button>
        </form>
      </div>
    );
  }
}

export default withRouter(Contact);
