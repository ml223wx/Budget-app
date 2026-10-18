import { describe, it, expect } from "vitest"
import { Category } from "../src/Category.js"
import { CategoryManager } from "../src/CategoryManager.js"

// Structure by chatGPT:

describe("CategoryManager", () => {

  it("adds a category", () => {
    const categories = []
    const categoryManager = new CategoryManager(categories)
    const newCategory = new Category('Electronics', ['Phone'])

    categoryManager.addCategory(newCategory)
    expect(categoryManager.categories).toContain(newCategory)

  })

  it("adds a sub category", () => {
    const categories = [new Category('Electronics', ['Phone'])]
    const categoryManager = new CategoryManager(categories)

    categoryManager.addSubCategory('Electronics', 'Laptop')
    expect(categoryManager.findCategoryObject('Electronics').subCategories).toContain('Laptop')
  })

})
