import React, { Component } from 'react';
import Order from '../../components/Order'
import http from '../../utils/http';
import withErrorHandler from '../withErrorHandler';
import Spinner from '../../components/Spinner';

class Orders extends Component {
  state = {
    isLoading: true,
    data: {}
  }

  componentDidMount(){
    http.get('/orders.json')
    .then((response) => {
      console.log(response);
      this.setState(() => ({
        isLoading: false,
        data: response.data
      }));
    })
    .catch((error) => {
      console.log(error)
      this.setState(() => ({
        isLoading: false,
      }))
    });
  }

  renderOrders = () => {
    const refinedData = [];
    for(let key in this.state.data){
      refinedData.push({
        ...this.state.data[key],
        id: key
      })
    }
    return refinedData.map(order => 
      <Order
        key={order.id}
        ingredients={order.ingredients}
        price={order.price}/>
    );
  }

  render() {
    return (
      this.state.isLoading 
      ? <Spinner /> :
      <div>
        {this.renderOrders()}
      </div>
    )
  }
}

export default Orders;
