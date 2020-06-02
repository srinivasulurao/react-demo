import React, { Component } from 'react';
import logo from './logo.svg';
import './assets/helloreact.css';
import {Login} from './components/Login'; 
import { BrowserRouter, Route } from 'react-router-dom';
import Register from './components/Register';

class App extends Component{
  render(){
    return (
      <BrowserRouter>
         <Route exact path='/' component={Login} />
         <Route exact path='/login' component={Login} />
         <Route path='/register' component={Register} />
      </BrowserRouter>
    )
  }
}

export default App;
