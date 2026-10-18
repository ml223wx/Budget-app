import { DashboardModel } from '../models/DashboardModel.js';
import { DashboardView } from '../views/DashboardView.js';

export class DashboardController {
    constructor(root, expenseManager) {
        this.root = root
        this.model = new DashboardModel(expenseManager)
        this.view = new DashboardView()
    }

    renderDashboard() {

        const dashboardContent = this.model.getDashboardContent()
        const dashboardElement = this.view.render(dashboardContent)

        const categoryButtons = dashboardElement.querySelectorAll('button[data-category]')
        categoryButtons.forEach(button => {
            button.addEventListener('click', () => {
                console.log(button.dataset.category)  // "Food"
            })
        })

        this.root.replaceChildren(dashboardElement);
    }
}