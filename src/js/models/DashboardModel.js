export class DashboardModel {
    constructor() {
    }

    getDashboardContent() {
        // return 'This is the dashboard test message.'
        return this.expenseManager.categories();
        
    }
}