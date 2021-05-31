import React from "react";
import ReactDOM from 'react-dom';
import Chart from "react-apexcharts";

class Spline extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [{
                name: 'series1',
                data: [31, 40, 28, 51, 42, 109, 100]
            }, {
                name: 'series2',
                data: [11, 32, 45, 32, 34, 52, 41]
            }],
            options: {
                chart: {
                    toolbar:{
                        show: false
                    },
                    height: 350,
                    type: 'area'
                },
                title: {
                    text: 'Evolution of the number of victims through the years',
                    align: 'center'
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth'
                },
                xaxis: {
                    type: 'datetime',
                    categories: ["2015", "2016", "2015", "2016", "2017", "2018", "2019"]
                },
            },
        };
    }
    render() {
        return (
            <div id="chart">
                <Chart options={this.state.options} series={this.state.series} type="area" height={350} width={1500} align={'center'} />
            </div>
        );
    }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(Spline), domContainer);

export default Spline;