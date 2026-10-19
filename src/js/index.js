import { DashboardController } from './controllers/DashboardController.js'
import { AddExpenseController } from './controllers/AddExpenseController.js'
// import { SplitController } from './controllers/SplitController.js'
// import { HistoryController } from './controllers/HistoryController.js'
import { NavigationController } from './controllers/NavigationController.js'
import { ExpenseManager } from './budget-app_module/src/ExpenseManager.js'
import { CategoryManager } from './budget-app_module/src/CategoryManager.js'
import './budget-app_module/src/JSONExpensesHistoryConverter.js'
import { DatabaseHandler } from './databaseHandler.js'


/**
 * Initializes the application by reading categories and expenses from the IndexedDB database,
 * creating managers for expenses and categories, and rendering the dashboard.
 * Sets up the navigation and renders the initial dashboard view.
 */
async function start() {
    const root = document.querySelector('#app')

    const dbHandler = new DatabaseHandler()
    // Log the current content of the database for debugging purposes:
    await dbHandler.logDatabaseContent()
    const { categories, expenses } = await dbHandler.readCategoriesAndExpenses()

    const expenseManager = new ExpenseManager(expenses, categories)
    const categoryManager = new CategoryManager(categories)

    // Test logs:
    console.log('Kategorier i index.js - start():', categories);
    console.log('Utgifter i index.js - start():', expenses);
    
    // const dashboardController = new DashboardController(root, expenseManager)
    // // dashboardController.render()

    const pages = {
      dashboard: new DashboardController(root, expenseManager, dbHandler),
      expense: new AddExpenseController(root, expenseManager, categoryManager, dbHandler),
      // split: new SplitController(root, expenseManager, dbHandler),
      // history: new HistoryController(root, expenseManager, dbHandler)
    }

    const navigation = new NavigationController(document.querySelector('#tabs'), pages)
    navigation.goTo('dashboard')
}

start()