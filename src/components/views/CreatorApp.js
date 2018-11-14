import React, { Component } from "react";
import AppFooter from "../shared/AppFooter";
import CreatorHeader from "../bars/CreatorHeader";
import SiderCreatorBar from "../bars/SiderCreatorBar";
import CreatorScreen from "../creator/CreatorScreen";
import { Layout } from "antd";

class CreatorApp extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <CreatorHeader />
        <Layout>
          <SiderCreatorBar />
          <CreatorScreen />
        </Layout>
        <AppFooter />
      </Layout>
    );
  }
}

export default CreatorApp;
