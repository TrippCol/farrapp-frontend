import React, { Component } from "react";
import LandingHeader from "../bars/LandingHeader";
import AppFooter from "../shared/AppFooter";
import LoginForm from "../forms/LoginForm";

import "../../css/login.css";

class Login extends Component {
  render() {
    return (
      <div>
        <LandingHeader />
        <div className="login">
          <LoginForm />
        </div>
        <AppFooter />
      </div>
    );
  }
}

export default Login;
