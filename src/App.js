import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './component/header'
import './App.css';
import Content from './component/content';
import {Route,Switch} from 'react-router-dom';
import Cart from './component/cart';
class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route path="/" exact component={Content}/>
          <Route path="/cart" component={Cart}/>
        </Switch>
      </div>
    );
  }
}

export default App;
