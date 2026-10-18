import { DashboardModel } from '../models/DashboardModel.js';
import { DashboardView } from '../views/DashboardView.js';

export class DashboardController {
    constructor(root, expenseManager, categoryManager) {
        this.root = root
        this.expenseManager = expenseManager
        this.categoryManager = categoryManager
        this.model = new DashboardModel()
        this.view = new DashboardView()
    }

    renderDashboard() {

        const dashboardContent = this.model.getDashboardContent(this.expenseManager.expensesRecord, this.categoryManager.categories)
        const dashboardElement = this.view.render(dashboardContent)

        this.root.replaceChildren(dashboardElement);
    }
}