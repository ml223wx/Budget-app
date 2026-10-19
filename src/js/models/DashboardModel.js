export class DashboardModel {
    constructor(expenseManager) {
        this.expenseManager = expenseManager
        this.year = new Date().getFullYear()
        this.month = new Date().getMonth()
        
    }

    getDashboardContent() {
        const totalExpensesCurrentMonth = this.expenseManager.getSumExpensesForMonth(this.year, this.month)

        return {
            totalExpensesCurrentMonth,
            categories: this.expenseManager.categories
        }
    }

    getDashboardContentByCategory(categoryName) {
        const categoryTotal = this.expenseManager.getSumByCategoryAndMonth(this.year, this.month, categoryName)

        return {
            name: categoryName,
            totalExpenses: categoryTotal
        }
    }
}