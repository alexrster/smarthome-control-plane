import React from 'react';
import MQTT from "mqtt";

export default class MqttContext extends React.Component {
    static propTypes = {
        mqqt: React.PropTypes.object,
        mqttProps: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.object]),
        children: React.PropTypes.element.isRequired,
    };

    static childContextTypes = {
        mqtt: React.PropTypes.object,
        mqttStatus: React.PropTypes.string
    };

    constructor(props) {
        super(props);

        const initialState = {};
        this.state = initialState;
    }

    getChildContext() {
        return {
            mqtt: this.mqtt,
            mqttStatus: this.state.mqttStatus
        };
    }

    componentWillMount() {
        const { mqttProps, mqtt } = this.props;

        this.mqtt = (mqtt) ? mqtt : MQTT.connect(mqttProps);

        this.mqtt.on('connect', this._makeStatusHandler('connected'));
        this.mqtt.on('reconnect', this._makeStatusHandler('reconnect'));
        this.mqtt.on('close',  this._makeStatusHandler('closed'));
        this.mqtt.on('offline', this._makeStatusHandler('offline'));
        this.mqtt.on('error', console.error);


    }

    componentWillUnmount(){
        this.mqtt.end();
    }

    _makeStatusHandler = (status) => {
        return () => {
            this.setState({ mqttStatus: status })
        }
    };

    render() {
        return this.renderConnected();
    }

    renderConnected() {
        return React.Children.only(this.props.children);
    }
}
