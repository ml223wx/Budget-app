#!/usr/bin/env node

import { Category } from "./Category.js"
import { CategoryManager} from "./CategoryManager.js"
import { Expense } from "./Expense.js"
import { ExpenseManager } from "./ExpenseManager.js"
import { JSONCategoriesConverter } from "./JSONcategoriesConverter.js"
import { JSONExpensesHistoryConverter } from "./JSONExpensesHistoryConverter.js"
import JSONMockExpenseHistory from "./mockExpenseHistory.json" with { type: "json" }
import JSONStandardCategories from "./standardCategories.json" with { type: "json" }

/**
 * Execution entry point.
 */
function main() {
  console.log('🚀 Application is up and running!')

  try {

      // Assign which JSON-data is to be read as expense history:
      const expenseHistoryFile = JSONMockExpenseHistory
      // Assign which JSON-data is to be read as categories:
      const categoriesFile = JSONStandardCategories

      const expensesHistory = new JSONExpensesHistoryConverter(expenseHistoryFile).getExpensesHistory()
      const categories = new JSONCategoriesConverter(categoriesFile).getCategories()

      const expenseManager = new ExpenseManager(expensesHistory, categories)
      const categoryManager = new CategoryManager(categories)

      const newTestExpense = new Expense(100, new Date (2026,8,15), "Food", "Snacks", "New test expense")

      // Adds a new expense:
      expenseManager.addExpense(newTestExpense)

      // Javascript counts the 8th month as September, since the 0th is January.

      try {
        console.log('Gets the sum of all expenses for September:')
        console.log(expenseManager.getSumExpensesForMonth(2026, 8))
      } catch (error) {
        console.error(error.message)
      }

      try {
      console.log('Gets all "Food" category expenses for September: ')
      console.log(expenseManager.getSumByCategoryAndMonth(2026, 8, 'Food'))
      } catch (error) {
        console.error(error.message)
      }

      try {
      console.log('Gets all "Food" - "Restaurant" sub category expenses for July: ')
      console.log(expenseManager.getTotalBySubCategory(2026, 6, 'Restaurant'))
      } catch (error) {
        console.error(error.message)
      }

      // Adds a category to the existing categories that weresent as arguments to ExpenseManager.
      // Each category has to have at least 1 sub category.

      const newCategory =  new Category("Health & Beauty", ["Beauty", "Healthcare"])
      categoryManager.addCategory(newCategory)

      // // Adds a sub category:
      categoryManager.addSubCategory("Health & Beauty", "Medication")

  } catch (error) {
    console.error('An unexpected error occurred during execution:', error.message)
    process.exitCode = 1
  }
}

main()
