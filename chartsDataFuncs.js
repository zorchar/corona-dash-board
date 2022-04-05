////////// axis

const insertAxisData = (chartOption, axis, data, from = 0, to = data.length - 1) => {
    for (let i = from; i < to; i++)
        chartOption[axis].data.push(data[i])
}

const clearAxisData = (chartOption, axis) => {
    chartOption[axis].data.length = 0
}

///dates

const createConsecutiveDatesArray = () => {
    const newArray = []
    let day = 1
    let month = 1
    let year = 20

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

const createMockDataArray = (minVal, maxVal, length) => {
    const newArray = []

    for (let i = 0; i < length; i++) {
        newArray.push(Math.floor(Math.random() * (maxVal - minVal) + minVal))
    }

    return newArray
}

const createMockDataArrayPercents = (length, isNegative = false) => {
    const newArray = []

    for (let i = 0; i < length; i++) {
        const afterDot = Math.floor(Math.random() * (100 - 0) + 0) / 100
        const beforeDot = Math.floor(Math.random() * (9 - 0) + 0) + afterDot
        newArray.push(isNegative ? beforeDot * (-1) : beforeDot)
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

const insertSeriesData = (chartOption, seriesName, data) => {
    chartOption.series.forEach(el => {
        if (el.name === seriesName)
            el.data = data
    })
}

const removeSeriesData = (chartOption, seriesName) => {
    chartOption.series.forEach(el => {
        if (el.name === seriesName)
            el.data.length = 0
    });
}

/////////////////////////////////////////////////////////////////////////
