import React, { Component } from "react";
import { Row, Col, Icon } from "antd";

import "../../css/app-party.css";

class Party extends Component {
  state = {};
  render() {
    return (
      <div className="party">
        <Row>
          <Col span={12}>
            <h1 color="white">{this.props.party.partyName}</h1>
            <p>{this.props.party.place}</p>
            <p>{this.props.party.description}</p>
          </Col>
          <Col span={12} />
        </Row>
      </div>
    );
  }
}

export default Party;
