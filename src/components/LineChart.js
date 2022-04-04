import React, { Component } from 'react';
import CanvasJSReact from '../assets/js/canvasjs.react';
import '../assets/css/main.css'
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

var dataPoints = [
];
class LineChart extends Component {

    render() {
        const options = {
            theme: "light2",
            title: {
                text: ""                
            },
            axisY: {
                title: "",
                prefix: ""
            },
            axisX: {
                valueFormatString: "MMM",
                interval: 1,
                intervalType: "month"
            },
            data: [{
                color: this.props.chartColor,
                type: "line",
                xValueFormatString: "MMM",
                dataPoints: dataPoints
            }]
        }
        return (
            <div className='margin-sm-end mb-3'>
                <div className='card-border'>
                    <div className='card-ro'>
                        <div className='d-flex justify-content-between pb-3 break-point-row'>
                            <div className='d-flex'>
                                <h3 className='chart-top-text'>{this.props.title}</h3>
                                <span className='chart-top-text-greenish-bg'>+4.14% </span>
                            </div>

                            <div className='d-flex'>
                                <div className='chart-top-text-card d-flex justify-content-between'>
                                    <span className='chart-top-text-danger' style={{ background: this.props.colors}}></span>
                                    <div>High Priority</div>
                                </div>

                                <div className='chart-top-text-card d-flex justify-content-between'>
                                    <div className=''>This Month</div> <i className='far fa-calendar'></i>
                                </div>
                            </div>
                        </div>
                        <CanvasJSChart options={options}
                            onRef={ref => this.chart = ref}
                        />
                        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
                    </div>
                    <div className='vertical-line card-space onhide-sm-730'>
                        <div className='chart-card'>
                            <span className='avg-res'>{this.props.avgTime}</span>
                            <h3 className='avg-time'>30 Mins</h3>
                        </div>

                        <div className='chart-card'>
                            <span className='avg-res'>{this.props.resTime}</span>
                            <h3 className='avg-time'>1 Hour 30 Mins</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        var chart = this.chart;
        fetch('data.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                for (var i = 0; i < data.length; i++) {
                    dataPoints.push({
                        x: new Date(data[i].x),
                        y: data[i].y
                    });
                }
                chart.render();
            });
    }
}

export default LineChart;                           