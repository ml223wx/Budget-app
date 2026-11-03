export class EditExpenseModel {

    constructor(databaseHandler) {
        this.databaseHandler = databaseHandler
    }

// EditExpenseModel.js
async updateExpense(updatedExpense) {

    return await this.databaseHandler.updateExpense({
        id: updatedExpense.id,
        amount: Number(updatedExpense.amount),
        category: updatedExpense.category,
        comment: updatedExpense.comment,
        date: new Date(updatedExpense.date)
    })
}
}