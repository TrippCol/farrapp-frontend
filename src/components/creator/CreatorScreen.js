import React, { Component } from "react";
import NewPartyForm from "../forms/NewPartyForm";
import { Layout, List} from "antd";
import axios from "axios";
import CreatorPartySummary from "./CreatorPartySummary";

class CreatorScreen extends Component {
  state = {foundParties:{}};

  componentDidMount(){
    axios
    .get(
      "https://farrapp-api.herokuapp.com/parties/creator/" +
        JSON.parse(localStorage.profileInfo).name
    )
    .then(function(response) {
      this.setState({ foundParties: response.data });
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  renderSummary = () => {
    return Object.values(this.state.foundParties).map(prt => {
      return (
        <CreatorPartySummary
          key={prt.partyName}
          party={prt}
          focusHandler={this.handleFocusParty}
        />
      );
    });
  };

  render() {
    if (this.props.siderOption === "1") {
      return (
        <Layout>
          <NewPartyForm />
        </Layout>
      );
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

export default CreatorScreen;
