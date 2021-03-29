import React, { Component } from "react";
import mqtt from "mqtt";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

class Chart extends Component {
  state = {
    chartData: {
      chart: {
        type: 'spline',
        backgroundColor: null,
        height: '50%'
      },
      title: {
        text: null,
        enabled: false
      },
      legend: {
        enabled: false
      },
      xAxis: {
        labels: {
          style: {
            color: 'white'
          }
        },
        visible: false
      },
      yAxis: {
        title: {
          enabled: false
        },
        labels: {
          style: {
            color: 'white'
          }
        },
        gridLineColor: '#d0d0d066'
        // visible: false
      },
      // subtitle: {
      //   text:
      //     (
      //       this.props.data.reduce(
      //         (accumulator, obj) => accumulator + obj.y,
      //         0
      //       ) / 1000000
      //     ).toFixed(2) + " Twh",
      //   floating: false,
      //   style: {
      //     fontSize: 14,
      //     fontWeight: "bold",
      //     color: "#000000"
      //   },
      // },
      series: [
        {
          data: this.props.data
        }
      ],
      plotOptions: {
        line: {
          color: '#ffffff',
          lineWidth: '3pt'
        },
        spline: {
          color: '#ffffff99',
          lineWidth: '3pt',
          states: {
            hover: {
              color: '#ffffffff',
              lineWidth: '4pt'
            }
          },
          marker: {
            enabled: false
          },
        }
      },
      ...this.props.userConfig
    }
  }

  constructor (props) {
    super(props);
    this.pubSub = props.pubSub;
  }

  componentDidMount() {
    this.pubSub.on('connect', () => {
      this.pubSub.subscribe('clock-01/displayMode');
    });

    // this.pubSub.on('message', (topic, message) => {
    //   this.setState({ })
    // });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.data !== prevProps.data) {
      this.setState({
        chartData: {
          ...this.state.chartData,
          subtitle: {
            text:
              (
                this.props.data.reduce(
                  (accumulator, obj) => accumulator + obj.y,
                  0
                ) / 1000000
              ).toFixed(2) + " Twh"
          },
          series: [
            {
              data: this.props.data
            }
          ]
        }
      });
    }
  }

  render() {
    return (
      <div className="DashboardButton w2x">
        <div className="bg"></div>
        <div className="content">
          <HighchartsReact
            highcharts={Highcharts}
            options={this.state.chartData}
          />
        </div>
      </div>
    );
  }
}

export default Chart;