const scroollBar = document.querySelector(".rtl-scroll")
const navBar = document.querySelector('.navigation-bar')
const tabs = navBar.querySelectorAll('a')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        highlightNavBarTab(tab)
        navBar.scrollLeft = tab.offsetLeft - 220
    })
})

scroollBar.addEventListener('scroll', () => {
    const scroollBarPosition = scroollBar.scrollTop;
    tabs.forEach(tab => {
        if (scroollBarPosition >= document.querySelector(tab.hash).offsetTop && scroollBarPosition <= document.querySelector(tab.hash).offsetTop + 100) {
            highlightNavBarTab(tab)
            navBar.scrollLeft = tab.offsetLeft - 220
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