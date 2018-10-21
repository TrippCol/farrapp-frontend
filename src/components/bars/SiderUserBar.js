import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";
const { Sider } = Layout;

class SiderUserBar extends Component {
  state = {};

  test = (
    <Sider width={200} style={{ background: "#fff" }}>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        style={{ height: "100%", borderRight: 0, backgroundColor: "black" }}
      >
        <Menu.Item key="1">
          <Icon type="user" />
          <span>nav 1</span>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="video-camera" />
          <span>nav 2</span>
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="upload" />
          <span>nav 3</span>
        </Menu.Item>
      </Menu>
    </Sider>
  );

  render() {
    return (
      <Layout>
        <Sider width={200} style={{ background: "#fff" }}>
          <Menu
            mode="inline"
            theme="dark"
            defaultSelectedKeys={["1"]}
            style={{
              height: "100%",
              borderRight: 0,
              backgroundColor: "black"
            }}
          >
            <Menu.Item key="1">
              <Icon type="home" />
              <span>Home</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="heart" />
              <span>Mis Fiestas</span>
            </Menu.Item>
          </Menu>
        </Sider>
      </Layout>
    );
  }
}

export default SiderUserBar;
