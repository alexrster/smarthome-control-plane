import React from 'react';
import { subscribe } from 'react-mqtt';

export default class MqttControl extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: this.props.data };
    
    subscribe({ topic: props.topic })(this);
  }

  render() {
    return (
      <div className="DashboardButton">
        <div className="bg"></div>
        <div className="content">
          {this.renderContent()}
        </div>
      </div>
    );
  }
}
