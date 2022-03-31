// const ctx = document.getElementById('my-chart').getContext('2d');
// const tooltipLine = {
//     id: 'tooltipLine',
//     beforeDraw: chart => {
//         if (chart.tooltip._active?.length) {
//             const ctx = chart.ctx;
//             ctx.save()
//             const activePoint = chart.tooltip._active[0]
//             console.log(chart.chartArea);

//             ctx.beginPath()
//             ctx.setLineDash([5, 1])
//             ctx.moveTo(activePoint.element.x, chart.chartArea.top)
//             ctx.lineTo(activePoint.element.x, activePoint.element.y)
//             ctx.lineWidth = 2
//             ctx.strokeStyle = 'red'
//             ctx.stroke()
//             ctx.restore()

//             ctx.beginPath()
//             ctx.moveTo(activePoint.element.x, activePoint.element.y)
//             ctx.lineTo(activePoint.element.x, chart.chartArea.bottom)
//             ctx.lineWidth = 2
//             ctx.strokeStyle = 'blue'
//             ctx.stroke()
//             ctx.restore()

//         }
//     }
// }




// const myChart = new Chart(ctx, {
//     type: 'line',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1,
//             tension: 0.4,
//             fill: 'start'
//         }, {
//             label: '# of Votes2',
//             data: [9, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1,
//             tension: 0.4,
//             fill: 'start'
//         }]
//     },
//     plugins: [tooltipLine],
//     options: {
//         scales: {
//             y: {
//                 stacked: true,
//                 beginAtZero: true
//             }
//         },
//         responsive: true,
//         hover: {
//             mode: 'dataset',
//             intersect: false
//         }
//     },
// });

// // function mousemoveHandler(chart, mousemove) {
// //     console.log(mousemove);
// //     console.log(chart.canvas);
// //     console.log(chart);

// //     const ctx = chart.ctx;
// //     ctx.save() // maybe unneccecery

// //     // ctx.reset()
// //     chart.render()


// //     ctx.beginPath()
// //     ctx.setLineDash([5, 1])
// //     ctx.moveTo(mousemove.offsetX, chart.chartArea.top)
// //     ctx.lineTo(mousemove.offsetX, chart.chartArea.bottom)
// //     ctx.lineWidth = 1
// //     ctx.strokeStyle = 'red'
// //     ctx.stroke()
// //     ctx.restore()
// // }

// // myChart.canvas.addEventListener('mousemove', (event) => {
// //     mousemoveHandler(myChart, event)
// // })

// console.log(myChart.tooltip.active);
// myChart.tooltip.width = 500
// myChart.tooltip.height = 500
// myChart.tooltip.active = true
// console.log(myChart.tooltip.active);
// console.log(myChart.tooltip);
// console.log(myChart);






// A point click event that uses the Renderer to draw a label next to the point
// On subsequent clicks, move the existing label instead of creating a new one.
Highcharts.addEvent(Highcharts.Point, 'click', function () {
    if (this.series.options.className.indexOf('popup-on-click') !== -1) {
        const chart = this.series.chart;
        const date = Highcharts.dateFormat('%A, %b %e, %Y', this.x);
        const text = `<b>${date}</b><br/>${this.y} ${this.series.name}`;

        const anchorX = this.plotX + this.series.xAxis.pos;
        const anchorY = this.plotY + this.series.yAxis.pos;
        const align = anchorX < chart.chartWidth - 200 ? 'left' : 'right';
        const x = align === 'left' ? anchorX + 10 : anchorX - 10;
        const y = anchorY - 30;
        if (!chart.sticky) {
            chart.sticky = chart.renderer
                .label(text, x, y, 'callout', anchorX, anchorY)
                .attr({
                    align,
                    fill: 'rgba(0, 0, 0, 0.75)',
                    padding: 10,
                    zIndex: 7 // Above series, below tooltip
                })
                .css({
                    color: 'white'
                })
                .on('click', function () {
                    chart.sticky = chart.sticky.destroy();
                })
                .add();
        } else {
            chart.sticky
                .attr({ align, text })
                .animate({ anchorX, anchorY, x, y }, { duration: 250 });
        }
    }
});


Highcharts.chart('container', {

    chart: {
        scrollablePlotArea: {
            minWidth: 700
        }
    },

    data: {
        csvURL: 'https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/analytics.csv',
        beforeParse: function (csv) {
            return csv.replace(/\n\n/g, '\n');
        }
    },

    title: {
        text: 'Daily sessions at www.highcharts.com'
    },

    subtitle: {
        text: 'Source: Google Analytics'
    },

    xAxis: {
        tickInterval: 7 * 24 * 3600 * 1000, // one week
        tickWidth: 0,
        gridLineWidth: 1,
        labels: {
            align: 'left',
            x: 3,
            y: -3
        }
    },

    yAxis: [{ // left y axis
        title: {
            text: null
        },
        labels: {
            align: 'left',
            x: 3,
            y: 16,
            format: '{value:.,0f}'
        },
        showFirstLabel: false
    }, { // right y axis
        linkedTo: 0,
        gridLineWidth: 0,
        opposite: true,
        title: {
            text: null
        },
        labels: {
            align: 'right',
            x: -3,
            y: 16,
            format: '{value:.,0f}'
        },
        showFirstLabel: false
    }],

    legend: {
        align: 'left',
        verticalAlign: 'top',
        borderWidth: 0
    },

    tooltip: {
        shared: true,
        crosshairs: true
    },

    plotOptions: {
        series: {
            cursor: 'pointer',
            className: 'popup-on-click',
            marker: {
                lineWidth: 1
            }
        }
    },

    series: [{
        name: 'Installation',
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
    }, {
        name: 'Manufacturing',
        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
    }, {
        name: 'Sales & Distribution',
        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
    }, {
        name: 'Project Development',
        data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
    }, {
        name: 'Other',
        data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
    }],
});