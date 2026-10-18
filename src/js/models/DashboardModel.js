export class DashboardModel {
    constructor(expenseManager) {
        this.expenseManager = expenseManager
    }

    getDashboardContent() {

        const today = new Date()
        const year = today.getFullYear()
        const month = today.getMonth()

        const totalExpensesCurrentMonth = this.expenseManager.getSumExpensesForMonth(year, month)

        return {
            totalExpensesCurrentMonth
        }
    }
}