import { AddExpenseModel } from '../models/AddExpenseModel.js'
import { AddExpenseView } from '../views/AddExpenseView.js'

export class AddExpenseController {
    constructor(root, expenseManager, categoryManager, dbHandler) {
        this.root = root
        this.model = new AddExpenseModel(expenseManager, dbHandler)
        this.view = new AddExpenseView(categoryManager.categories)
    }

    render () {      
        this.selectedCategory = null  
        // Callback for category selection:
        const expenseForm = this.view.render((category) => {
        this.selectedCategory = category
        })

        expenseForm.addEventListener('submit', (event) => {
            event.preventDefault()

            const data = new FormData(expenseForm)

            this.model.saveExpense({
                amount: Number(data.get('expense')),
                date: (data.get('date')),
                comment: data.get('comment'),
                category: this.selectedCategory
            })
        })

        this.root.replaceChildren(expenseForm)
    }
    
}