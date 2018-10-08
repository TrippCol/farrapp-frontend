import React, { Component } from "react";
//import "./App.css";
import Landing from "./views/Landing";
import Register from "./views/Register";
import Login from "./views/Login";
//import { Login } from "./views/Login";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import PartyUserApp from "../PartyUserApp";
import "antd/dist/antd.css";
import PartyPublisherApp from "../PartyPublisherApp";
import { ProfileForm } from "../ProfileForm";
import { Summary } from "../Summary";
import AppHeader from "./bars/AppHeader";

class App extends Component {
  PartyView = () => <PartyUserApp />;

  landing = () => <Landing />;

  LoginView = () => <Login />;

  SignUpView = () => <Register />;

  PublisherView = () => <PartyPublisherApp />;

  HomeView = () => <Summary />;

  ProfileConfView = () => <ProfileForm />;

  SummaryView = () => <Summary />;

  render() {
    let routeOptions;
    if (localStorage.getItem("isLoggedIn")) {
      routeOptions = (
        <Switch>
          <Route exact path="/admin" component={this.PublisherView} />
          <Route exact path="/settings" component={this.ProfileConfView} />
          <Route exact path="/" component={this.PartyView} />
          <Route exact path="/test" component={AppHeader} />
          <Redirect to="/" />
        </Switch>
      );
    } else {
      routeOptions = (
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={this.LoginView} />
          <Route exact path="/register" component={this.SignUpView} />

          <Redirect to="/" />
        </Switch>
      );
    }
    return (
      <div>
        <Router>{routeOptions}</Router>
      </div>
    );
  }
}

export default App;
