import React, { Component } from "react";
import { Login } from "./Login";
import name from "../img/name.svg";
import ReactSVG from "react-svg";
import { Layout, Menu, Breadcrumb } from "antd";
import "antd/dist/antd.css";
import RegisterForm from "./forms/RegisterForm";

class App extends Component {
  render() {
    return <RegisterForm />;
  }

  /*render() {
    const { Header, Content, Footer } = Layout;
    return   (
      <div className="">
        <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>

        </Content>
      </Layout>
        <div className="name-wrapper">
        <ReactSVG src={name}/>
        </div>

      </div>

    );
  }*/
}

export default App;
