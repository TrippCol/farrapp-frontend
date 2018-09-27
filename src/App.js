import React, { Component } from "react";
import farrappLogo from "./farrappLogo.svg";
import "./App.css";
import {Login} from "./Login";
import FarrApp from "./FarrApp";
import {BrowserRouter as Router, Route} from 'react-router-dom';
class App extends Component {

  PartyView = () => (
    <FarrApp />
  );

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={farrappLogo} className="App-logo" alt="logo" />
          <h1 className="App-title">Tripp</h1>
        </header>
        <Router>
          <div>
            <Route exact path="/" component={this.PartyView} />
          </div>
        </Router>);
      </div>
    );
  }
}

export default App;
