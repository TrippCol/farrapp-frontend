import React, { Component } from "react";
//import ApiMock from "../../api/ApiMock";
import PartySummary from "./PartySummary";
import Party from "./Party";
import { Layout, List } from "antd";
import { getPartyList } from "../../api/RestController";
import "../../css/app-body.css";
import "../../css/app-party.css";
import axios from "axios";

class PartyScreen extends Component {
  state = { focusParty: false, party: {} };

  handleFocusParty = prty => {
    this.setState({ focusParty: true, party: prty , parties:null});
  };

  renderSummary = async () => {
    var self = this;
    //try{
      const response = await axios.get("https://farrapp-api.herokuapp.com/parties");
      return Object.values(response.data).map(prt => {
        return (
          <PartySummary
            key={prt.partyName}
            party={prt}
            focusHandler={self.handleFocusParty}
          />
        );
      });
    //}catch(error){
      //console.error(error);
    //}
    //return undefined;
    /*axios.get("https://farrapp-api.herokuapp.com/parties")
      .then(function (response) {
        var parties = response.data;
        var data = (self.renderAll(parties));
        self.setState({parties:data});
      })
      .catch(function (error) {
        console.log(error);
        data = undefined;
      });*/
  };

  renderAll = (parties) => {
    var self = this;
    return Object.values(parties).map(prt => {
      return (
        <PartySummary
          key={prt.partyName}
          party={prt}
          focusHandler={self.handleFocusParty}
        />
      );
    });
  };

  /*setParties = () => {
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
  };*/

  renderParty = () => {
    return <Party party={this.state.party} />;
  };

  render() {
    if (this.state.focusParty) {
      return <Layout className="container-party">{this.renderParty()}</Layout>;
    } else {
      console.log(this.renderSummary());
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
