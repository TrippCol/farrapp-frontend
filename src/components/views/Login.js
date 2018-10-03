import React, { Component } from "react";
import LandingHeader from "../bars/LandingHeader";
import { Row, Col } from "antd";
import AppFooter from "../shared/AppFooter";
import LoginForm from "../forms/LoginForm";
import ReactSVG from "react-svg";
import logo from "../../img/name.svg";

import "../../css/login.css";
import "../../css/stroke-anim.css";

class Login extends Component {
  render() {
    return (
      <div>
        <LandingHeader />
        <div className="login">
          <Row align="middle">
            <Col>
              <LoginForm />
            </Col>
          </Row>
        </div>
        <AppFooter />
      </div>
    );
  }
}

export default Login;
