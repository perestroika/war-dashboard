import React from "react";
import ReactDOM from 'react-dom';
import Chart from "react-apexcharts";

class Treemap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [
                {
                    data: [
                        {
                            x: 'Syria',
                            y: 359843
                        },
                        {
                            x: 'Afghanistan',
                            y: 196747
                        },
                        {
                            x: 'Iraq',
                            y: 90487
                        },
                        {
                            x: 'Ethiopia',
                            y: 56323
                        },
                        {
                            x: 'Nigeria',
                            y: 49806
                        },
                        {
                            x: 'Sudan',
                            y: 47270
                        },
                        {
                            x: 'DR Congo',
                            y: 46462
                        },
                        {
                            x: 'Mexico',
                            y: 40670
                        },
                        {
                            x: 'Pakistan',
                            y: 40642
                        },
                        {
                            x: 'India',
                            y: 30559
                        },
                        {
                            x: 'Somalia',
                            y: 29728
                        },
                        {
                            x: 'Sri Lanka',
                            y: 27866
                        },
                        {
                            x: 'Yemen',
                            y: 27556
                        },
                        {
                            x: 'Colombia',
                            y: 15781
                        },
                        {
                            x: 'Philippines',
                            y: 13792
                        },
                        {
                            x: 'Libya',
                            y: 13348
                        },
                        {
                            x: 'Russia',
                            y: 13150
                        },
                        {
                            x: 'Central African Republic',
                            y: 12477
                        },
                        {
                            x: 'South Sudan',
                            y: 11778
                        },
                        {
                            x: 'Nepal',
                            y: 11565
                        }
                    ]
                }
            ],
            options: {
                legend: {
                    show: false
                },
                chart: {
                    height: 300,
                    type: 'treemap',
                    toolbar:{
                        show: false
                    },
                },
                title: {
                    text: 'Distributed treemap of the 20 most affected countries (2000-2019)',
                    align: 'center'
                },
                colors: [
                    '#3B93A5',
                    '#F7B844',
                    '#ADD8C7',
                    '#EC3C65',
                    '#CDD7B6',
                    '#C1F666',
                    '#D43F97',
                    '#1E5D8C',
                    '#421243',
                    '#7F94B0',
                    '#EF6537',
                    '#C0ADDB'
                ],
                plotOptions: {
                    treemap: {
                        distributed: true,
                        enableShades: false
                    }
                }
            },
        };
    }
    render() {
        return (
            <div id="chart">
                <Chart options={this.state.options} series={this.state.series} type="treemap" height={350} width={1500} align={'center'} />
            </div>
        );
    }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(Treemap), domContainer);

export default Treemap;