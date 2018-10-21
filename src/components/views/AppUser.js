import React, { Component } from "react";
import AppFooter from "../shared/AppFooter";
import AppHeader from "../bars/AppHeader";
import SiderUserBar from "../bars/SiderUserBar";

class AppUser extends Component {
  state = {};
  render() {
    return (
      <div>
        <AppHeader />
        <SiderUserBar />
        <AppFooter />
      </div>
    );
  }
}

export default AppUser;
