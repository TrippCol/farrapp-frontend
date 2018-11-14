import React, { Component } from "react";
import Landing from "./views/Landing";
import Register from "./views/Register";
import Login from "./views/Login";
import ProfileView from "./views/ProfileView";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import "antd/dist/antd.css";
import { ProfileForm } from "../ProfileForm";
import AppUser from "./views/AppUser";
import CreatorApp from "./views/CreatorApp";

class App extends Component {
  landing = () => <Landing />;

  LoginView = () => <Login />;

  SignUpView = () => <Register />;

  ProfileConfView = () => <ProfileForm />;

  render() {
    let routeOptions;
    if (localStorage.getItem("isLoggedIn")) {
      routeOptions = (
        <Switch>
          <Route exact path="/admin" component={CreatorApp} />
          <Route exact path="/settings" component={ProfileView} />
          <Route exact path="/" component={AppUser} />
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
