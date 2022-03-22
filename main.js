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



const sortByParam = (param, array, isAscending) =>
    array.sort((obj1, obj2) => {
        if (isAscending)
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

const createGridCellWithTextAndArrows = (text) => {
    const gridCellText = document.createElement('div')
    gridCellText.classList.add('grid-cell__text')
    gridCellText.innerText = text

    const upArrow = document.createElement('i')
    upArrow.classList.add("fa-solid", "fa-sort-up", "display-none")
    const downArrow = document.createElement('i')
    downArrow.classList.add("fa-solid", "fa-sort-down", "display-none")

    const gridCell = document.createElement('div')
    gridCell.classList.add('grid-cell')
    gridCell.append(gridCellText, upArrow, downArrow)
    // gridCell.appendChild(gridCellText)
    // gridCell.appendChild(upArrow)
    // gridCell.appendChild(downArrow)
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
            trafficLightTable.appendChild(createGridCellWithTextAndArrows(value))
        }
    })

// vaccination data
const fillVaccinationTable = () =>
    settlementsDataVaccination.forEach(el => {
        for (const [key, value] of Object.entries(el)) {
            vaccinationTable.appendChild(createGridCellWithTextAndArrows(value))
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

let isAscendingVaccination = false
let lastFieldVaccination = 'firstShotPercentage'

const vaccinationSettlementButtons = document.querySelectorAll('.vaccination-grid-button')

let isAscendingTrafficLight = false
let lastFieldTrafficLight = 'dailyCalculatedGrade'

const addGradeStyle = () => {

    const gridCellsVaccination = vaccinationTable.querySelectorAll('.grid-cell')
    for (let i = 5; i < gridCellsVaccination.length; i += 6) {
        const firstChild = gridCellsVaccination[i].firstChild
        firstChild.classList.add('grade')
        if (firstChild.innerText > 7.5)
            firstChild.classList.add('background-red')
        if (firstChild.innerText <= 7.5 && firstChild.innerText > 6)
            firstChild.classList.add('background-orange')
        if (firstChild.innerText <= 6 && firstChild.innerText > 4.5)
            firstChild.classList.add('background-yellow')
        if (firstChild.innerText <= 4.5)
            firstChild.classList.add('background-light-green')
    }

    const gridCellsTrafficLight = trafficLightTable.querySelectorAll('.grid-cell')
    for (let i = 1; i < gridCellsTrafficLight.length; i += 6) {
        const firstChild = gridCellsTrafficLight[i].firstChild
        firstChild.classList.add('grade')
        if (firstChild.innerText > 7.5)
            firstChild.classList.add('background-red')
        if (firstChild.innerText <= 7.5 && firstChild.innerText > 6)
            firstChild.classList.add('background-orange')
        if (firstChild.innerText <= 6 && firstChild.innerText > 4.5)
            firstChild.classList.add('background-yellow')
        if (firstChild.innerText <= 4.5)
            firstChild.classList.add('background-light-green')
    }
}


const trafficLightSettlementButtons = document.querySelectorAll('.traffic-light-grid-button')

const addGridButtonsEventListener = () => {
    trafficLightSettlementButtons.forEach(el => {
        el.addEventListener('click', function (event) {
            const trafficLightSection = document.querySelector('#traffic-light-in-settlements')
            if (this.name === lastFieldTrafficLight) {
                isAscendingTrafficLight = !isAscendingTrafficLight
                trafficLightSection.querySelector('.display').classList.add('display-none')
                trafficLightSection.querySelector('.display').classList.remove('display')
                if (!isAscendingTrafficLight) {
                    this.querySelector('.fa-sort-down').classList.remove('display-none')
                    this.querySelector('.fa-sort-down').classList.add('display')
                }
                else {
                    this.querySelector('.fa-sort-up').classList.remove('display-none')
                    this.querySelector('.fa-sort-up').classList.add('display')
                }
            }
            else {
                isAscendingTrafficLight = false
                trafficLightSection.querySelector('.display').classList.add('display-none')
                trafficLightSection.querySelector('.display').classList.remove('display')
                this.querySelector('.fa-sort-down').classList.remove('display-none')
                this.querySelector('.fa-sort-down').classList.add('display')
            }
            lastFieldTrafficLight = this.name
            sortByParam(this.name, settlementsDataTrafficLight, isAscendingTrafficLight === true ? true : false)
            trafficLightTable.replaceChildren()
            fillTrafficLightTable()
            addGradeStyle()
        })
    })

    vaccinationSettlementButtons.forEach(el => {
        el.addEventListener('click', function (event) {
            event.stopPropagation()
            const vaccinationSection = document.querySelector('#vaccination-of-population')
            if (this.name === lastFieldVaccination) {
                isAscendingVaccination = !isAscendingVaccination
                vaccinationSection.querySelector('.display').classList.add('display-none')
                vaccinationSection.querySelector('.display').classList.remove('display')
                if (!isAscendingVaccination) {
                    this.querySelector('.fa-sort-down').classList.remove('display-none')
                    this.querySelector('.fa-sort-down').classList.add('display')
                }
                else {
                    this.querySelector('.fa-sort-up').classList.remove('display-none')
                    this.querySelector('.fa-sort-up').classList.add('display')
                }
            }
            else {
                isAscendingVaccination = false
                vaccinationSection.querySelector('.display').classList.add('display-none')
                vaccinationSection.querySelector('.display').classList.remove('display')
                this.querySelector('.fa-sort-down').classList.remove('display-none')
                this.querySelector('.fa-sort-down').classList.add('display')
            }
            lastFieldVaccination = this.name
            sortByParam(this.name, settlementsDataVaccination, isAscendingVaccination === true ? true : false)
            vaccinationTable.replaceChildren()
            fillVaccinationTable()
            addGradeStyle()
        })
    })

}

sortByParam('firstShotPercentage', settlementsDataVaccination, false)
sortByParam('dailyCalculatedGrade', settlementsDataTrafficLight, false)
fillVaccinationTable()
fillTrafficLightTable()



addGridButtonsEventListener()
addGradeStyle()




// this creates and fills auxiliary array for when you search for includes

// const trafficLightInput = document.querySelector('#traffic-light-input')
// const trafficLightCurrentSelectedSettlements = []

// trafficLightInput.addEventListener('input', (event) => {
//     trafficLightCurrentSelectedSettlements.length = 0
//     settlementsDataTrafficLight.forEach(el => {
//         if (el.settlement.includes(trafficLightInput.value)) {
//             trafficLightCurrentSelectedSettlements.push(el)
//         }
//     })
//     console.log(trafficLightCurrentSelectedSettlements);
// })
/////

// this creates and fills auxiliary array for when you search for includes

const vaccinationInput = document.querySelector('#vaccination-input')
const vaccinationCurrentSelectedSettlements = []
const vaccinationAuxiliaryArray = [] // for when you choose a single settlement

vaccinationInput.addEventListener('input', (event) => {
    vaccinationCurrentSelectedSettlements.length = 0
    settlementsDataVaccination.forEach(el => {
        if (el.settlement.includes(vaccinationInput.value)) {
            vaccinationCurrentSelectedSettlements.push(el.settlement)
        }
    })
    console.log(vaccinationCurrentSelectedSettlements);
})
/////

