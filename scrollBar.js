const scroollBar = document.querySelector(".rtl-scroll")
const navBar = document.querySelector('.navigation-bar')
const tabs = navBar.querySelectorAll('a')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        highlightNavBarTab(tab)
    })
})
// const sections = document.querySelectorAll('.section-container')
// const sectionsIDs = []
// sections.forEach(section => {
//     sectionsIDs.push(section.id)
// })

scroollBar.addEventListener('scroll', () => {
    const scroollBarPosition = scroollBar.scrollTop;
    tabs.forEach(tab => {
        if (scroollBarPosition >= document.querySelector(tab.hash).offsetTop && scroollBarPosition <= document.querySelector(tab.hash).offsetTop + 100) {
            highlightNavBarTab(tab)
        }
    })
})

const highlightNavBarTab = (tab) => {
    const highlightedTab = document.querySelector('.highlight-tab')
    if (highlightedTab != undefined) {
        highlightedTab.classList.remove('highlight-tab')
    }
    tab.parentElement.classList.add('highlight-tab')
}