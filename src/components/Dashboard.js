import React from 'react';
import { GGIconButton, GGToggleButton } from './GGButton';

// eslint-disable-next-line no-unused-vars
import { SCSS } from 'css.gg'

export default class Dashboard extends React.Component {
  render() {
    return (
      <div className="Dashboard">
        <div className="Row">
          <header><b>Balcony</b> controls</header>
        </div>
        <div className="Row">
          <GGIconButton topic="balcony/fan" updateTopic="balcony/fan/set" iconName="mic" />
          <GGIconButton topic="balcony/fan" updateTopic="balcony/fan/set" iconName="drop-opacity" />
          <GGIconButton topic="balcony/fan" updateTopic="balcony/fan/set" iconName="eye" />
          <GGIconButton topic="balcony/fan" updateTopic="balcony/fan/set" iconName="thermostat" />
          <GGIconButton topic="balcony/fan" updateTopic="balcony/fan/set" iconName="battery-full" />
          <GGToggleButton topic="balcony/fan" updateTopic="balcony/fan/set" iconName="toggle-off" inactiveIconName="toggle-on" />
        </div>
      </div>
    );
  }
}


