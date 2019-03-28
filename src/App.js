import React, { Component } from 'react';
import classes from './App.css';
import Layout from './components/Layout';
import BurgerBuilder from './container/BurgerBuilder'

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
