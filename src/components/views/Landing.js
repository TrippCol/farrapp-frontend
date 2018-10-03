import React, { Component } from "react";
import LandingHeader from "../bars/LandingHeader";
import { Row, Col } from "antd";
import AppFooter from "../shared/AppFooter";
import "../../css/landing.css";

class Landing extends Component {
  state = {};
  render() {
    return (
      <div>
        <Row>
          <LandingHeader />
        </Row>
        <Row>
          <div className="info">
            <Col span={9} className="info-col">
              <h2 className="info-h2">
                Las preocupaciones, largos procesos de búsqueda de bares, se
                acabaron con farrapp.
              </h2>
            </Col>
          </div>
        </Row>
        <Row>
          <div className="features">¿Que Ofrecemos?</div>
        </Row>
        <Row>
          <div className="who">¿Quienes Somos?</div>
        </Row>
        <Row>
          <AppFooter />
        </Row>
      </div>
    );
  }
}

export default Landing;
