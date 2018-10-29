import React, { Component } from "react";
import ApiMock from "../../api/ApiMock";
import PartySummary from "./PartySummary";
import Party from "./Party";
import { Layout } from "antd";

import "../../css/app-body.css";
import "../../css/app-party.css";

class PartyScreen extends Component {
  state = { focusParty: false, party: {} };

  handleFocusParty = prty => {
    this.setState({ focusParty: true, party: prty });
  };

  renderSummary = () => {
    const parties = ApiMock.getParties();
    return parties.map(prt => {
      return (
        <PartySummary
          key={prt.partyName}
          party={prt}
          focusHandler={this.handleFocusParty}
        />
      );
    });
  };

  renderParty = () => {
    return <Party party={this.state.party} />;
  };

  render() {
    if (this.state.focusParty) {
      return <Layout className="container-party">{this.renderParty()}</Layout>;
    } else {
      return (
        <Layout className="container-summary">{this.renderSummary()}</Layout>
      );
    }
  }
}

export default PartyScreen;
