import { DashboardController } from './controllers/DashboardController.js'
import { ExpenseManager } from './budget-app_module/src/ExpenseManager.js'
import { CategoryManager } from './budget-app_module/src/CategoryManager.js'
import standardCategories from './budget-app_module/src/standardCategories.json' with { type: 'json' }
import { JSONCategoriesConverter } from './budget-app_module/src/JSONcategoriesConverter.js'
import './budget-app_module/src/JSONExpensesHistoryConverter.js'

const DB_NAME = 'budget-app'
const DB_VERSION = 1

/**
 * Opens the IndexedDB database, creating object stores if necessary.
 * @returns {Promise<IDBDatabase>}
 */
function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = () => {
      const db = request.result;

      if (!db.objectStoreNames.contains('categories')) {
        const store = db.createObjectStore('categories', {
          keyPath: 'id',
          autoIncrement: true
        })
        const categories = new JSONCategoriesConverter(standardCategories).getCategories()
        categories.forEach(category => store.add(category))
      }

      if (!db.objectStoreNames.contains('expenses')) {
        db.createObjectStore('expenses', {
          keyPath: 'id',
          autoIncrement: true
        });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

/**
 * Reads all entries from the specified object store in the IndexedDB database.
 * 
 * @param {IDBDatabase} db 
 * @param {string} storeName 
 * @returns {Promise<Array>}
 */
function readFromStore(db, storeName) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(storeName, 'readonly');
    const request = transaction.objectStore(storeName).getAll();

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

/**
 * Reads categories and expenses from the IndexedDB database.
 * @returns {Promise<{categories: Array, expenses: Array}>}
 */
async function readCategoriesAndExpenses() {
  const db = await openDB();

  try {
    const categories = await readFromStore(db, 'categories');
    const expenses = await readFromStore(db, 'expenses');

    return { categories, expenses };
  } finally {
    db.close();
  }
}

/**
 * Initializes the application by reading categories and expenses from the IndexedDB database,
 * creating managers for expenses and categories, and rendering the dashboard.
 */
async function start() {
    const root = document.querySelector('#app')

    const { categories, expenses } = await readCategoriesAndExpenses()

    const expenseManager = new ExpenseManager(expenses, categories)
    const categoryManager = new CategoryManager(categories)

    // Test logs:
    console.log('Kategorier i index.js - start():', categories);
    console.log('Utgifter i index.js - start():', expenses);
    
    const dashboardController = new DashboardController(root, expenseManager)
    dashboardController.renderDashboard()
}

start()