export class AddExpenseModel {
    constructor(expenseManager, dbHandler) {
        this.expenseManager = expenseManager
        this.dbHandler = dbHandler
    }

    async saveExpense(expense) {
        if (!this.expenseManager.categoryExists(expense)) {
            throw new Error(`Category "${expense.category}" does not exist.`)
        }

        const id = await this.dbHandler.addExpense(expense)
        const savedExpense = {
            amount: expense.amount,
            category: expense.category,
            comment: expense.comment,
            date: expense.date,
            id: id
        }

        this.expenseManager.addExpense(savedExpense)
        return savedExpense
    }
}