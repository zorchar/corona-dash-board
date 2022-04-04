const getInputLabelsAsString = (elScope, elClass) => {
    let labelsString = ""
    const inputs = elScope.querySelectorAll(elClass)

    inputs.forEach(el => {
        if (el.checked) {
            labelsString += el.parentElement.innerText.trim()
            labelsString += ", "
        }
    })

    return labelsString
}

const dropdownButtons = document.querySelectorAll('.dropdown-button')
dropdownButtons.forEach(el => {
    if (el.id !== "" && el.id !== "vaccine-by-settlement-button") {
        const button = document.querySelector('#' + el.id)
        const searchContainer = el.nextElementSibling

        button.addEventListener('click', () => {
            searchContainer.classList.toggle('display-none')
        })

        button.parentNode.querySelectorAll('.accept-or-cancel-button')[0].addEventListener('click', () => {
            let buttonString = ""
            buttonString += getInputLabelsAsString(searchContainer, '.input-checkbox')
            buttonString += getInputLabelsAsString(searchContainer, '.input-radio')
            buttonString = buttonString.slice(0, -2)
            button.firstElementChild.innerText = buttonString

            if (el.id === 'number-hospitalzied-daily-dropdown-button') {
                removeSeriesData(option, 'קשה')
                removeSeriesData(option, 'בינוני')
                removeSeriesData(option, 'קל')
                clearAxisData(option, 'xAxis')
                if (buttonString.includes('קשה'))
                    insertSeriesData(option, 'קשה', createMockDataArray(150, 350, 1000))
                if (buttonString.includes('בינוני'))
                    insertSeriesData(option, 'בינוני', createMockDataArray(150, 350, 1000))
                if (buttonString.includes('קל'))
                    insertSeriesData(option, 'קל', createMockDataArray(150, 350, 1000))

                if (buttonString.includes('חודש אחרון'))
                    insertAxisData(option, 'xAxis', createConsecutiveDatesArray(), 969, 999)
                else if (buttonString.includes('3 חודשים'))
                    insertAxisData(option, 'xAxis', createConsecutiveDatesArray(), 909, 999)
                else if (buttonString.includes('6 חודשים'))
                    insertAxisData(option, 'xAxis', createConsecutiveDatesArray(), 819, 999)
                else if (buttonString.includes('שנה'))
                    insertAxisData(option, 'xAxis', createConsecutiveDatesArray(), 639, 999)
                else if (buttonString.includes('עד עכשיו'))
                    insertAxisData(option, 'xAxis', createConsecutiveDatesArray(), 0, 999)

                myChart.setOption(option);
            }

            searchContainer.classList.toggle('display-none')
        })

        button.parentNode.querySelectorAll('.accept-or-cancel-button')[1].addEventListener('click', () => {
            searchContainer.classList.toggle('display-none')
        })
    }
})

// // first chart dropdown button

// const numberHospitalizedDailyButton = document.querySelector('#number-hospitalzied-daily-dropdown-button')
// const numberHospitalizedDailySearchContainer = document.querySelector('#number-hospitalized-daily-search-container')

// numberHospitalizedDailyButton.addEventListener('click', () => {
//     numberHospitalizedDailySearchContainer.classList.toggle('display-none')
// })

// numberHospitalizedDailyButton.parentNode.querySelectorAll('.accept-or-cancel-button')[0].addEventListener('click', () => {
//     let buttonString = ""

//     buttonString += getInputLabelsAsString(numberHospitalizedDailySearchContainer, '.input-checkbox')
//     buttonString += getInputLabelsAsString(numberHospitalizedDailySearchContainer, '.input-radio')
//     buttonString = buttonString.slice(0, -2)

//     if (buttonString !== "")
//         numberHospitalizedDailyButton.firstElementChild.innerText = buttonString
//     numberHospitalizedDailySearchContainer.classList.toggle('display-none')
// })

// numberHospitalizedDailyButton.parentNode.querySelectorAll('.accept-or-cancel-button')[1].addEventListener('click', () => {
//     numberHospitalizedDailySearchContainer.classList.toggle('display-none')
// })

///////////////////////////////////////////////////////////////////////////
