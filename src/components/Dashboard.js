import React from 'react';
import { GGIconButton, GGToggleButton } from './GGButton';
import { subscribe } from 'react-mqtt';
import mqtt from "mqtt";
import MqttStatus from './MqttStatus';
import Chart from "./Chart";

// eslint-disable-next-line no-unused-vars
import { SCSS } from 'css.gg'

const VentilationButton = subscribe({topic: 'balcony/temperature'})(GGIconButton);
const LightSensorElement = subscribe({topic: 'balcony/light'})(GGIconButton);
const BalconyClockModeElement = subscribe({topic: 'clock-01/displayMode'})(GGIconButton);

export default class Dashboard extends React.Component {
  state = {
    chartData: [
      { x: 0, y: 0},
      { x: 1, y: 2},
      { x: 4, y: 2.5}
    ]
  };

  constructor(props) {
    super(props);
    this.pubSub = mqtt.connect('ws://10.9.9.96:1889')
  }

  render() {
    return (
      <div className="Dashboard">
        <div className="Row">
          <header><b>Balcony</b> controls</header>
        </div>
        <div className="Row">
          {/* <GGIconButton topic="balcony/fan" iconName="mic" />
          <GGIconButton topic="balcony/humidity" iconName="drop-opacity" />
          <GGIconButton topic="balcony/fan" iconName="eye" /> */}
          {/* <MqttSubscribtion topic="balcony/battery">
            <GGIconButton iconName="thermostat" />
          </MqttSubscribtion> */}
          <VentilationButton iconName="thermostat" />
          <LightSensorElement iconName="sun" />
          <BalconyClockModeElement iconName="time" />
          {/* <Subscribe topic="balcony/temperature">
            <GGIconButton iconName="thermostat" />
          </Subscribe> */}
          {/* {subscribe({topic:"balcony/temperature"})(<GGIconButton iconName="thermostat" />)} */}
          {/* <GGIconButton iconName="thermostat" topic="balcony/temperature" /> */}
          {/* <GGIconButton iconName="thermostat" topic="outside/temperature" /> */}
          {/* <GGToggleButton topic="balcony/heater/top" iconName="battery-full" inactiveIconName="battery-empty" />
          <GGToggleButton topic="balcony/ventilation" iconName="toggle-off" inactiveIconName="toggle-on" /> */}

          <Chart titleName="X-Y" data={this.state.chartData} pubSub={this.pubSub} />
        </div>
        
        <div className="Bottom Row">
          <MqttStatus pubSub={this.pubSub} />
        </div>
      </div>
    );
  }
}


