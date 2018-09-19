import React, { Component } from "react";
import farrappLogo from "./farrappLogo.svg";
import "./App.css";
import {SignUp} from "./signup/SignUp";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={farrappLogo} className="App-logo" alt="logo" />
          <h1 className="App-title">Tripp</h1>
        </header>
        <SignUp></SignUp>
      </div>
    );
  }
}

export default App;
