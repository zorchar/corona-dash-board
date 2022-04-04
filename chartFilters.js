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
    if (el.id !== "") {
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

            if (buttonString !== "")
                button.firstElementChild.innerText = buttonString
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

// ////////
