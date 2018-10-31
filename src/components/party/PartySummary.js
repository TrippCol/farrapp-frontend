import React, { Component } from "react";
import { Card, Icon } from "antd";

const { Meta } = Card;

class PartySummary extends Component {
  state = {};

  clickHanlder = () => {
    this.props.focusHandler(this.props.party);
  };

  render() {
    return (
      <Card
        style={{ width: 300 }}
        cover={
          <img
            alt="example"
            src="https://eventsiteimage.s3.amazonaws.com/sitegaleries/887/files/blog/armando-records.jpg?1504025185"
            onClick={this.clickHanlder}
          />
        }
        actions={[
          <Icon type="share-alt" theme="outlined" />,
          <div>
            <Icon type="heart" theme="outlined" />
            <span>{" " + this.props.party.likes + " "}</span>
          </div>
        ]}
      >
        <Meta
          title={this.props.party.partyName}
          description={this.props.party.description}
        />
      </Card>
    );
  }
}

export default PartySummary;
