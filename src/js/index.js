import { DashboardController } from './controllers/dashboardController.js';

function start() {
    const root = document.querySelector('#app')
    
    const dashboardController = new DashboardController(root)
    dashboardController.renderDashboard()
}

start()