import React, { Component } from "react";
import farrappLogo from "./farrappLogo.svg";
import "./App.css";
import { SignUp } from "./signup/SignUp";
import { Login } from "./Login";
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

class App extends Component {

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
          <Route exact path="/" component={this.LoginView} />
          <Route exact path="/signup" component={this.SignUpView} />
        </div>
      </Router>
    );
  }
}

export default App;
