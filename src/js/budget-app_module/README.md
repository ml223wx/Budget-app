
--------------------------

# JavaScript CLI Template

Welcome to the **1dv610** JavaScript Command-Line Interface (CLI) template. This repository serves as a clean, pre-configured boilerplate for building robust Node.js console applications with modern tools and best practices.

## 🚀 What it does

This is a budgeting module, where a user can create expenses (the `Expense` object) containing information about a purchase. The module comes with pre-defined categories (the `Category` object) of expenses (such as 'Food' or 'Hobby').
Every Category has at least one sub-category (such as 'Groceries' or 'Snacks'). The user can add their own categories and sub-categories by using methods in the `CategoryManager` class.
The `ExpenseManager` class adds `Expense` objects to a record and can calculate different statistics about expenses.
Both the record of the expense history, and the categories to be used when starting the application, can be modified by reading from a different file. The `JSONExpensesHistoryConverter` and `JSONcategoriesConverter` converts JSON-files containing the information to be used respectively.

---

## 🛠️ Getting Started

### Prerequisites

Ensure you have **Node.js** (version 24.12.0 or later) and **Git** installed on your machine.

### Installation & Project Setup

Clone the repository from git@github.com:ml223wx/1dv610_lab2.git
Install dependencies with `npm install`.

---

## 💻 Available Scripts

You can manage the application lifecycle, testing, and formatting using the following npm scripts:

### Running the Application

Starts the main console application entry point (`src/app.js`) and shows a demo of the functionality:

```bash
npm start
```


### Running Tests

  ```bash
  npx vitest
  ```


## 📁 Project Structure

```text
├── src/
│   ├── app.js                          # Main application logic & execution entry point
│   ├── Category.js                     # The Category class
│   ├── CategoryManager.js              # The CategoryManager class
│   ├── Expense.js                      # The Expense class
│   ├── ExpenseManager.js               # The ExpenseManager class
│   ├── JSONcategoriesConverter.js      # The JSONcategoriesConverter class
│   ├── JSONExpensesHistoryConverter.js # The JSONExpensesHistoryConverter class
│   ├── mockExpenseHistory.json         # The mocked version of the expenses record to be demoed
│   └── standardCategories.json         # The pre-defined expense categories
├── test/            # Integration and system tests (higher-level / E2E test flows)
├── package.json     # Project configuration, scripts, and dependencies
└── LICENSE          # Unlicense (Public Domain dedication)
```

---

## ⚖️ License

This project is released into the public domain under the **Unlicense**. You are free to copy, modify, publish, and distribute this boilerplate code in any way you see fit without any restrictions.
