import standardCategories from './budget-app_module/src/standardCategories.json' with { type: 'json' }
import { JSONCategoriesConverter } from './budget-app_module/src/JSONcategoriesConverter.js'

export class DatabaseHandler {

    constructor() {
        this.DB_NAME = 'budget-app'
        this.DB_VERSION = 1
    }

    /**
     * Opens the IndexedDB database, creating object stores if necessary.
     * @returns {Promise<IDBDatabase>}
     */
    openDB() {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(this.DB_NAME, this.DB_VERSION);

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
                        })
                    }
            }
            request.onsuccess = () => resolve(request.result)
            request.onerror = () => reject(request.error)
        })
    }

    /**
     * Reads all entries from the specified object store in the IndexedDB database.
     * 
     * @param {IDBDatabase} db 
     * @param {string} storeName 
     * @returns {Promise<Array>}
     */
    readFromStore(db, storeName) {
        return new Promise((resolve, reject) => {
            const transaction = db.transaction(storeName, 'readonly')
            const request = transaction.objectStore(storeName).getAll()

            request.onsuccess = () => resolve(request.result)
            request.onerror = () => reject(request.error)
        })
    }

    /**
     * Reads categories and expenses from the IndexedDB database.
     * @returns {Promise<{categories: Array, expenses: Array}>}
     */
    async readCategoriesAndExpenses() {
        const db = await this.openDB();

        try {
            const categories = await this.readFromStore(db, 'categories')
            const expenses = await this.readFromStore(db, 'expenses')

            return { categories, expenses }
        } finally {
            db.close()
        }
    }

    /**
     * Adds a new expense to the IndexedDB database.
     * 
     * @param {*} expense 
     * @returns 
     */
    async addExpense(expense) {
        const db = await this.openDB()

        return new Promise((resolve, reject) => {
            const transaction = db.transaction('expenses', 'readwrite')
            const request = transaction.objectStore('expenses').add(expense)
            let id

            request.onsuccess = () => {
                id = request.result
            }

            transaction.oncomplete = () => {
                db.close()
                resolve(id)
            }

            transaction.onerror = () => {
                db.close()
                reject(transaction.error ?? request.error)
            }

            transaction.onabort = () => {
                db.close()
                reject(transaction.error ?? new Error('Could not save expense'))
            }
        })
    }

    async logDatabaseContent() {
        const { categories, expenses } = await this.readCategoriesAndExpenses()

        console.log('Categories in database:', categories)
        console.log('Expenses in database:', expenses)
        console.table(expenses)
    }   
}

