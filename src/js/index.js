import { DashboardController } from './controllers/DashboardController.js'
import { ExpenseManager } from './budget-app_module/src/ExpenseManager.js'
import { CategoryManager } from './budget-app_module/src/CategoryManager.js'
// import standardCategories from './budget-app_module/src/standardCategories.json' with { type: 'json' }
// import { JSONCategoriesConverter } from './budget-app_module/src/JSONcategoriesConverter.js'
import './budget-app_module/src/JSONExpensesHistoryConverter.js'
import { DatabaseHandler } from './databaseHandler.js'

/**
 * Initializes the application by reading categories and expenses from the IndexedDB database,
 * creating managers for expenses and categories, and rendering the dashboard.
 */
async function start() {
    const root = document.querySelector('#app')

    const dbHandler = new DatabaseHandler()
    const { categories, expenses } = await dbHandler.readCategoriesAndExpenses()

    const expenseManager = new ExpenseManager(expenses, categories)
    const categoryManager = new CategoryManager(categories)

    // Test logs:
    console.log('Kategorier i index.js - start():', categories);
    console.log('Utgifter i index.js - start():', expenses);
    
    const dashboardController = new DashboardController(root, expenseManager)
    dashboardController.renderDashboard()
}

start()