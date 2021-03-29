import React from 'react';
import PropTypes from "prop-types";

export class GGIconButton extends React.Component {
  static propTypes = {
    iconName: PropTypes.string,
    value: PropTypes.object
  }

  constructor(props) {
    super(props);
    this.state = {
      data: props.data
    };
  }

  getGGClassName = () => this.props.iconName;

  render = () =>
    <div className="DashboardButton">
      <div className="bg"></div>
      <div className="content">
        <div className={'gg gg-' + this.getGGClassName()}></div>
        {this.state.data}
      </div>
    </div>
}

export class GGToggleButton extends GGIconButton {
  static propTypes = {
    inactiveIconName: PropTypes.string
  }

  getGGClassName = () => !!this.state.value ? this.props.iconName + ' active' : this.props.inactiveIconName + ' inactive';
}

// export const GGIconButton = subscribe({ topic: 'balcony/ventilation' })(_GGIconButton);
// export const GGToggleButton = subscribe({ topic: 'balcony/ventilation' })(_GGToggleButton);
