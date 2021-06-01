import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Chart from "react-apexcharts";

class ListCountry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [{
                data: [
                    359843,
                    196747,
                    90487,
                    56323,
                    49806,
                    47270,
                    46462,
                    40670,
                    40642,
                    30559,
                    29728,
                    27866,
                    27556,
                    15781,
                    13792,
                    13348,
                    13150,
                    12477,
                    11778,
                    11565,
                    10586,
                    8204,
                    8017,
                    7480,
                    7376,
                    7273,
                    6997,
                    6875,
                    6490,
                    6123,
                    5423,
                    5056,
                    5021,
                    4341,
                    4250,
                    4107,
                    3943,
                    3540,
                    3008,
                    2146,
                    1903,
                    1875,
                    1864,
                    1515,
                    1318,
                    1047,
                    930,
                    899,
                    674,
                    651,
                    480,
                    480,
                    437,
                    414,
                    362,
                    350,
                    299,
                    282,
                    271,
                    267,
                    254,
                    241,
                    231,
                    224,
                    220,
                    211,
                    205,
                    180,
                    170,
                    160,
                    159,
                    138,
                    97,
                    93,
                    75,
                    71,
                    71,
                    67,
                    55,
                    50,
                    48,
                    42,
                    38,
                    36,
                    34,
                    29,
                    28,
                    26,
                    26,
                    24,
                    22,
                    12,
                    10,
                    8,
                    7,
                    5,
                    2,
                    1,
                    1
                ]
            }],
            options: {
                chart: {
                    type: 'bar',
                    height: 380,
                    toolbar:{
                        show: false
                    }
                },
                plotOptions: {
                    bar: {
                        barHeight: '100%',
                        distributed: true,
                        horizontal: true,
                        dataLabels: {
                            position: 'bottom'
                        },
                    }
                },
                colors: ['#33b2df', '#546E7A', '#d4526e', '#13d8aa', '#A5978B', '#2b908f', '#f9a3a4', '#90ee7e',
                    '#f48024', '#69d2e7'
                ],
                dataLabels: {
                    enabled: true,
                    textAnchor: 'start',
                    style: {
                        colors: ['#fff']
                    },
                    formatter: function (val, opt) {
                        return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
                    },
                    offsetX: 0,
                    dropShadow: {
                        enabled: true
                    }
                },
                stroke: {
                    width: 1,
                    colors: ['#fff']
                },
                xaxis: {
                    categories: [
                        'Syria',
                        'Afghanistan',
                        'Iraq',
                        'Ethiopia',
                        'Nigeria',
                        'Sudan',
                        'DR Congo',
                        'Mexico',
                        'Pakistan',
                        'India',
                        'Somalia',
                        'Sri Lanka',
                        'Yemen',
                        'Colombia',
                        'Philippines',
                        'Libya',
                        'Russia',
                        'Central African Republic',
                        'South Sudan',
                        'Nepal',
                        'Myanmar',
                        'Burundi',
                        'Uganda',
                        'Algeria',
                        'Turkey',
                        'Israel',
                        'Brazil',
                        'Ukraine',
                        'Chad',
                        'Liberia',
                        'Mali',
                        'Cameroon',
                        'Indonesia',
                        'Kenya',
                        'Angola',
                        'Egypt',
                        'Thailand',
                        'Ivory Coast',
                        'United States of America',
                        'Rwanda',
                        'Niger',
                        'Eritrea',
                        'Lebanon',
                        'Burkina Faso',
                        'Iran',
                        'Guinea',
                        'Sierra Leone',
                        'Mozambique',
                        'Bangladesh',
                        'Georgia',
                        'Senegal',
                        'Azerbaijan',
                        'Togo',
                        'Saudi Arabia',
                        'Congo',
                        'Uzbekistan',
                        'China',
                        'Peru',
                        'Haiti',
                        'Zimbabwe',
                        'Spain',
                        'France',
                        'Honduras',
                        'Kyrgyzstan',
                        'Venezuela',
                        'Madagascar',
                        'Tajikistan',
                        'Ghana',
                        'Papua New Guinea',
                        'Guatemala',
                        'Tunisia',
                        'Jamaica',
                        'Jordan',
                        'Laos',
                        'North Macedonia',
                        'Namibia',
                        'Malaysia',
                        'United Kingdom',
                        'Ecuador',
                        'Bolivia',
                        'Tanzania',
                        'Djibouti',
                        'Belgium',
                        'Armenia',
                        'Morocco',
                        'Guyana',
                        'Mauritania',
                        'Bahrain',
                        'Kuwait',
                        'Canada',
                        'Cambodia',
                        'Germany',
                        'Gambia',
                        'Zambia',
                        'South Africa',
                        'Sweden',
                        'Australia',
                        'Benin',
                        'United Arab Emirates'
                    ],
                },
                yaxis: {
                    labels: {
                        show: false
                    }
                },
                title: {
                    text: 'Country rankings (2000-2019)',
                    align: 'center',
                    floating: true,
                    style: {
                        fontSize:  '14px',
                        fontWeight:  'bold',
                        fontFamily:  undefined,
                        color:  '#263238'
                    }
                },
                tooltip: {
                    theme: 'dark',
                    x: {
                        show: false
                    },
                    y: {
                        title: {
                            formatter: function () {
                                return ''
                            }
                        }
                    }
                }
            },
        };
    }
    render() {
        return (
            <div id="chart">
                <Chart options={this.state.options} series={this.state.series} type="bar" height={2800} width={1500} align={'center'} />
            </div>
        );
    }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(ListCountry), domContainer);

export default ListCountry;