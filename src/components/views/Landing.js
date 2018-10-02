import React, { Component } from "react";
import LandingHeader from "../bars/LandingHeader";
import { Row } from "antd";
import AppFooter from "../shared/AppFooter";

class Landing extends Component {
  state = {};
  render() {
    return (
      <div>
        <Row>
          <LandingHeader />
        </Row>

        <Row />
        <Row>
          <AppFooter />
        </Row>
      </div>
    );
  }
}

export default Landing;
