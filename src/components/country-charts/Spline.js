import React from "react";
import ReactDOM from 'react-dom';
import Chart from "react-apexcharts";

class Spline extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [{
                name: 'Syria',
                data: [65288, 76155, 55216, 48526, 33230, 20109, 10931]
            }, {
                name: 'Afghanistan',
                data: [8131, 12549, 17987, 18707, 19776, 26889, 30434]
            }, {
                name: 'Iraq',
                data: [4010, 15123, 11251, 12025, 11400, 1430, 803]
            }, {
                name: 'Nigeria',
                data: [3371, 10334, 8960, 3890, 3565, 3202, 2437]
            }, {
                name: 'Sudan',
                data: [1958, 1912, 2552, 1983, 548, 461, 333]
            }, {
                name: 'DR Congo',
                data: [2164, 1574, 644, 2153, 5943, 3029, 2393]
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
                    type: 'text',
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