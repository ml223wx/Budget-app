import { AddNewCategoryModel } from '../models/AddNewCategoryModel.js'
import { AddNewCategoryView } from '../views/AddNewCategoryView.js'

export class AddNewCategoryController {
    constructor(root, categoryManager, databaseHandler) {
        this.root = root
        this.databaseHandler = databaseHandler
        this.model = new AddNewCategoryModel(categoryManager, databaseHandler)
        this.view = new AddNewCategoryView()
    }

    render() {
        const form = this.view.render(
            async (newCategoryName) => {
                this.newCategory = this.model.createCategory(newCategoryName)
                await this.model.saveCategory(this.newCategory)
            })

        this.root.replaceChildren(form)
    }

    addEventListeners(form) {
            form.addEventListener('submit', (event) => {
                event.preventDefault()
                this.model.saveCategory(this.newCategory)
            })
    }
}
