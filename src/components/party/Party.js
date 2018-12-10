import React, { Component } from "react";
import { Row, Col, Button, Icon } from "antd";
import PartyReserve from "./PartyReserve";

import "../../css/app-party.css";

class Party extends Component {
  state = { open: false };

  reserveHandler = () => {
    this.setState({ open: !this.state.open });
  };

  check = () => {
    const assitants = this.props.party.assistants;
    var enrrolled = false;
    assitants.forEach(element => {
      if (
        element.name === JSON.parse(localStorage.getItem("profileInfo")).name
      ) {
        enrrolled = true;
      }
    });
    return enrrolled;
  };

  render() {
    return (
      <div className="party">
        <Row>
          <Col span={12}>
            <div className="info-col">
              <div className="title">{this.props.party.partyName}</div>
              <br />
              <div className="place">
                <Icon type="environment" />
                {" " + this.props.party.place + " " + this.props.party.address}
              </div>
              <br />
              <div className="date">
                <Icon type="calendar" />
                {" " + this.props.party.eventDate}
              </div>
              <br />

              <div className="time">
                <Icon type="clock-circle" />
                {" " + this.props.party.eventHour}
              </div>
              <br />

              <div className="creator">
                {"CREADOR: " + this.props.party.creator}
              </div>
              <br />

              <hr />
              <div className="description">{this.props.party.description}</div>
              <br />

              <div className="dress">
                <Icon type="skin" />
                {" " + this.props.party.dressCode}
              </div>
              <br />

              <div className="people">
                {this.props.party.assistants.length + " asistiran."}
              </div>
              <br />

              <hr />
              <div className="cover">
                <Icon type="dollar" />
                {" " + this.props.party.price + "$"}
              </div>
              <br />

              <div className="menu">
                {"Carta: "}
                <ul>
                  {this.props.party.cartaDeProductos.map(item => (
                    <li key={item.name}>
                      {item.name + ": " + item.price + "$"}
                    </li>
                  ))}
                </ul>
              </div>
              <br />

              <div className="tags">
                {"Categorias: "}
                <ul>
                  {this.props.party.categories.map(tag => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
              <br />
            </div>
          </Col>
          <Col span={12}>
            <img
              alt="example"
              src="https://eventsiteimage.s3.amazonaws.com/sitegaleries/887/files/blog/armando-records.jpg?1504025185"
              onClick={this.clickHanlder}
            />
            <br />
            <Row>
              <br />
              <Button
                type="primary"
                icon="like"
                size="default"
                style={{ backgroundColor: "#fe4234", borderColor: "#fe4234" }}
              >
                Me gusta
              </Button>
              <Button
                type="primary"
                icon="share-alt"
                size="default"
                style={{ backgroundColor: "#fe4234", borderColor: "#fe4234" }}
              >
                Compartir
              </Button>
              <Button
                type="primary"
                onClick={this.reserveHandler}
                style={{ backgroundColor: "#fe4234", borderColor: "#fe4234" }}
                disabled={this.check()}
              >
                Reservar
              </Button>
            </Row>
          </Col>
        </Row>
        {this.state.open ? (
          <PartyReserve
            handleClose={this.reserveHandler}
            partyId={this.props.party.id}
          />
        ) : null}
      </div>
    );
  }
}

export default Party;
