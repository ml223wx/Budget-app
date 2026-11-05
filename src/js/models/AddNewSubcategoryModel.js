import { CategoryManager } from '../budget-app_module/src/CategoryManager.js'
import { Category } from '../budget-app_module/src/Category.js'

export class AddNewSubcategoryModel {
    constructor(categoryManager, databaseHandler) {
        this.categoryManager = categoryManager
        this.databaseHandler = databaseHandler
        this.subcategoryName = null
    }

    // createSubcategory(newSubcategoryName) {
    //     return new Category(newSubcategoryName, [])
    // }

    async saveSubCategory(categoryName, subCategoryName) {
        const category = this.categoryManager.findCategoryObject(categoryName)

        if (!category) {
            throw new Error(`Category "${categoryName}" does not exist.`)
        }
        if (category.subCategories.includes(subCategoryName)) {
            throw new Error(`Subcategory "${subCategoryName}" already exists.`)
        }

        // Kopian behåller id, som put() behöver för att ersätta rätt post
        const updatedCategory = {
            ...category,
            subCategories: [...category.subCategories, subCategoryName]
        }
        await this.databaseHandler.updateCategory(updatedCategory)
        
        this.categoryManager.addSubCategory(categoryName, subCategoryName)
    }
}
