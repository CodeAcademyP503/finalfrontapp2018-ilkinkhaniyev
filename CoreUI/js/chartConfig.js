
let chart1 = document.getElementById('cardChart-1').getContext('2d');
let cardChart1 = new Chart(chart1, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            data: [65, 59, 84, 84, 51, 55, 40],
            backgroundColor: '#007bff',
            borderColor: 'rgba(255,255,255,.55)'
        }]
    },
    options: {
        maintainAspectRatio: false,
        legend: {
            display: false,
        },
        scales: {
            xAxes: [{
                gridLines: {
                    color: 'transparent',
                    zeroLineColor: 'transparent',
                },
                ticks: {
                    fontSize: 2,
                    fontColor: 'transparent',
                }
            }],
            yAxes: [{
                display: false,
                ticks: {
                    display: false,
                    min: 35,
                    max: 89
                }
            }]
        },
        elements: {
            line: {
                borderWidth: 1
            },
            point: {
                radius: 4,
                hitRadius: 10,
                hoverRadius: 4
            }
        }
    }
});

let chart2 = document.getElementById('cardChart-2').getContext('2d');
let cardChart2 = new Chart(chart2, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            data: [1, 18, 9, 17, 34, 22, 11],
            backgroundColor: '#17a2b8',
            borderColor: 'rgba(255,255,255,.55)'
        }],
    },
    options: {
        maintainAspectRatio: false,
        legend: {
            display: false,
        },
        scales: {
            xAxes: [{
                gridLines: {
                    color: 'transparent',
                    zeroLineColor: 'transparent',
                },
                ticks: {
                    fontSize: 2,
                    fontColor: 'transparent',
                }
            }],
            yAxes: [{
                display: false,
                ticks: {
                    display: false,
                    min: -4,
                    max: 39
                }
            }]
        },
        elements: {
            line: {
                borderWidth: 1
            },
            point: {
                radius: 4,
                hitRadius: 10,
                hoverRadius: 4
            }
        }
    }
});

let chart3 = document.getElementById('cardChart-3').getContext('2d');
let cardChart3 = new Chart(chart3, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            data: [78, 81, 80, 45, 34, 12, 40],
            backgroundColor: 'rgba(255,255,255,.2)',
            borderColor: 'rgba(255,255,255,.55)'
        }],
    },
    options: {
        maintainAspectRatio: false,
        legend: {
            display: false,
        },
        scales: {
            xAxes: [{
                display: false,
            }],
            yAxes: [{
                display: false,
            }]
        },
        elements: {
            line: {
                borderWidth: 2
            },
            point: {
                radius: 0,
                hitRadius: 10,
                hoverRadius: 4
            }
        }
    }
});

let chart4 = document.getElementById('cardChart-4').getContext('2d');
let cardChart4 = new Chart(chart4, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April'],
        datasets: [{
            label: 'My First dataset',
            data: [78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84, 67, 82],
            backgroundColor: 'rgba(255,255,255,.2)',
            borderColor: 'rgba(255,255,255,.55)'
        }],
    },
    options: {
        maintainAspectRatio: false,
        legend: {
            display: false,
        },
        scales: {
            xAxes: [{
                display: false,
                barPercentage: 0.6,
            }],
            yAxes: [{
                display: false,
            }]
        },
    }
});

