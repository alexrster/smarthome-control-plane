import React from 'react';

export class SwitchButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value,
      readTopic: props.readTopic || props.topic,
      writeTopic: props.writeTopic || props.updateTopic || props.topic
    };
  }

  render() {
    return (
      <div className="SwitchButton">
        <div className="bg"></div>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}
