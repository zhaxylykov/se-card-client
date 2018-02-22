import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions'

import Menu from './menu';
import Content from './content';

import Header from './Header';
import Landing from './Landing';
import Footer from './Footer';
const Login = () => <h2>Login</h2>
const Main = () => <h2>Game</h2>

class App extends Component {

  componentDidMount() {
    this.props.fetchUser();
  }


  render() {
    return(
	/*
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />11111
            <Route exact path="/" component={Landing} />
            <Route path="/main" component={Main} />
            <Route path="/login" component={Login} />22222
            <Footer />
          </div>
        </BrowserRouter>      
      </div>
	  */
	  <div className="container">
        <BrowserRouter>
          <div>
			<Menu />
			<Content />
          </div>
        </BrowserRouter>      
      </div>
    );
  }
};

export default connect(null, actions) (App);