import { describe, it, expect } from "vitest"
import { Category } from "../src/Category.js"

// Structure by chatGPT:

describe("Category", () => {

  it("adds a sub category", () => {
    const newCategory = new Category('Electronics', ['Phone'])
    newCategory.addSubCategory('Laptop')
    expect(newCategory.subCategories).toContain('Laptop')
  })

  it("returns true if a sub category exists", () => {
    const newCategory = new Category('Electronics', ['Phone'])
    expect(newCategory.hasSubcategory('Phone')).toBe(true)
  })

  it("returns false if a sub category doesn't exist", () => {
    const newCategory = new Category('Electronics', ['Phone'])
    expect(newCategory.hasSubcategory('Space ship')).toBe(false)
  })
})
