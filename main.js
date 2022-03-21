const settlementsData = [
    {
        settlement: 'תל-אביב',
        firstShotPercentage: 95,
        secondShotPercentage: 94,
        thirdShotPercentage: 93,
        activeSickPerTenThousand: 88.8,
        dailyCalculatedGrade: 9.9,
        newSickPerTenThousand: 126.3,
        positiveTestsPercantage: 20,
        verifiedChangeRatio: 84,
        activeSick: 2132
    },
    {
        settlement: 'חיפה',
        firstShotPercentage: 91,
        secondShotPercentage: 90,
        thirdShotPercentage: 88,
        activeSickPerTenThousand: 85.8,
        dailyCalculatedGrade: 9.3,
        newSickPerTenThousand: 226.3,
        positiveTestsPercantage: 15,
        verifiedChangeRatio: 80,
        activeSick: 1001
    },
    {
        settlement: 'ירושלים',
        firstShotPercentage: 88,
        secondShotPercentage: 87,
        thirdShotPercentage: 86,
        activeSickPerTenThousand: 185.8,
        dailyCalculatedGrade: 8.2,
        newSickPerTenThousand: 123.5,
        positiveTestsPercantage: 26,
        verifiedChangeRatio: 35,
        activeSick: 1751
    },
    {
        settlement: 'כפר-כמא',
        firstShotPercentage: 73.79,
        secondShotPercentage: 69.94,
        thirdShotPercentage: 55.12,
        activeSickPerTenThousand: 58.9,
        dailyCalculatedGrade: 9.9,
        newSickPerTenThousand: 79.5,
        positiveTestsPercantage: 27,
        verifiedChangeRatio: 80,
        activeSick: 20
    },
    {
        settlement: 'מתן',
        firstShotPercentage: 84.74,
        secondShotPercentage: 81.98,
        thirdShotPercentage: 66.42,
        activeSickPerTenThousand: 148.8,
        dailyCalculatedGrade: 9.9,
        newSickPerTenThousand: 165.3,
        positiveTestsPercantage: 23,
        verifiedChangeRatio: 47,
        activeSick: 54
    },
    {
        settlement: 'אשדוד',
        firstShotPercentage: 82.73,
        secondShotPercentage: 22.91,
        thirdShotPercentage: 46.42,
        activeSickPerTenThousand: 248.8,
        dailyCalculatedGrade: 6.9,
        newSickPerTenThousand: 865.3,
        positiveTestsPercantage: 29,
        verifiedChangeRatio: 65,
        activeSick: 657
    },
    {
        settlement: 'אשקלון',
        firstShotPercentage: 24.74,
        secondShotPercentage: 21.98,
        thirdShotPercentage: 16.42,
        activeSickPerTenThousand: 765.8,
        dailyCalculatedGrade: 8.4,
        newSickPerTenThousand: 65.3,
        positiveTestsPercantage: 83,
        verifiedChangeRatio: 87,
        activeSick: 876
    },
    {
        settlement: 'פוריידיס',
        firstShotPercentage: 94.74,
        secondShotPercentage: 91.98,
        thirdShotPercentage: 86.42,
        activeSickPerTenThousand: 48.8,
        dailyCalculatedGrade: 10,
        newSickPerTenThousand: 5.3,
        positiveTestsPercantage: 3,
        verifiedChangeRatio: 4,
        activeSick: 5
    },
]

const settlementsDataVaccination = [
    {
        settlement: 'תל-אביב',
        firstShotPercentage: 95,
        secondShotPercentage: 94,
        thirdShotPercentage: 93,
        activeSickPerTenThousand: 88.8,
        dailyCalculatedGrade: 9.9,
    },
    {
        settlement: 'חיפה',
        firstShotPercentage: 91,
        secondShotPercentage: 90,
        thirdShotPercentage: 88,
        activeSickPerTenThousand: 85.8,
        dailyCalculatedGrade: 9.3,
    },
    {
        settlement: 'ירושלים',
        firstShotPercentage: 88,
        secondShotPercentage: 87,
        thirdShotPercentage: 86,
        activeSickPerTenThousand: 185.8,
        dailyCalculatedGrade: 8.2,
    },
    {
        settlement: 'כפר-כמא',
        firstShotPercentage: 73.79,
        secondShotPercentage: 69.94,
        thirdShotPercentage: 55.12,
        activeSickPerTenThousand: 58.9,
        dailyCalculatedGrade: 9.9,
    },
    {
        settlement: 'מתן',
        firstShotPercentage: 84.74,
        secondShotPercentage: 81.98,
        thirdShotPercentage: 66.42,
        activeSickPerTenThousand: 148.8,
        dailyCalculatedGrade: 9.9,
    },
    {
        settlement: 'אשדוד',
        firstShotPercentage: 82.73,
        secondShotPercentage: 22.91,
        thirdShotPercentage: 46.42,
        activeSickPerTenThousand: 248.8,
        dailyCalculatedGrade: 6.9,
    },
    {
        settlement: 'אשקלון',
        firstShotPercentage: 24.74,
        secondShotPercentage: 21.98,
        thirdShotPercentage: 16.42,
        activeSickPerTenThousand: 765.8,
        dailyCalculatedGrade: 8.4,
    },
    {
        settlement: 'פוריידיס',
        firstShotPercentage: 94.74,
        secondShotPercentage: 91.98,
        thirdShotPercentage: 86.42,
        activeSickPerTenThousand: 48.8,
        dailyCalculatedGrade: 10,
    },
]

