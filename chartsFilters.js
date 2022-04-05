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

            if (el.id === 'residents-entering-israel-vaccination-dropdown-button') {
                clearAxisData(option2, 'xAxis')
                if (buttonString.includes('חודש אחרון'))
                    insertAxisData(option2, 'xAxis', createConsecutiveDatesArray(), 969, 999)
                else if (buttonString.includes('3 חודשים'))
                    insertAxisData(option2, 'xAxis', createConsecutiveDatesArray(), 909, 999)
                else if (buttonString.includes('6 חודשים'))
                    insertAxisData(option2, 'xAxis', createConsecutiveDatesArray(), 819, 999)
                else if (buttonString.includes('שנה'))
                    insertAxisData(option2, 'xAxis', createConsecutiveDatesArray(), 639, 999)
                else if (buttonString.includes('עד עכשיו'))
                    insertAxisData(option2, 'xAxis', createConsecutiveDatesArray(), 0, 999)
                removeSeriesData(option2, 'לא מחוסנים')
                removeSeriesData(option2, 'מחוסנים')
                removeSeriesData(option2, 'מחוסנים ללא תוקף')
                insertSeriesData(option2, 'לא מחוסנים', createMockDataArray(9150, 20050, 1000))
                insertSeriesData(option2, 'מחוסנים ללא תוקף', createMockDataArray(150, 550, 1000))
                insertSeriesData(option2, 'מחוסנים', createMockDataArray(2150, 5350, 1000))

                myChart2.setOption(option2);
            }

            if (el.id === 'vaccination-influence-on-sickness-dropdown-button') {
                if (buttonString.includes('מספר מוחלט'))
                    option3.yAxis.name = 'מספר\nחולים\nפעילים'
                else option3.yAxis.name = 'שיעור\nחולים\nפעילים'
                removeSeriesData(option3, 'לא מחוסנים')
                removeSeriesData(option3, 'מחוסנים')
                removeSeriesData(option3, 'מחוסנים ללא תוקף')
                insertSeriesData(option3, 'לא מחוסנים', createMockDataArray(9150, 20050, 12))
                insertSeriesData(option3, 'מחוסנים ללא תוקף', createMockDataArray(150, 550, 12))
                insertSeriesData(option3, 'מחוסנים', createMockDataArray(2150, 5350, 12))
                myChart3.setOption(option3);
            }

            if (el.id === 'passed-away-daily-dropdown-button') {
                clearAxisData(option4, 'xAxis')
                removeSeriesData(option4, 'נפטרים')
                removeSeriesData(option4, 'ממוצע נע נפטרים')
                insertSeriesData(option4, 'ממוצע נע נפטרים', createMockDataArray(250, 350, 1000))
                insertSeriesData(option4, 'נפטרים', createMockDataArray(150, 550, 1000))
                if (buttonString.includes('חודש אחרון'))
                    insertAxisData(option4, 'xAxis', createConsecutiveDatesArray(), 969, 999)
                else if (buttonString.includes('3 חודשים'))
                    insertAxisData(option4, 'xAxis', createConsecutiveDatesArray(), 909, 999)
                else if (buttonString.includes('6 חודשים'))
                    insertAxisData(option4, 'xAxis', createConsecutiveDatesArray(), 819, 999)
                else if (buttonString.includes('שנה'))
                    insertAxisData(option4, 'xAxis', createConsecutiveDatesArray(), 639, 999)
                else if (buttonString.includes('עד עכשיו'))
                    insertAxisData(option4, 'xAxis', createConsecutiveDatesArray(), 0, 999)
                myChart4.setOption(option4);
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
