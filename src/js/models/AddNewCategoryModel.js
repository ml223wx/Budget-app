import { CategoryManager } from '../budget-app_module/src/CategoryManager.js'
import { Category } from '../budget-app_module/src/Category.js'

export class AddNewCategoryModel {
    constructor(categoryManager, databaseHandler) {
        this.categoryManager = categoryManager
        this.databaseHandler = databaseHandler
        this.categoryName = null
    }

    createCategory(newCategoryName) {
        return new Category(newCategoryName, [])
    }

    async saveCategory(newCategoryObject) {
        const id = await this.databaseHandler.addCategory(newCategoryObject)
        this.categoryManager.addCategory(newCategoryObject)
    }
}

