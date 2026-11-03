import { EditExpenseView } from '../views/EditExpenseView.js'
import { EditExpenseModel } from '../models/EditExpenseModel.js'

export class EditExpenseController {
    constructor(databaseHandler, root, expenseItem, onSaved) {
        this.root = root
        this.expenseItem = expenseItem
        this.onSaved = onSaved //What to do after saving an expense item.
        this.databaseHandler = databaseHandler
        this.model = new EditExpenseModel(this.databaseHandler)
        this.view = new EditExpenseView(this.expenseItem)
    }

    async render() {
        // const editExpenseView = new EditExpenseView(this.root, this.expenseItem, this.onSaved)
        // TODO: Set categories
        // const categories = ['Test', 'Categories', 'Yes']
    const categories = await this.getCategories()
    const content = this.view.render(this.expenseItem, categories, (editedExpense) => this.handleSave(editedExpense))
        
        this.root.replaceChildren(content)
        
    }

        async handleSave(editedExpense) {
            console.log('handle save')
        await this.model.updateExpense(editedExpense)
        this.onSaved()
    }

    async getCategories() {
        const { categories } = await this.databaseHandler.readCategoriesAndExpenses()
        return categories
    }
}