import { describe, it, expect } from "vitest"
import { Expense } from "../src/Expense.js"
import { ExpenseManager } from "../src/ExpenseManager.js"

// Structure by chatGPT:

describe("ExpenseManager", () => {

  it("adds an expense", () => {
    const expenseManager = new ExpenseManager([],   [{
      "name": "Food",
      "subCategories": ["Groceries", "Restaurant", "Snacks"]
    }])

    const expense = new Expense(100, new Date (2026,8,15), "Food", "Snacks", "New test expense")

    expenseManager.addExpense(expense)

    expect(expenseManager.getSumExpensesForMonth(2026, 8)).toBe(100)
  })

  it("checks that an expense added with a non-existing category throws an error", () => {
    const expenseManager = new ExpenseManager([],   [{
      "name": "Food",
      "subCategories": ["Groceries", "Restaurant", "Snacks"]
    }])

    const expense = new Expense(100, new Date (2026,8,15), "Wrong", "Snacks", "New test expense")

    // From chatGPT:
    expect(() => {
      expenseManager.addExpense(expense)
        }).toThrow('Category "Wrong" does not exist.')
  })


  it("calculates total for a category for a specific month", () => {
    const expense1 = new Expense(
      500,
      new Date(2026, 7, 3),
      "Food",
      "Groceries",
      ""
    )

    const expense2 = new Expense(
        200,
        new Date(2026, 7, 14),
        "Food",
        "Restaurant",
        "Burger"
    )

    const expense3 = new Expense(
        100,
        new Date(2026, 7, 19),
        "Food",
        "Snacks",
        "Chips"
    )

    const manager = new ExpenseManager([
        expense1,
        expense2,
        expense3
    ])

    const result = manager.getSumByCategoryAndMonth(
        2026,
        7,
        "Food"
    )

    expect(result).toBe(800)
  })

  it("returns all expense objects for one month", () => {
    const expenseManager = new ExpenseManager([],   [{
      "name": "Food",
      "subCategories": ["Groceries", "Restaurant", "Snacks"]
    }])

    const expense1 = new Expense(100, new Date (2026,8,15), "Food", "Snacks", "New test expense 1")
    const expense2 = new Expense(100, new Date (2026,8,16), "Food", "Snacks", "New test expense 2")
    const expense3 = new Expense(100, new Date (2026,8,15), "Food", "Snacks", "New test expense 3")

    expenseManager.addExpense(expense1)
    expenseManager.addExpense(expense2)
    expenseManager.addExpense(expense3)

    const result = expenseManager.getAllExpensesForMonth(2026, 8)

    //From chatGPT:
    expect(result).toHaveLength(3)
    expect(result).toContain(expense1)
    expect(result).toContain(expense2)
    expect(result).toContain(expense3)
  })

  it("returns the sum of all expenses in one sub category for one month", () => {
    const expenseManager = new ExpenseManager([],   [{
      "name": "Food",
      "subCategories": ["Groceries", "Restaurant", "Snacks"]
    }])

    const expense1 = new Expense(100, new Date (2026,8,15), "Food", "Snacks", "New test expense 1")
    const expense2 = new Expense(100, new Date (2026,8,16), "Food", "Snacks", "New test expense 2")
    const expense3 = new Expense(100, new Date (2026,8,15), "Food", "Snacks", "New test expense 3")

    expenseManager.addExpense(expense1)
    expenseManager.addExpense(expense2)
    expenseManager.addExpense(expense3)

    expect(expenseManager.getTotalBySubCategory(2026, 8, "Snacks")).toBe(300)
  })
})
