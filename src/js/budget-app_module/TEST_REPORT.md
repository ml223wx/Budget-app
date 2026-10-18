# Test Report

## Summary

I chose Vitest to test my application and used Vitest's .toBe() or .toContain() functions to compare the expected result vs. the output.

Answer:

 ## Test Results

| What was tested| How it was tested|Result|
|---|---|---| 
| `addSubCategory()` adds a sub category to an already created Category object|Automated unit test (Vitest):   added a sub-category as a string to the Category object's array of sub-categories and checked that the returned Object's array contained the new string | ✅ Passed.|
| `hasSubCategory`       |Automated unit test (Vitest):   checked that `hasSubcategory` returns `true` if a specific sub-category exists as a string in a Category array| ✅ Passed.  |
| `hasSubCategory`       |Automated unit test (Vitest):   checked that `hasSubcategory` returns `false` if a specific sub-category doesn't exist as a string in a Category array| ✅ Passed.  |
|---|---|---|
| `addCategory()` creates and adds a Category to the list of available categories       |Automated unit test (Vitest):   checks that the `CategoryManager` object's array of categories contains the newly created `Category` object | ✅ Passed. |
| `addSubCategory()` adds a sub category to an already created Category object via the `CategoryManager` object       |Automated unit test (Vitest):   added a sub-category to an already created `Category` object by passing the catgeory name and the sub-category name as strings as arguments, and checking that the Category object's array of sub-categories contained the new string | ✅ Passed.|
|---|---|---|
| `Expense` object contains an amount property       |Checked that a newly created `Expense` object contains the correct amount| ✅ Passed.  |
| `Expense` object contains a date property       |Checked that a newly created `Expense` object contains the correct date| ✅ Passed.  |
| `Expense` object contains an category property       |Checked that a newly created `Expense` object contains the correct category| ✅ Passed.  |
| `Expense` object contains an sub category property       |Checked that a newly created `Expense` object contains the correct sub category| ✅ Passed.  |
| `Expense` object contains a comment property       |Checked that a newly created `Expense` object contains the correct comment| ✅ Passed.  |
|---|---|---|
| `addExpense()` adds an Expense correctly       |Automated unit test (Vitest):   creates an `ExpenseManager` object and an `Expense` object, and checks that the returned amount for the entered month is the same as the `Expense` object's| ✅ Passed.  |
| `addExpense()` doesn't add an Expense if the entered category doesn't exist       |Automated unit test (Vitest):   creates an `ExpenseManager` object and an `Expense` object, and checks that it throws an error if the entered catgeory doesn't exist| ✅ Passed.  |
| `getSumByCategoryAndMonth` returns a total amount for a given month       |Automated unit test (Vitest):   creates an `ExpenseManager` object and three `Expense` objects with the same specific month given, anc checks that `getSumByCategoryAndMonth()` returns the sum of the three expenses| ✅ Passed.  |
| `getAllExpensesByMonth()` returns all `Expense` objects for a given month       |Automated unit test (Vitest):   creates an `ExpenseManager` object and three `Expense` objects with the same specific month given, and checks that `getAllExpensesByMonth()` returns all three objects, and that the length of the array is 3| ✅ Passed.  |
| `getTotalBySubCategory()` returns a total amount for a given month       |Automated unit test (Vitest):   creates an `ExpenseManager` object and three `Expense` objects with the same specific month and sub category given, and checks that `getTotalBySubCategory()` returns the sum of the three expenses| ✅ Passed.  |
