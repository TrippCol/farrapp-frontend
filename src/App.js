import React, { Component } from "react";
import farrappLogo from "./farrappLogo.svg";
import "./App.css";
import { SignUp } from "./signup/SignUp";
import { Login } from "./Login";
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import {Login} from "./Login";
import FarrApp from "./FarrApp";
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {

  PartyView = () => (
    <FarrApp />
  );

  LoginView = () => (
    <Login />
  );

  SignUpView = () => (
    <SignUp />
  );

  render() {
    return (

      <Router>
        <div className="App">
          <header className="App-header">
            <img src={farrappLogo} className="App-logo" alt="logo" />
            <h1 className="App-title">Tripp</h1>
          </header>
          <Route exact path="/login" component={this.LoginView} />
          <Route exact path="/signup" component={this.SignUpView} />
          <Route exact path="/" component={this.PartyView} />
        </div>
      </Router>
    );
  }
}

export default App;
