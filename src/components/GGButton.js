import React from 'react';
import { SwitchButton } from './SwitchButton';

export class GGIconButton extends SwitchButton {
  constructor(props) {
    super(props);

    this.state.iconName = props.iconName;
  }

  getGGClass() {   
    return this.state.iconName;
  }

  render() {
    return (
      <div className="DashboardButton" onClick={() => this.setState({ value: !this.state.value })}>
        <div className="bg"></div>
        <div className="content">
          <div className={'gg gg-' + this.getGGClass()}></div>
        </div>
      </div>
    );
  }
}

export class GGToggleButton extends GGIconButton {
  constructor(props) {
    super(props);

    this.state.inactiveIconName = props.inactiveIconName;
  }

  getGGClass() {
    return !!this.state.value ? this.state.iconName + ' active' : this.state.inactiveIconName + ' inactive';
  }
}