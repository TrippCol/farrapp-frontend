import React, { Component } from "react";
import farrappLogo from "./farrappLogo.svg";
import "./App.css";
import { SignUp } from "./signup/SignUp";
import { Login } from "./Login";
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import PartyApp from "./PartyApp";
import PartyPublisherApp from "./PartyPublisherApp";


class App extends Component {

  PartyView = () => (
    <PartyApp/>
  );

  LoginView = () => (
    <Login/>
  );

  SignUpView = () => (
    <SignUp/>
  );

  PublisherView = ()=>(
    <PartyPublisherApp/>
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
          <Route exact path="/admin" component={this.PublisherView} />
          <Route exact path="/" component={this.PartyView}/>
        </div>
      </Router>
    );
  }
}

export default App;
