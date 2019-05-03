import React, { Component } from 'react';
import classes from './App.css';
import Layout from './components/Layout';
import BurgerBuilder from './container/BurgerBuilder'
import Checkout from './container/Checkout';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Layout>
          <Switch>
            <Route path='/checkout'  component={Checkout} />
            <Route exact path='/' component={BurgerBuilder}/>
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
