import React, { Component } from "react";
import NewPartyForm from "../forms/NewPartyForm";
import { Layout } from "antd";
import axios from "axios";

class CreatorScreen extends Component {
  state = {};

  render() {
    if (this.props.siderOption === "1") {
      return (
        <Layout>
          <NewPartyForm />
        </Layout>
      );
    } else {
      axios
        .get(
          "https://farrapp-api.herokuapp.com/parties/creator/" +
            JSON.parse(localStorage.profileInfo).name
        )
        .then(function(response) {
          this.setState({ foundParties: response.data });
        })
        .catch(function(error) {
          console.log(error);
        });
      return (
        <Layout>
          <p>{this.state.foundParties}</p>
        </Layout>
      );
    }
  }
}

export default CreatorScreen;
