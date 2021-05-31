import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Chart from 'react-apexcharts';

class Charts2 extends Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                name: 'Africa',
                data: [15575, 15456, 18566, 16468, 20396]
            }, {
                name: 'Americas',
                data: [13230, 10884, 4320, 1391, 1855]
            }, {
                name: 'Asia',
                data: [32737, 28984, 25754, 21476, 22461]
            }, {
                name: 'Europe',
                data: [275, 314, 521, 604, 1612]
            }, {
                name: 'Middle East',
                data: [14622, 27682, 49484, 66642, 76024]
            }],
            options: {
                chart: {
                    toolbar: {
                        show: false
                    },
                    type: 'bar',
                    height: 350,
                    stacked: true,
                    stackType: '100%'
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                    },
                },
                stroke: {
                    width: 1,
                    colors: ['#fff']
                },
                title: {
                    text: 'In %'
                },
                xaxis: {
                    categories: [2019, 2018, 2017, 2016, 2015],
                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return val
                        }
                    }
                },
                fill: {
                    opacity: 1

                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'left',
                    offsetX: 40
                }
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
