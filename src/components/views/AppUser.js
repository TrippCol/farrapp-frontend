import React, { Component } from "react";
import AppFooter from "../shared/AppFooter";
import AppHeader from "../bars/AppHeader";
import SiderUserBar from "../bars/SiderUserBar";
import PartyScreen from "../party/PartyScreen";
import { Layout } from "antd";

class AppUser extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <AppHeader />
        <Layout>
          <SiderUserBar />
          <PartyScreen />
        </Layout>
        <AppFooter />
      </Layout>
    );
  }
}

export default AppUser;
