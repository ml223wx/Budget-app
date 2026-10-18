export class NavigationController {
    constructor(navElement, pages) {
        this.pages = pages  // { dashboard: dashboardController, expense: ..., }
        navElement.addEventListener('click', event => {
            const button = event.target.closest('button[data-set]')
            if (button) this.goTo(button.dataset.set)
        })
    }

    goTo(pageName) {
        this.pages[pageName].render()
    }
}