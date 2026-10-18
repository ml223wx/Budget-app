export class DashboardModel {
    constructor() {
    }

    getDashboardContent(expenses, categories) {

        return {
            expenses,
            categories
        }
    }
}