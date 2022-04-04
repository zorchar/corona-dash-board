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
// Highcharts.addEvent(Highcharts.Point, 'click', function () {
//     if (this.series.options.className.indexOf('popup-on-click') !== -1) {
//         const chart = this.series.chart;
//         const date = Highcharts.dateFormat('%A, %b %e, %Y', this.x);
//         const text = `<b>${date}</b><br/>${this.y} ${this.series.name}`;

//         const anchorX = this.plotX + this.series.xAxis.pos;
//         const anchorY = this.plotY + this.series.yAxis.pos;
//         const align = anchorX < chart.chartWidth - 200 ? 'left' : 'right';
//         const x = align === 'left' ? anchorX + 10 : anchorX - 10;
//         const y = anchorY - 30;
//         if (!chart.sticky) {
//             chart.sticky = chart.renderer
//                 .label(text, x, y, 'callout', anchorX, anchorY)
//                 .attr({
//                     align,
//                     fill: 'rgba(0, 0, 0, 0.75)',
//                     padding: 10,
//                     zIndex: 7 // Above series, below tooltip
//                 })
//                 .css({
//                     color: 'white'
//                 })
//                 .on('click', function () {
//                     chart.sticky = chart.sticky.destroy();
//                 })
//                 .add();
//         } else {
//             chart.sticky
//                 .attr({ align, text })
//                 .animate({ anchorX, anchorY, x, y }, { duration: 250 });
//         }
//     }
// });


// Highcharts.chart('container', {

//     chart: {
//         scrollablePlotArea: {
//             minWidth: 700
//         }
//     },

//     data: {
//         csvURL: 'https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/analytics.csv',
//         beforeParse: function (csv) {
//             console.log(csv.replace(/\n\n/g, '\n'));
//             return csv.replace(/\n\n/g, '\n');
//         }
//     },

//     title: {
//         text: 'Daily sessions at www.highcharts.com'
//     },

//     subtitle: {
//         text: 'Source: Google Analytics'
//     },

//     xAxis: {
//         tickInterval: 7 * 24 * 3600 * 1000, // one week
//         tickWidth: 0,
//         gridLineWidth: 1,
//         labels: {
//             align: 'left',
//             x: 3,
//             y: -3
//         }
//     },

//     yAxis: [{ // left y axis
//         title: {
//             text: null
//         },
//         labels: {
//             align: 'left',
//             x: 3,
//             y: 16,
//             format: '{value:.,0f}'
//         },
//         showFirstLabel: false
//     }, { // right y axis
//         linkedTo: 0,
//         gridLineWidth: 0,
//         opposite: true,
//         title: {
//             text: null
//         },
//         labels: {
//             align: 'right',
//             x: -3,
//             y: 16,
//             format: '{value:.,0f}'
//         },
//         showFirstLabel: false
//     }],

//     legend: {
//         align: 'left',
//         verticalAlign: 'top',
//         borderWidth: 0
//     },

//     tooltip: {
//         shared: true,
//         crosshairs: true
//     },

//     plotOptions: {
//         series: {
//             cursor: 'pointer',
//             className: 'popup-on-click',
//             marker: {
//                 lineWidth: 1
//             }
//         }
//     },

//     series: [{
//         name: 'All sessions',
//         lineWidth: 4,
//         marker: {
//             radius: 4
//         }
//     }, {
//         name: 'New users'
//     }]
// });

////////////////////////// charts data functions

////////// axis

export const insertAxisData = (chartOption, axis, data, from = 0, to = data.length - 1) => {
    for (let i = from; i < to; i++)
        chartOption[axis].data.push(data[i])
}

export const clearAxisData = (chartOption, axis) => {
    chartOption[axis].data.length = 0
}

///dates

export const createConsecutiveDatesArray = () => {
    const newArray = []
    let day = 1
    let month = 1
    let year = 2020

    for (let i = 0; i < 1000; i++) {
        let dateString = ""

        if (day === 31) {
            day = 1
            month++
        }
        if (month === 13) {
            month = 1
            year++
        }

        if (day < 10)
            dateString += "0"
        dateString += day + '.'
        if (month < 10)
            dateString += "0"
        dateString += month + '.' + year

        newArray.push(dateString)
        day++
    }

    return newArray
}

/////////

///// series.data

export const createMockDataArray = (minVal, maxVal, length) => {
    const newArray = []

    for (let i = 0; i < length; i++) {
        newArray.push(Math.floor(Math.random() * maxVal) + minVal)
    }

    return newArray
}

// const insertSeriesData = (chartOption, name, type, isArea, isStack, colorString, data) => {
//     const newObject = {}
//     newObject.name = name
//     newObject.type = type
//     if (isArea)
//         newObject.areaStyle = {}
//     if (isStack)
//         newObject.stack = 'total'
//     newObject.color = colorString
//     newObject.data = data
//     chartOption.series.push(newObject)
// }

export const insertSeriesData = (chartOption, seriesName, data) => {
    chartOption.series.forEach(el => {
        if (el.name === seriesName)
            el.data = data
    })
}

export const removeSeriesData = (chartOption, seriesName) => {
    chartOption.series.forEach(el => {
        if (el.name === seriesName)
            el.data.length = 0
    });
}

///////////////