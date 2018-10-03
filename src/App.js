import React, { Component } from "react";
import farrappLogo from "./resources/farrappLogo.svg";
import "./App.css";
import { SignUp } from "./signup/SignUp";
import { Login } from "./login/Login";
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import PartyUserApp from "./PartyUserApp";
import PartyPublisherApp from "./PartyPublisherApp";
import { ProfileForm } from "./ProfileForm";
import { Summary } from "./Summary";

class App extends Component {

  PartyView = () => (
    <PartyUserApp/>
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
        <Route exact path="/admin" component={this.PublisherView} />
        <Route exact path="/settings" component={this.ProfileConfView} />
        <Route exact path="/" component={this.PartyView} />
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
      <div className="App">
          <header className="App-header">
            <img src={farrappLogo} className="App-logo" alt="logo" />
            <h1 className="App-title">Boow</h1>
          </header>
          <Router>
          {routeOptions}
          </Router>
        </div>      
    );
  }
}

export default App;
