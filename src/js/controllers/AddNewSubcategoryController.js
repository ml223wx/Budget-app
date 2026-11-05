import { AddNewSubcategoryModel } from '../models/AddNewSubcategoryModel.js'
import { AddNewSubcategoryView } from '../views/AddNewSubcategoryView.js'

export class AddNewSubcategoryController {
    constructor(root, categoryManager, databaseHandler) {
        this.root = root
        this.categoryManager = categoryManager
        this.model = new AddNewSubcategoryModel(categoryManager, databaseHandler)
        this.view = new AddNewSubcategoryView()
    }

    render() {
        const form = this.view.render(
            this.categoryManager.categories,
            (categoryName, subCategoryName) => this.model.saveSubCategory(categoryName, subCategoryName)
        )
        this.root.replaceChildren(form)
    }
}
