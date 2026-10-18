import { Expense } from "./Expense.js"


export class JSONExpensesHistoryConverter {

  constructor (JSONExpensesObject) {

      // From chatGPT:
      this.expensesHistory = JSONExpensesObject.map(
      expense => new Expense(
        expense.amount,
        new Date(expense.date),
        expense.category,
        expense.subCategory,
        expense.description
      )
    )
  }

  getExpensesHistory() {
    return this.expensesHistory
  }
}
