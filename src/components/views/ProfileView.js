import React, { Component } from "react";
import AppFooter from "../shared/AppFooter";
import AppHeader from "../bars/AppHeader";
import { ProfileForm } from "../../ProfileForm";

class ProfileView extends Component {
  state = {};
  render() {
    return (
      <div>
        <AppHeader />
        <ProfileForm />
        <AppFooter />
      </div>
    );
  }
}

export default ProfileView;
