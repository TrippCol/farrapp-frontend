import React, { Component } from "react";
import { Layout, List, Icon } from "antd";

const { Footer } = Layout;

class AppFooter extends Component {
  render() {
    return (
      <Footer style={{ textAlign: "center", backgroundColor: "#111820" }}>
        <div>Farrapp</div>
        <br />
        <List grid={{ gutter: 16, column: 4 }}>
          <a href="https://github.com/TrippCol/farrapp-frontend">
            <Icon type="github" theme="outlined" style={{ fontSize: "30px" }} />
          </a>
          <Icon type="facebook" theme="outlined" style={{ fontSize: "30px" }} />
          <Icon
            type="instagram"
            theme="outlined"
            style={{ fontSize: "30px" }}
          />
          <Icon type="twitter" theme="outlined" style={{ fontSize: "30px" }} />
          <Icon type="youtube" theme="outlined" style={{ fontSize: "30px" }} />
        </List>
      </Footer>
    );
  }
}

export default AppFooter;
