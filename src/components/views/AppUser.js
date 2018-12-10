import React, { Component } from "react";
import AppFooter from "../shared/AppFooter";
import AppHeader from "../bars/AppHeader";
import SiderUserBar from "../bars/SiderUserBar";
import PartyScreen from "../party/PartyScreen";
import { Layout } from "antd";

class AppUser extends Component {
  state = { siderOption: "1" };

  clickHome = e => {
    this.setState({ siderOption: "1" });
  };

  clickMyParties = e => {
    this.setState({ siderOption: "2" });
  };

  render() {
    return (
      <Layout>
        <AppHeader />
        <Layout>
          <SiderUserBar
            clickHome={this.clickHome}
            clickMyParties={this.clickMyParties}
          />
          <PartyScreen option={this.state.siderOption} />
        </Layout>
        <AppFooter />
      </Layout>
    );
  }
}

export default AppUser;
