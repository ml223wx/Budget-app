import { DashboardController } from './controllers/dashboardController.js';
import { ExpenseManager } from './budget-app_module/src/ExpenseManager.js'
import { CategoryManager } from './budget-app_module/src/CategoryManager.js'
import './budget-app_module/src/JSONcategoriesConverter.js'
import './budget-app_module/src/JSONExpenseConverter.js'
import './budget-app_module/src/standardCategories.json'

function readDB () {

}

function setup () {
    this.ExpenseManager = new ExpenseManager()
    this.CategoryManager = new CategoryManager()
}

function start() {
    const root = document.querySelector('#app')
    
    const dashboardController = new DashboardController(root)
    dashboardController.renderDashboard()
}

start()