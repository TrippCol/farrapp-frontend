import React, { Component } from "react";
import { Summary } from './Summary';
import { ProfileForm } from './ProfileForm'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "./App.css";

class App extends Component {

  HomeView = () => (
    <Summary />
  );

  ProfileConfView = () => (
    <ProfileForm />
  );


  render() {
    console.log(window.location);
    if (window.location.pathname === "/settings") {
      return (
        <Router>
          <Route exact path="/settings" component={this.ProfileConfView} />
        </Router>
      );
    }
    else if (window.location.pathname === "/") {
      return (
        <Router>
          <div>
            <Route exact path="/" component={this.HomeView} />
          </div>
        </Router>
      );
    }

  }
}

export default App;
