import { describe, it, expect } from "vitest"
import { Expense } from "../src/Expense.js"

describe("Expense", () => {

  it("checks that Expense has an amount", () => {
    const expense = new Expense(
      100,
      new Date(2026,8,28),
      'Food',
      'Snacks',
      'Chocolate'
    )
    expect(expense.amount).toBe(100)
  })

  it("checks that Expense has a date", () => {
    const expense = new Expense(
      100,
      new Date(2026,8,28),
      'Food',
      'Snacks',
      'Chocolate'
    )
    const date = new Date(2026,8,28)
    expect(expense.date.getTime()).toBe(date.getTime())
  })

  it("checks that Expense has a category", () => {
    const expense = new Expense(
      100,
      new Date(2026,8,28),
      'Food',
      'Snacks',
      'Chocolate'
    )
    expect(expense.category).toBe('Food')
  })

  it("checks that Expense has a sub category", () => {
    const expense = new Expense(
      100,
      new Date(2026,8,28),
      'Food',
      'Snacks',
      'Chocolate'
    )
    expect(expense.subCategory).toBe('Snacks')
  })

  it("checks that Expense has a comment", () => {
    const expense = new Expense(
      100,
      new Date(2026,8,28),
      'Food',
      'Snacks',
      'Chocolate'
    )
    expect(expense.comment).toBe('Chocolate')
  })

})
