import React from 'react';

export class ToggleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      readTopic: props.readTopic || props.topic,
      writeTopic: props.writeTopic || props.updateTopic || props.topic
    };
  }

  render() {
    let content;
    if (!!this.state.value) {
      content = <div className="content active">
        {this.props.children.find(x => x.type === "active")}
        {/* {this.state.value} (read from: '{this.state.readTopic}', write to: '{this.state.writeTopic}') */}
      </div>
    }
    else {
      content = <div className="content">
        {this.props.children.find(x => x.type === "inactive")}
      </div>
    }

    return (
      <div className="DashboardButton ToggleButton" onClick={() => this.setState({ value: !this.state.value })}>
        <div className="bg"></div>
        {content}
      </div>
    );
  }
}
