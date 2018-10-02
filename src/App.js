import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import farrappLogo from "./farrappLogo.svg";
import "./App.css";
import { SignUp } from "./signup/SignUp";
import { Login } from "./Login";
import { Summary } from "./Summary";
import { ProfileForm } from "./ProfileForm";
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
    let routeOptions;
    if (localStorage.getItem("isLoggedIn")) {
      routeOptions = <Switch>
        <Route exact path="/settings" component={this.ProfileConfView} />
        <Route exact path="/" component={this.HomeView} />
        <Redirect to="/"></Redirect>
      </Switch>
    } else {
      routeOptions = <Switch>
        <Route exact path="/login" component={this.LoginView} />
        <Route exact path="/signup" component={this.SignUpView} />
        <Redirect to="/login"></Redirect>
      </Switch>
    }
    return (
      <Router>
        {routeOptions}
      </Router>
    );
  }
}

export default App;
