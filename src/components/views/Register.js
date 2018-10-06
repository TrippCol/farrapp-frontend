import React, { Component } from "react";
import LandingHeader from "../bars/LandingHeader";
import AppFooter from "../shared/AppFooter";
import RegisterForm from "../forms/RegisterForm";

import "../../css/register.css";

class Register extends Component {
  render() {
    return (
      <div>
        <LandingHeader />
        <div className="register">
          <RegisterForm />
        </div>
        <AppFooter />
      </div>
    );
  }
}

export default Register;