const settlementsDataTrafficLight = [
    {
        settlement: 'תל-אביב',
        dailyCalculatedGrade: 9.9,
        newSickPerTenThousand: 126.3,
        positiveTestsPercantage: 20,
        verifiedChangeRatio: 84,
        activeSick: 2132
    },
    {
        settlement: 'חיפה',
        dailyCalculatedGrade: 9.3,
        newSickPerTenThousand: 226.3,
        positiveTestsPercantage: 15,
        verifiedChangeRatio: 80,
        activeSick: 1001
    },
    {
        settlement: 'ירושלים',
        dailyCalculatedGrade: 8.2,
        newSickPerTenThousand: 123.5,
        positiveTestsPercantage: 26,
        verifiedChangeRatio: 35,
        activeSick: 1751
    },
    {
        settlement: 'כפר-כמא',
        dailyCalculatedGrade: 9.9,
        newSickPerTenThousand: 79.5,
        positiveTestsPercantage: 27,
        verifiedChangeRatio: 80,
        activeSick: 20
    },
    {
        settlement: 'מתן',
        dailyCalculatedGrade: 9.9,
        newSickPerTenThousand: 165.3,
        positiveTestsPercantage: 23,
        verifiedChangeRatio: 47,
        activeSick: 54
    },
    {
        settlement: 'אשדוד',
        dailyCalculatedGrade: 6.9,
        newSickPerTenThousand: 865.3,
        positiveTestsPercantage: 29,
        verifiedChangeRatio: 65,
        activeSick: 657
    },
    {
        settlement: 'אשקלון',
        dailyCalculatedGrade: 8.4,
        newSickPerTenThousand: 65.3,
        positiveTestsPercantage: 83,
        verifiedChangeRatio: 87,
        activeSick: 876
    },
    {
        settlement: 'פוריידיס',
        dailyCalculatedGrade: 10,
        newSickPerTenThousand: 5.3,
        positiveTestsPercantage: 3,
        verifiedChangeRatio: 4,
        activeSick: 5
    },
]



const sortByParam = (param, array, ascending) =>
    array.sort((obj1, obj2) => {
        if (ascending)
            return obj2[param] < obj1[param] ? '1' : '-1'
        else
            return obj2[param] < obj1[param] ? '-1' : '1'
    })




// const createGridRow = () => {
//     const gridRow = []

// }

// const createGridText = (text) => {
//     const gridCellText = document.createElement('div')
//     gridCellText.classList.add('grid-cell__text')
//     gridCellText.innerHTML = text
//     return gridCellText

// }

// const createGridCell = () => {
//     const gridCell = document.createElement('div')
//     gridCell.classList.add('grid-cell')
//     return gridCell
// }

const createGridCellWithText = (text) => {
    const gridCellText = document.createElement('div')
    gridCellText.classList.add('grid-cell__text')
    gridCellText.innerText = text

    const gridCell = document.createElement('div')
    gridCell.classList.add('grid-cell')
    gridCell.appendChild(gridCellText)
    return gridCell
}

const appendGridCellToTable = (gridCell, table) => {
    table.appendChild(gridCell)
}

const trafficLightTable = document.querySelector('#traffic-light-table')
const vaccinationTable = document.querySelector('#vaccination-table')

trafficLightTable.replaceChildren()
vaccinationTable.replaceChildren()

// sortByParam('settlement', settlementsDataVaccination, true)
// sortByParam('activeSick', settlementsDataTrafficLight, true)

// traffic light
const fillTrafficLightTable = () =>
    settlementsDataTrafficLight.forEach(el => {
        for (const [key, value] of Object.entries(el)) {
            trafficLightTable.appendChild(createGridCellWithText(value))
        }
    })

// vaccination data
const fillVaccinationTable = () =>
    settlementsDataVaccination.forEach(el => {
        for (const [key, value] of Object.entries(el)) {
            vaccinationTable.appendChild(createGridCellWithText(value))
        }
    })

// vaccinationSettlementButton = document.querySelector('#vaccination__settlement-button')
// vaccinationSettlementButton.addEventListener('click', (event) => {
//     console.log(event.target);
//     // sortByParam('settlement', settlementsDataVaccination, true)
//     sortByParam(event.target.parentElement.name, settlementsDataVaccination, true)
//     vaccinationTable.replaceChildren()
//     fillVaccinationTable()
// })

// id="vaccination__settlement-button"

let ascendingVaccination = true
let lastFieldVaccination = 'settlement'

vaccinationSettlementButtons = document.querySelectorAll('.vaccination-grid-button')
vaccinationSettlementButtons.forEach(el => {
    el.addEventListener('click', (event) => {
        if (event.target.parentElement.name === lastFieldVaccination)
            ascendingVaccination = !ascendingVaccination
        else
            ascendingVaccination = true
        lastFieldVaccination = event.target.parentElement.name
        sortByParam(event.target.parentElement.name, settlementsDataVaccination, ascendingVaccination === true ? true : false)
        vaccinationTable.replaceChildren()
        fillVaccinationTable()
    })
})

let ascendingTrafficLight = true
let lastFieldTrafficLight = 'settlement'

TrafficLightSettlementButtons = document.querySelectorAll('.traffic-light-grid-button')
TrafficLightSettlementButtons.forEach(el => {
    el.addEventListener('click', (event) => {
        if (event.target.parentElement.name === lastFieldTrafficLight)
            ascendingTrafficLight = !ascendingTrafficLight
        else
            ascendingTrafficLight = true
        lastFieldTrafficLight = event.target.parentElement.name
        sortByParam(event.target.parentElement.name, settlementsDataTrafficLight, ascendingTrafficLight === true ? true : false)
        trafficLightTable.replaceChildren()
        fillTrafficLightTable()
    })
})





