import { DashboardModel } from '../models/DashboardModel.js';
import { DashboardView } from '../views/DashboardView.js';

export class DashboardController {
    constructor(root) {
        this.root = root
        this.model = new DashboardModel()
        this.view = new DashboardView()
    }

    renderDashboard() {

        const dashboardContent = this.model.getDashboardContent()
        const dashboardElement = this.view.render(dashboardContent)

        this.root.replaceChildren(dashboardElement);
    }
}