import React, { Component } from "react";
import mqtt from "mqtt";

class MqttStatus extends Component {
  state = {
    isConnected: false,
    message: 'not connected',
    error: ''
  }
    
  constructor(props) {
    super(props);
    this.pubSub = props.pubSub;

    this.pubSub.on('connect', () => {
      this.setState({
        isConnected: true,
        message: 'connected'
      })
    });

    this.pubSub.on('error', e => {
      this.setState({
        isConnected: false,
        message: 'not conneted',
        error: e
      })
    });
  }

  render() {
    return (
      <>
        MQTT: {this.state.message}
      </>
    );
  }
}

export default MqttStatus;