export class AddExpenseModel {
    constructor(expenseManager, dbHandler) {
        this.expenseManager = expenseManager
        this.dbHandler = dbHandler
    }

    async saveExpense(expense) {
        if (!this.expenseManager.categoryExists(expense)) {
            throw new Error(`Category "${expense.category}" does not exist.`)
        }

        const expenseToSave = {
            amount: expense.amount,
            category: expense.category,
            comment: expense.comment,
            // Formats date before it saves to the database
            date: new Date(expense.date)
        }

        const id = await this.dbHandler.addExpense(expenseToSave)
        const savedExpenseWithGeneratedId = {
            amount: expense.amount,
            category: expense.category,
            comment: expense.comment,
            date: formattedDate,
            id: id
        }

        this.expenseManager.addExpense(savedExpenseWithGeneratedId)
        return savedExpenseWithGeneratedId
    }
}