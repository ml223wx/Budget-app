import { DashboardModel } from '../models/DashboardModel.js';
import { DashboardView } from '../views/DashboardView.js';

export class DashboardController {
    constructor(root, expenseManager) {
        this.root = root
        this.model = new DashboardModel(expenseManager)
        this.view = new DashboardView()
    }
    
    /**
     * Renders the dashboard view with the current dashboard content.
     * Attaches event listeners to category buttons.
     */
    renderDashboard() {
        const dashboardContent = this.model.getDashboardContent()
        const dashboardElement = this.view.render(dashboardContent)

        const categoryButtons = dashboardElement.querySelectorAll('button[data-category]')
        this.createCategoryButtonsListener(categoryButtons)

        this.root.replaceChildren(dashboardElement);
    }

    /**
     * Attaches click event listeners to category buttons.
     * @param {NodeListOf<HTMLButtonElement>} categoryButtons - The category buttons to attach listeners to.
     */
    createCategoryButtonsListener(categoryButtons) {        
        categoryButtons.forEach(button => {
            button.addEventListener('click', () => {
                console.log(button.dataset.category)  // 'Food'
            })
        })
    }
}