import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";
const { Sider } = Layout;

class SiderCreatorBar extends Component {
  state = {};

  render() {
    return (
      <Sider width={200} style={{ background: "#fff", minHeight: "900px" }}>
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
          <Menu.Item key="1" onClick={this.props.clickNewParty}>
            <Icon type="plus" />
            <span>Nueva Fiesta</span>
          </Menu.Item>
          <Menu.Item key="2" onClick={this.props.clickMyParties}>
            <Icon type="heart" />
            <span>Mis Fiestas</span>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default SiderCreatorBar;
