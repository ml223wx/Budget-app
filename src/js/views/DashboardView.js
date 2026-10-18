export class DashboardView {
    render(dashboardData) {
        const dashboard = document.createElement('div')
        dashboard.id = 'dashboard'

        const dashboardHeader = document.createElement('h2')
        dashboardHeader.textContent = 'Spent so far:'
        dashboard.append(dashboardHeader)

        const totalAmount = document.createElement('p')
        totalAmount.textContent = `${dashboardData.totalExpensesCurrentMonth} kr`
        dashboard.append(totalAmount)

        return dashboard
    }
}