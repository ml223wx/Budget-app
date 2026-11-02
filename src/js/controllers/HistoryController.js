import { HistoryModel } from '../models/HistoryModel.js'
import { HistoryView } from '../views/HistoryView.js'

export class HistoryController {
    constructor(root, databaseHandler) {
        this.root = root
        this.databaseHandler = databaseHandler
        this.model = new HistoryModel()
        this.view = new HistoryView()
    }

    render() {
        console.log('Rendering history page not implemented')
    }
}

