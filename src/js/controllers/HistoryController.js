import { HistoryModel } from '../models/HistoryModel.js'
import { HistoryView } from '../views/HistoryView.js'

export class HistoryController {
    constructor(root, expenseManager, databaseHandler) {
        this.root = root
        this.databaseHandler = databaseHandler
        this.model = new HistoryModel(databaseHandler)
        this.view = new HistoryView()
    }

    async render() {
        const historyContent = await this.model.getExpensePostsFromDatabase()
        const historyElement = this.view.render(historyContent,
            (expenseItem) => {
                this.editExpenseItem(expenseItem)
            }
        )
         this.root.replaceChildren(historyElement)
    }

    editExpenseItem(expenseItem) {
        console.log('Selected expense item:', expenseItem)
        this.selectedExpense = expenseItem
    }
}

