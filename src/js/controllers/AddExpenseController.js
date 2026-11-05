import { AddExpenseModel } from '../models/AddExpenseModel.js'
import { AddExpenseView } from '../views/AddExpenseView.js'
import { AddNewCategoryController } from './AddNewCategoryController.js'

export class AddExpenseController {
    constructor(root, expenseManager, categoryManager, databaseHandler) {
        this.root = root
        this.model = new AddExpenseModel(expenseManager, databaseHandler)
        this.view = new AddExpenseView(categoryManager.categories)
        this.categoryManager = categoryManager
        this.databaseHandler = databaseHandler
    }

    render () {      
        this.selectedCategory = null  
        // Callback for category selection:
        const expenseForm = this.view.render(
            (category) => {
                this.selectedCategory = category
                console.log('category')
                console.log(category)
            },
            // Callback to create new category
            (name) => {
                console.log('New category requested:', name)
                const addNewCategoryController = new AddNewCategoryController(this.root, this.categoryManager, this.databaseHandler)
                addNewCategoryController.render()
            }
        )

        expenseForm.addEventListener('submit', (event) => {
            event.preventDefault()

            const data = new FormData(expenseForm)
            let date = this.getDate(data)

            this.model.saveExpense({
                amount: Number(data.get('expense')),
                date: date,
                comment: data.get('comment'),
                category: this.selectedCategory.name,
                subcategory: data.get('subcategory')
            })
        })

        this.root.replaceChildren(expenseForm)
    }

    getDate(data){
        if (!data.get('date')) {
            return new Date()
        } else {
            return new Date(data.get('date'))
        }
    }
    
}