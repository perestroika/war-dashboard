import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Chart from 'react-apexcharts';

    class Charts2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [{
                name: 'Africa',
                data: [20396, 16468, 18566, 15456, 15575]
            }, {
                name: 'Americas',
                data: [1855, 1391, 4320, 10884, 13230]
            }, {
                name: 'Asia',
                data: [22461, 21476, 25754, 28984, 32737]
            }, {
                name: 'Europe',
                data: [1612, 604, 521, 314, 275]
            }, {
                name: 'Middle East',
                data: [76024, 66642, 49484, 27682, 14622]
            }],
            options: {
                chart: {
                    type: 'bar',
                    height: 350,
                    stacked: true,
                    stackType: '100%',
                    toolbar: {
                        show: false
                    },
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        legend: {
                            position: 'bottom',
                            offsetX: -10,
                            offsetY: 0
                        }
                    }
                }],
                xaxis: {
                    categories: [2015, 2016, 2017, 2018, 2019],
                    labels: {
                        formatter: function (val) {
                            return val
                        }
                    }
                },
                fill: {
                    opacity: 1
                },
                legend: {
                    position: 'right',
                    offsetX: 0,
                    offsetY: 50
                },
            },
        };
    }
    render() {
        return (
            <div id="chart">
                <Chart options={this.state.options} series={this.state.series} type="bar" height={350} width={1500} align={'center'} />
            </div>
        );
    }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(Charts2), domContainer);

export default Charts2;
