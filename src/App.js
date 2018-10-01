import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import farrappLogo from "./farrappLogo.svg";
import "./App.css";
import { SignUp } from "./signup/SignUp";
import { Login } from "./Login";
import {Summary} from "./Summary";
import {ProfileForm} from "./ProfileForm";
class App extends Component {


  LoginView = () => (
    <Login />
  );

  SignUpView = () => (
    <SignUp />
  );

  HomeView = () => (
    <Summary />
  );

  ProfileConfView = () => (
    <ProfileForm />
  );

  SummaryView = () => (
    <Summary />
  );

  render() {
    return (
      <Router>
        <div className="">
          
          <Route exact path="/login" component={this.LoginView} />
          <Route exact path="/signup" component={this.SignUpView} />
          <Route exact path="/settings" component={this.ProfileConfView} />
          <Route exact path="/" component={this.HomeView} />
        </div>
      </Router>
    );
  }
}

export default App;
