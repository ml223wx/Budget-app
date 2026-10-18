export class DashboardView {

    render(toBeRendered) {
    const dashboard = document.createElement('div')
    dashboard.id = 'dashboard'

    const list = document.createElement('ul')
    toBeRendered.categories.forEach(category => {
        const item = document.createElement('li')
        item.textContent = category.name
        list.append(item)
    })

    dashboard.append(list)
    return dashboard
    }
}