import React, { Component } from "react";
import farrappLogo from "./farrappLogo.svg";
import "./App.css";
import {Login} from "./Login";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={farrappLogo} className="App-logo" alt="logo" />
          <h1 className="App-title">Farrapp</h1>
        </header>
        <Login></Login>
      </div>
    );
  }
}

export default App;
