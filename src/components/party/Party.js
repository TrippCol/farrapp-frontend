import React, { Component } from "react";
import { Row, Col, Button } from "antd";

import "../../css/app-party.css";

class Party extends Component {
  state = {};
  render() {
    return (
      <div className="party">
        <Row>
          <Col span={12}>
            <div color="white">{this.props.party.partyName}</div>
            <div>{this.props.party.place}</div>
            <div>{this.props.party.eventDate}</div>
            <div>{this.props.party.description}</div>
            <div>{this.props.party.address}</div>
            <div>{this.props.party.price}</div>
          </Col>
          <Col span={12}>
            <img
              alt="example"
              src="https://eventsiteimage.s3.amazonaws.com/sitegaleries/887/files/blog/armando-records.jpg?1504025185"
              onClick={this.clickHanlder}
            />
            <Row>
              <Button type="primary" icon="heart" size={100}>
                Me gusta
              </Button>
              <Button type="primary" icon="share-alt" size={100}>
                Compartir
              </Button>
              <Button type="primary">Bow</Button>
            </Row>
            <div>Comentarios</div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Party;