let traffChart1 = document.getElementById('traffChart').getContext('2d');
let traffCharts = new Chart(traffChart1, {
    type: 'line',
    data: {
        labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S'],
        datasets: [{
            label: 'My First dataset',
            data: [165, 180, 70, 69, 77, 57, 125, 165, 172, 91, 173, 138, 155, 89, 50, 161, 65, 163, 160, 103, 114, 185, 125, 196, 183, 64, 137, 95, 112, 175],
            backgroundColor: 'rgba(99,194,222,.2)',
            borderColor: '#63c2de',
            borderWidth: 2,
        },
        {
            label: 'My second dataset',
            data: [92, 97, 80, 100, 86, 97, 83, 98, 87, 98, 93, 83, 87, 98, 96, 84, 91, 97, 88, 86, 94, 86, 95, 91, 98, 91, 92, 80, 83, 82],
            backgroundColor: 'transparent',
            borderColor: '#4dbd74',
            borderWidth: 2,
        },
        {
            label: 'My third dataset',
            data: [55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55],
            backgroundColor: 'transparent',
            borderColor: '#f86c6b',
            borderWidth: 1,
            borderDash: [8, 5],
        }],
    },
    options: {
        maintainAspectRatio: false,
        legend: {
            display: false,
        },
        scales: {
            xAxes: [{
                gridLines: {
                    drawOnChartArea: false
                }
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    stepSize: Math.ceil(250 / 5),
                    max: 250,
                }
            }],
        },
        elements: {
            point: {
                radius: 0,
                hitRadius: 10,
                hoverRadius: 4,
                hoverBorderWidth: 3,
            }
        }
    }
});

let socialChart1 = document.getElementById('chartFb').getContext('2d');
let socialChartFb = new Chart(socialChart1, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            data: [78, 81, 80, 45, 34, 12, 40],
            backgroundColor: 'rgba(255,255,255,.1)',
            borderColor: 'rgba(255,255,255,.55)'
        }],
    },
    options: {
        maintainAspectRatio: false,
        legend: {
            display: false,
        },
        scales: {
            xAxes: [{
                display: false,
            }],
            yAxes: [{
                display: false,
            }]
        },
        elements: {
            line: {
                borderWidth: 2
            },
            point: {
                radius: 0,
                hitRadius: 10,
                hoverRadius: 4,
            }
        }
    }
});

let socialChart2 = document.getElementById('chartTwitter').getContext('2d');
let socialChartTwitter = new Chart(socialChart2, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            data: [18, 21, 40, 56, 64, 72, 80, 98],
            backgroundColor: 'rgba(255,255,255,.1)',
            borderColor: 'rgba(255,255,255,.55)'
        }],
    },
    options: {
        maintainAspectRatio: false,
        legend: {
            display: false,
        },
        scales: {
            xAxes: [{
                display: false,
            }],
            yAxes: [{
                display: false,
            }]
        },
        elements: {
            line: {
                borderWidth: 2
            },
            point: {
                radius: 0,
                hitRadius: 10,
                hoverRadius: 4,
            }
        }
    }
});

let socialChart3 = document.getElementById('chartIn').getContext('2d');
let socialChartIn = new Chart(socialChart3, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            data: [28, 81, 80, 45, 34, 12, 40],
            backgroundColor: 'rgba(255,255,255,.1)',
            borderColor: 'rgba(255,255,255,.55)'
        }],
    },
    options: {
        maintainAspectRatio: false,
        legend: {
            display: false,
        },
        scales: {
            xAxes: [{
                display: false,
            }],
            yAxes: [{
                display: false,
            }]
        },
        elements: {
            line: {
                borderWidth: 2
            },
            point: {
                radius: 0,
                hitRadius: 10,
                hoverRadius: 4,
            }
        }
    }
});

let socialChart4 = document.getElementById('chartGoogle').getContext('2d');
let socialChartGoogle = new Chart(socialChart4, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            data: [18, 71, 70, 55, 34, 12, 40],
            backgroundColor: 'rgba(255,255,255,.1)',
            borderColor: 'rgba(255,255,255,.55)'
        }],
    },
    options: {
        maintainAspectRatio: false,
        legend: {
            display: false,
        },
        scales: {
            xAxes: [{
                display: false,
            }],
            yAxes: [{
                display: false,
            }]
        },
        elements: {
            line: {
                borderWidth: 2
            },
            point: {
                radius: 0,
                hitRadius: 10,
                hoverRadius: 4,
            }
        }
    }
});
