export class HistoryModel {

    constructor(databaseHandler) {
        this.databaseHandler = databaseHandler
    }

    async getExpensePostsFromDatabase() {
        const result = await this.databaseHandler.readCategoriesAndExpenses()
        return result.expenses
    }

}