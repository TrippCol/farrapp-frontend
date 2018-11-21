import React, { Component } from "react";
import AppFooter from "../shared/AppFooter";
import CreatorHeader from "../bars/CreatorHeader";
import SiderCreatorBar from "../bars/SiderCreatorBar";
import CreatorScreen from "../creator/CreatorScreen";
import { Layout } from "antd";

class CreatorApp extends Component {
  state = { siderOption: "1" };

  clickNewParty = e => {
    this.setState({ siderOption: "1" });
  };

  clickMyParties = e => {
    this.setState({ siderOption: "2" });
  };

  render() {
    return (
      <Layout>
        <CreatorHeader />
        <Layout>
          <SiderCreatorBar
            clickNewParty={this.clickNewParty}
            clickMyParties={this.clickMyParties}
          />
          <CreatorScreen siderOption={this.state.siderOption} />
        </Layout>
        <AppFooter />
      </Layout>
    );
  }
}

export default CreatorApp;
