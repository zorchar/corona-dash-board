const settlementsDataVaccination = [
    {
        settlement: 'תל-אביב',
        firstShotPercentage: 95.53,
        secondShotPercentage: 94.89,
        thirdShotPercentage: 93.45,
        activeSickPerTenThousand: 88.8,
        dailyCalculatedGrade: 9.9,
    },
    {
        settlement: 'חיפה',
        firstShotPercentage: 91.12,
        secondShotPercentage: 90.23,
        thirdShotPercentage: 88.65,
        activeSickPerTenThousand: 85.8,
        dailyCalculatedGrade: 9.3,
    },
    {
        settlement: 'ירושלים',
        firstShotPercentage: 88.01,
        secondShotPercentage: 87.06,
        thirdShotPercentage: 86.65,
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

const sortByParam = (param, array, isAscending) => {
    array.sort((obj1, obj2) => {
        if (isAscending)
            return obj2[param] < obj1[param] ? '1' : '-1'
        else
            return obj2[param] < obj1[param] ? '-1' : '1'
    })
}

const createGridCellWithText = (text) => {
    const gridCellText = document.createElement('div')
    gridCellText.classList.add('grid-cell__text')
    gridCellText.innerText = text

    const gridCell = document.createElement('div')
    gridCell.classList.add('grid-cell')
    gridCell.appendChild(gridCellText)
    return gridCell
}

const createGridCellWithTextAndBar = (text, barColor) => {
    const gridCellText = document.createElement('div')
    gridCellText.classList.add('grid-cell__text')
    gridCellText.innerText = text

    const gridCell = document.createElement('div')
    gridCell.classList.add('grid-cell')

    if (barColor > 0 && barColor < 4) {
        const bar = document.createElement('div')
        bar.classList.add("bar")
        const coloredPart = document.createElement('div')
        coloredPart.classList.add("colored-part")
        if (barColor === 1)
            coloredPart.classList.add("first-bar-color")
        else if (barColor === 2)
            coloredPart.classList.add("second-bar-color")
        else if (barColor === 3)
            coloredPart.classList.add("third-bar-color")
        coloredPart.style.width = text + '%'
        bar.appendChild(coloredPart)
        gridCell.appendChild(bar)
    }

    gridCell.appendChild(gridCellText)
    return gridCell
}

const trafficLightTable = document.querySelector('#traffic-light-table')
const vaccinationTable = document.querySelector('#vaccination-table')

const fillTrafficLightTable = () => {
    settlementsDataTrafficLight.forEach(el => {
        for (const [key, value] of Object.entries(el)) {
            trafficLightTable.appendChild(createGridCellWithText(value))
        }
    })
}

const fillVaccinationTable = () => {
    let counter = 0
    settlementsDataVaccination.forEach(el => {
        for (const [key, value] of Object.entries(el)) {
            vaccinationTable.appendChild(createGridCellWithTextAndBar(value, counter))
            counter++
            if (counter == 6)
                counter = 0
        }
    })
}

let isAscendingVaccination = false
let lastFieldVaccination = 'firstShotPercentage'
const vaccinationSettlementButtons = document.querySelectorAll('.vaccination-grid-button')

let isAscendingTrafficLight = false
let lastFieldTrafficLight = 'dailyCalculatedGrade'
const trafficLightSettlementButtons = document.querySelectorAll('.traffic-light-grid-button')

const addGradeStyle = () => {
    const addBGColorToFirstChild = (firstChild) => {
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

    const gridCellsVaccination = vaccinationTable.querySelectorAll('.grid-cell')
    for (let i = 5; i < gridCellsVaccination.length; i += 6) {
        const firstChild = gridCellsVaccination[i].firstChild
        addBGColorToFirstChild(firstChild)
    }
    const gridCellsTrafficLight = trafficLightTable.querySelectorAll('.grid-cell')
    for (let i = 1; i < gridCellsTrafficLight.length; i += 6) {
        const firstChild = gridCellsTrafficLight[i].firstChild
        addBGColorToFirstChild(firstChild)
    }
}

const addGridButtonsEventListener = () => {
    trafficLightSettlementButtons.forEach(el => {
        el.addEventListener('click', function (event) {
            const trafficLightSection = document.querySelector('#traffic-light-in-settlements')
            const elementDisplay = trafficLightSection.querySelector('.display')
            if (this.name === lastFieldTrafficLight) {
                isAscendingTrafficLight = !isAscendingTrafficLight
                elementDisplay.classList.add('display-none')
                elementDisplay.classList.remove('display')
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
                elementDisplay.classList.add('display-none')
                elementDisplay.classList.remove('display')
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
            const elementDisplay = vaccinationSection.querySelector('.display')
            if (this.name === lastFieldVaccination) {
                isAscendingVaccination = !isAscendingVaccination
                elementDisplay.classList.add('display-none')
                elementDisplay.classList.remove('display')
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
                elementDisplay.classList.add('display-none')
                elementDisplay.classList.remove('display')
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

const trafficLightInput = document.querySelector('#traffic-light-input')
const trafficLightCurrentSelectedSettlements = []
const trafficLightSettlementList = document.querySelector('#includes-settlement-list-traffic-light')

const closeDivElementTrafficLight = document.querySelector('#secondary-div__close-div-traffic-light')
closeDivElementTrafficLight.addEventListener('click', (event) => {
    trafficLightInput.value = ""
    closeDivElementTrafficLight.classList.add('display-none')
    trafficLightSettlementList.classList.add('display-none')
    trafficLightTable.replaceChildren()
    const eventInput = new Event('input')
    trafficLightInput.dispatchEvent(eventInput)
})

trafficLightInput.addEventListener('input', (event) => {
    trafficLightSettlementList.classList.remove('display-none')
    trafficLightInputChange()
})

const vaccinationInput = document.querySelector('#vaccination-input')
const vaccinationCurrentSelectedSettlements = []
const settlementList = document.querySelector('.includes-settlement-list')

const closeDivElementVaccination = document.querySelector('#secondary-div__close-div-vaccination')

closeDivElementVaccination.addEventListener('click', (event) => {
    vaccinationInput.value = ""
    closeDivElementVaccination.classList.add('display-none')
    updateSettlementList()
})

vaccinationInput.addEventListener('input', (event) => {
    settlementList.classList.remove('display-none')
    updateSettlementList()
})

const buttonAccept = document.querySelector('#secondary-search-bar__accept-button')
buttonAccept.addEventListener('click', (event) => {
    if (vaccinationInput.value === "") {
        vaccinationTable.replaceChildren()
        fillVaccinationTable()
        return
    }
    vaccinationTable.replaceChildren()
    settlementsDataVaccination.forEach(el => {
        if (el.settlement === vaccinationInput.value) {
            for (const [key, value] of Object.entries(el)) {
                vaccinationTable.appendChild(createGridCellWithText(value))
            }
        }
    })
})

document.querySelectorAll('.accept-or-cancel-button').forEach(el => {
    el.addEventListener('click', (event) => {
        document.querySelector('#secondary-search-bar__secondary-div').classList.add('display-none')
    })
})

document.querySelector('.vaccine-by-settlement-button').addEventListener('click', (event) => {
    document.querySelector('#secondary-search-bar__secondary-div').classList.toggle('display-none')
})

function updateSettlementList() {
    if (vaccinationInput.value !== "")
        closeDivElementVaccination.classList.remove('display-none')
    if (vaccinationInput.value === "")
        closeDivElementVaccination.classList.add('display-none')

    vaccinationCurrentSelectedSettlements.length = 0
    settlementList.replaceChildren()
    settlementsDataVaccination.forEach(el => {
        if (el.settlement.includes(vaccinationInput.value)) {
            vaccinationCurrentSelectedSettlements.push(el.settlement)
        }
    })
    vaccinationCurrentSelectedSettlements.forEach(el => {
        if (vaccinationInput.value === "")
            return
        if (settlementList.childElementCount >= 5)
            return
        const settlementName = document.createElement('div')
        settlementName.classList.add('includes-settlement-list__settlement')
        settlementName.innerText = el
        settlementList.appendChild(settlementName)
        settlementName.addEventListener('click', function (event) {
            vaccinationInput.value = settlementName.innerText
            settlementList.classList.add('display-none')
            updateSettlementList()
        })
    })
}

function trafficLightInputChange() {
    trafficLightTable.replaceChildren()
    if (trafficLightInput.value === "") {
        closeDivElementTrafficLight.classList.add('display-none')
        fillTrafficLightTable()
        addGradeStyle()
    }
    trafficLightCurrentSelectedSettlements.length = 0
    trafficLightSettlementList.replaceChildren()
    settlementsDataTrafficLight.forEach(el => {
        if (el.settlement.includes(trafficLightInput.value)) {
            trafficLightCurrentSelectedSettlements.push(el.settlement)
        }
    })
    trafficLightCurrentSelectedSettlements.forEach(el => {
        if (trafficLightInput.value === "")
            return
        if (trafficLightSettlementList.childElementCount >= 5)
            return
        const settlementName = document.createElement('div')
        settlementName.classList.add('includes-settlement-list__settlement')
        settlementName.innerText = el
        trafficLightSettlementList.appendChild(settlementName)
        settlementName.addEventListener('click', function (event) {
            trafficLightInput.value = settlementName.innerText
            trafficLightSettlementList.classList.add('display-none')
            trafficLightInputChange()
        })
    })

    if (trafficLightInput.value !== "") {
        closeDivElementTrafficLight.classList.remove('display-none')
        trafficLightTable.replaceChildren()
        trafficLightCurrentSelectedSettlements.forEach(elList => {
            settlementsDataTrafficLight.forEach(elData => {
                if (elData.settlement === elList) {
                    for (const [key, value] of Object.entries(elData)) {
                        trafficLightTable.appendChild(createGridCellWithText(value))
                    }
                }
            })
        })
        addGradeStyle()
    }
}

const themeButtonDark = document.querySelector('#theme-button-dark')
const themeButtonLight = document.querySelector('#theme-button-light')
themeButtonLight.addEventListener('click', () => {
    themeButtonDark.classList.remove('display-none')
    themeButtonLight.classList.add('display-none')
    document.documentElement.style.setProperty
        ('--main-bg-color', '#486579')
    document.documentElement.style.setProperty
        ('--main-color', '#ffffff')
    document.documentElement.style.setProperty
        ('--secondary-bg-color', '#384f5f')
    document.documentElement.style.setProperty
        ('--third-bg-color', '#2a3b47')
    document.documentElement.style.setProperty
        ('--fourth-bg-color', '#4e6275')
    document.documentElement.style.setProperty
        ('--bar-bg-color', '#293b48')
    document.documentElement.style.setProperty
        ('--different-grid-cell-bg-color', '#354047')
    document.documentElement.style.setProperty
        ('--input-border-and-angle-color', '#79858e')
    document.documentElement.style.setProperty
        ('--border-bottom-color', '#95a8b1')
    document.documentElement.style.setProperty
        ('--theme-button-bg-color', '#d8d8d8')

})

themeButtonDark.addEventListener('click', () => {
    themeButtonDark.classList.add('display-none')
    themeButtonLight.classList.remove('display-none')
    document.documentElement.style.setProperty
        ('--main-bg-color', '#edf1f7')
    document.documentElement.style.setProperty
        ('--main-color', '#222b45')
    document.documentElement.style.setProperty
        ('--secondary-bg-color', '#ffffff')
    document.documentElement.style.setProperty
        ('--third-bg-color', '#e6f1f4')
    document.documentElement.style.setProperty
        ('--fourth-bg-color', '#f7f9fc')
    document.documentElement.style.setProperty
        ('--bar-bg-color', '#eff5f9')
    document.documentElement.style.setProperty
        ('--different-grid-cell-bg-color', '#daeaee')
    document.documentElement.style.setProperty
        ('--input-border-and-angle-color', '#e4e9f2')
    document.documentElement.style.setProperty
        ('--border-bottom-color', '#eaf3f5')
    document.documentElement.style.setProperty
        ('--theme-button-bg-color', '#39475d')
})


sortByParam('firstShotPercentage', settlementsDataVaccination, false)
sortByParam('dailyCalculatedGrade', settlementsDataTrafficLight, false)
fillVaccinationTable()
fillTrafficLightTable()
addGridButtonsEventListener()
addGradeStyle()
