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
    if (trafficLightInput.value === "" || trafficLightSettlementList.children.length === 0)
        trafficLightSettlementList.classList.add('display-none')
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

document.querySelector('#vaccine-by-settlement-button').addEventListener('click', (event) => {
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
    document.querySelector('html').classList.add('dark-mode')
    option.backgroundColor = '#384f5f'
    myChart.setOption(option);
    option2.backgroundColor = '#384f5f'
    myChart2.setOption(option2);
    option3.backgroundColor = '#384f5f'
    myChart3.setOption(option3);
    option4.backgroundColor = '#384f5f'
    myChart4.setOption(option4);
    option5.backgroundColor = '#384f5f'
    option5.yAxis[0].splitLine.lineStyle.color = '#7f8a93'
    option5.xAxis[0].splitLine.lineStyle.color = '#7f8a93'
    myChart5.setOption(option5);


    // document.documentElement.style.setProperty
    //     ('--main-bg-color', '#486579')
    // document.documentElement.style.setProperty
    //     ('--main-color', '#ffffff')
    // document.documentElement.style.setProperty
    //     ('--secondary-bg-color', '#384f5f')
    // document.documentElement.style.setProperty
    //     ('--third-bg-color', '#2a3b47')
    // document.documentElement.style.setProperty
    //     ('--fourth-bg-color', '#4e6275')
    // document.documentElement.style.setProperty
    //     ('--bar-bg-color', '#293b48')
    // document.documentElement.style.setProperty
    //     ('--different-grid-cell-bg-color', '#354047')
    // document.documentElement.style.setProperty
    //     ('--input-border-and-angle-color', '#79858e')
    // document.documentElement.style.setProperty
    //     ('--border-bottom-color', '#95a8b1')
    // document.documentElement.style.setProperty
    //     ('--theme-button-bg-color', '#d8d8d8')

})

themeButtonDark.addEventListener('click', () => {
    themeButtonDark.classList.add('display-none')
    themeButtonLight.classList.remove('display-none')
    document.querySelector('html').classList.remove('dark-mode')
    option.backgroundColor = '#ffffff'
    myChart.setOption(option);
    option2.backgroundColor = '#ffffff'
    myChart2.setOption(option2);
    option3.backgroundColor = '#ffffff'
    myChart3.setOption(option3);
    option4.backgroundColor = '#ffffff'
    myChart4.setOption(option4);
    option5.backgroundColor = '#ffffff'
    option5.yAxis[0].splitLine.lineStyle.color = '#ededed'
    option5.xAxis[0].splitLine.lineStyle.color = '#ededed'
    myChart5.setOption(option5);

    // document.documentElement.style.setProperty
    //     ('--main-bg-color', '#edf1f7')
    // document.documentElement.style.setProperty
    //     ('--main-color', '#222b45')
    // document.documentElement.style.setProperty
    //     ('--secondary-bg-color', '#ffffff')
    // document.documentElement.style.setProperty
    //     ('--third-bg-color', '#e6f1f4')
    // document.documentElement.style.setProperty
    //     ('--fourth-bg-color', '#f7f9fc')
    // document.documentElement.style.setProperty
    //     ('--bar-bg-color', '#eff5f9')
    // document.documentElement.style.setProperty
    //     ('--different-grid-cell-bg-color', '#daeaee')
    // document.documentElement.style.setProperty
    //     ('--input-border-and-angle-color', '#e4e9f2')
    // document.documentElement.style.setProperty
    //     ('--border-bottom-color', '#eaf3f5')
    // document.documentElement.style.setProperty
    //     ('--theme-button-bg-cqqqqqqqqqolor', '#39475d')
})

//init
sortByParam('firstShotPercentage', settlementsDataVaccination, false)
sortByParam('dailyCalculatedGrade', settlementsDataTrafficLight, false)
fillVaccinationTable()
fillTrafficLightTable()
addGridButtonsEventListener()
addGradeStyle()

removeSeriesData(option, 'קשה')
removeSeriesData(option, 'בינוני')
removeSeriesData(option, 'קל')
clearAxisData(option, 'xAxis')
insertSeriesData(option, 'קשה', createMockDataArray(150, 350, 1000))
insertSeriesData(option, 'בינוני', createMockDataArray(150, 350, 1000))
insertSeriesData(option, 'קל', createMockDataArray(150, 350, 1000))
insertAxisData(option, 'xAxis', createConsecutiveDatesArray(), 969, 999)
myChart.setOption(option);
clearAxisData(option2, 'xAxis')
insertAxisData(option2, 'xAxis', createConsecutiveDatesArray(), 969, 999)
removeSeriesData(option2, 'לא מחוסנים')
removeSeriesData(option2, 'מחוסנים')
removeSeriesData(option2, 'מחוסנים ללא תוקף')
insertSeriesData(option2, 'לא מחוסנים', createMockDataArray(9150, 20050, 1000))
insertSeriesData(option2, 'מחוסנים ללא תוקף', createMockDataArray(150, 550, 1000))
insertSeriesData(option2, 'מחוסנים', createMockDataArray(2150, 5350, 1000))
myChart2.setOption(option2);
removeSeriesData(option3, 'לא מחוסנים')
removeSeriesData(option3, 'מחוסנים')
removeSeriesData(option3, 'מחוסנים ללא תוקף')
insertSeriesData(option3, 'לא מחוסנים', createMockDataArray(9150, 20050, 12))
insertSeriesData(option3, 'מחוסנים ללא תוקף', createMockDataArray(150, 550, 12))
insertSeriesData(option3, 'מחוסנים', createMockDataArray(2150, 5350, 12))
myChart3.setOption(option3);
clearAxisData(option4, 'xAxis')
removeSeriesData(option4, 'נפטרים')
removeSeriesData(option4, 'ממוצע נע נפטרים')
insertSeriesData(option4, 'ממוצע נע נפטרים', createMockDataArray(250, 350, 1000))
insertSeriesData(option4, 'נפטרים', createMockDataArray(150, 550, 1000))
insertAxisData(option4, 'xAxis', createConsecutiveDatesArray(), 969, 999)
myChart4.setOption(option4);
removeSeriesData(option5, 'גברים')
removeSeriesData(option5, 'נשים')
insertSeriesData(option5, 'גברים', createMockDataArrayPercents(12))
insertSeriesData(option5, 'נשים', createMockDataArrayPercents(12, true))
option5.yAxis[0].nameTextStyle.padding = [0, ((document.querySelector('#main5').clientWidth) / 2.25), 0, 0]
myChart5.setOption(option5);


