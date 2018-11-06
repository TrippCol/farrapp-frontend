import React, { Component } from "react";
//import ApiMock from "../../api/ApiMock";
import PartySummary from "./PartySummary";
import Party from "./Party";
import { Layout, List } from "antd";
import { getPartyList } from "../../api/RestController";
import "../../css/app-body.css";
import "../../css/app-party.css";

class PartyScreen extends Component {
  state = { focusParty: false, party: {} };

  handleFocusParty = prty => {
    this.setState({ focusParty: true, party: prty });
  };

  renderSummary = () => {
    
    const parties = this.setParties();
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

  setParties = () => {
    var callback = {
      onSuccess: function(response){
        return response.data;
      },
      onFailed: function(error){
        console.log(error);
        return undefined;
      }
    };

    getPartyList(callback);
  };

  renderParty = () => {
    return <Party party={this.state.party} />;
  };

  render() {
    if (this.state.focusParty) {
      return <Layout className="container-party">{this.renderParty()}</Layout>;
    } else {
      return (
        <Layout className="container-summary">
          <List
            grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }}
            dataSource={this.renderSummary()}
            renderItem={item => <List.Item>{item}</List.Item>}
          />
        </Layout>
      );
    }
  }
}

export default PartyScreen;
