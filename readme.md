# Vision

It is the 24th and you are eagerly waiting for the student loan to drop into your account like it usually does on the 25th. Somehow, the money that you thought you would be able to put into your savings account at the end of the month, is gone. ”How is this possible?”, you wonder, since ”all I ever spend money on is groceries, and I've been really good at not ordering takeout this month”.

The first step in changing something is to collect information, so you decide to figure out what you *really* do with your money each month. You decide to download _APP_NAME_ and next morning when you buy a morning coffee in the school cafeteria (because you overslept again), you type in the amount in the app, click the icon for ”Food”, then choose between the three icons shown to you ”Groceries”, ”Snacks” and ”Restaurant”. You click ”Restaurant” and to be extra thorough, you type in ”Coffee, school cafeteria” in the free-text comment box. Since you type in the expense right after you paid for your coffee, you don't have to change the date and time in the box that lets you do this.

You have an extra stressful week at school, so instead of typing in all the expenses right after you have bought something, you save up the receipts in your wallet like in the good old days. After a few days you go through the receipts one by one, and add them into the app. You choose the category accordingly, type in a free-text message if necessary, and click the date-box to change the dates to align with the dates on the receipt. When you are about to choose the category for the balls of yarn you bought at a bargain price a few days ago, you click ”Hobby”, but discover that no pre-set categories fit. Since you have a passion for knitting, and assume that you are going to need a category for this in the future, while being on the main ”Hobby” category you simply click ”Add sub-category”, type in ”Knitting” and then save it. 

Throughout the month, you get curious to see what you're spending on, so you open the app and the dashboard shows you the monthly total up until now. You can choose one of the categories to specifically view it, and when you click on it it shows you the monthly total in this category until now. The same goes for sub-categories. The app is automatically set to show you the expenses on each calendar month on the dashboard, but if you want to analyze your spendings more, you can choose a cusomized date interval.

After telling your friends about the app, they of course decide to download it as well. You go to get food at the local vietnamese restaurant and to speed up the process of paying for your food, you pay the total amount. This time, instead of clicking the icon representing "Create new expense" in the app, you click the icon representing an expense to be split. You type in what your friends owe you individually, select the "Food" category and "Restaurant" subcategory, and type "Vietnamese food" as a free text comment. The app deducts the total amount you are owed and redirects you to the main page for the  "Create new expense" function, with the remainder (the cost of your food only) pre-filled in the "Amount" field.

# Requirements

## 1. Purpose and Objectives

The app aims to help users gain a clear overview of their spending by allowing them to easily record, categorize, and analyze their expenses. The goal is to help users understand where their money goes each month and make more informed financial decisions.

## 2. Functional Requirements

Functional requirements describe what the app must be able to do.

### 2.1 Expense Registration

| ID | Requirement | Priority |
|---|---|---|
| FR1 | The user shall be able to register an expense by entering an amount. | Must |
| FR2 | The user shall be able to select a main category for an expense. | Must |
| FR3 | The user shall be able to select a subcategory within the chosen main category. | Must |
| FR4 | The user shall be able to add a free-text comment to an expense. | Must |
| FR5 | The app shall automatically set the current date and time when an expense is registered. | Must |
| FR6 | The user shall be able to manually change the date and time of an expense. | Must |
| FR7 | The user shall be able to save a registered expense. | Must |
| FR8 | The user shall be able to register expenses retrospectively. | Must |

### 2.2 Categories and Subcategories

| ID | Requirement | Priority |
|---|---|---|
| FR9 | The app shall provide predefined main categories for expenses. | Must |
| FR10 | The app shall provide predefined subcategories for expenses. | Must |
| FR11 | Each main category shall be able to contain multiple subcategories. | Must |
| FR12 | The app shall display relevant subcategories when the user selects a main category. | Must |
| FR13 | The user shall be able to create custom subcategories within a selected main category. | Must |
| FR14 | The user shall be able to name and save a new subcategory. | Must |
| FR15 | Custom subcategories shall be available for future expense registrations. | Must |

**Example of a category structure:**

- **Food**
  - Groceries
  - Snacks
  - Restaurant
- **Hobby**
  - Crafting
  - Other custom subcategories

### 2.3 Dashboard and Expense Analysis

| ID | Requirement | Priority |
|---|---|---|
| FR16 | The app shall provide a dashboard displaying the user's total expenses for the selected time period. | Must |
| FR17 | By default, the dashboard shall display expenses for the current calendar month. | Must |
| FR18 | The user shall be able to view the total expenses for an individual main category. | Must |
| FR19 | The user shall be able to view the total expenses for an individual subcategory. | Must |
| FR20 | The user shall be able to navigate from the dashboard to a main category and then to its subcategories. | Must |
| FR21 | The app shall update expense totals when new expenses are registered. | Must |
| FR22 | The user shall be able to select a custom date range to analyze expenses. | Should |
| FR23 | The app shall calculate and display the total expenses within the selected date range. | Must |
| FR24 | The app shall only include expenses whose dates fall within the selected time period in the relevant summary. | Must |

### 2.4 Managing Registered Expenses

The following requirements are useful additions to ensure that users can correct previously registered expenses.

| ID | Requirement | Priority |
|---|---|---|
| FR25 | The user shall be able to edit a previously registered expense. | Should |
| FR26 | The user shall be able to delete a previously registered expense. | Should |
| FR27 | The user shall be able to view the amount, category, subcategory, date, time, and any comment associated with an expense. | Should |
| FR28 | The user shall be able to export a list of a calendar month's expenses to a file type possible to open in another program, for example CSV | Should |

### 2.5 Split Expenses

| ID | Requirement | Priority |
|---|---|---|
| FR29 | The user shall be able to register an expense that is shared with other people. | Must |
| FR30 | The user shall be able to enter the individual amounts owed by each person involved in a shared expense. | Must |
| FR31 | The user shall be able to assign a main category and a subcategory to a shared expense. | Must |
| FR32 | The user shall be able to add a free-text comment to a shared expense. | Must |
| FR33 | The app shall calculate the total amount owed by other people based on the individual amounts entered. | Must |
| FR34 | After the shared expense has been registered, the app shall subtract the total amount owed by others from the original expense amount. | Must |
| FR35 | After processing a shared expense, the app shall redirect the user to the regular expense registration page. | Must |
| FR36 | The app shall automatically pre-fill the amount field with the remaining amount that represents the user's own share of the expense. | Must |
| FR37 | The app shall allow the user to register the remaining amount as their own expense using the regular expense registration flow. | Must |

## 3. Non-Functional Requirements

Non-functional requirements describe how the app should perform.

| ID | Requirement | Priority |
|---|---|---|
| NFR1 | The app shall be intuitive and easy to use, including for first-time users. | Should |
| NFR2 | Registering an expense shall require as few steps as possible. | Should |
| NFR3 | The app should have a clear and consistent interface with recognizable category icons. | Should |
| NFR4 | The app shall store registered expenses persistently so that they remain available when the user reopens the app. | Must |


## 4. User Flow Requirements

The app shall support the following key user flows.

### Flow A: Register a New Expense

1. Open the app and select the option to register an expense.
2. Enter the amount.
3. Select a main category and a subcategory.
4. Add a comment if necessary.
5. Check the date and time, which are filled in automatically.
6. Save the expense.

### Flow B: Register an Expense Retrospectively

1. Open the expense registration feature.
2. Enter the amount and select a category.
3. Change the date and time to match when the purchase was made.
4. Add an optional comment.
5. Save the expense.

### Flow C: Create a Custom Subcategory

1. Select a main category, such as Hobby.
2. Select the "Add Subcategory" option.
3. Enter a name, such as Knitting.
4. Save the new subcategory.
5. Use the subcategory for the current expense or future expenses.

### Flow D: Analyze Expenses

1. Open the dashboard and view the total expenses for the current month.
2. Select a main category to view its total expenses.
3. Select a subcategory to view its total expenses.

#### Flow E: Register a Shared Expense

1. Open the app and select the option to register a shared expense.
2. Enter the individual amounts owed by each person involved.
3. Select a main category and a subcategory for the expense.
4. Add an optional free-text comment.
5. Save the shared expense.
6. The app calculates the total amount owed by the other people.
7. The app subtracts the total amount owed by others from the original expense amount.
8. The app redirects the user to the regular expense registration page.
9. The amount field is automatically pre-filled with the remaining amount, representing the user's own share.
10. The user completes and saves the expense using the regular expense registration flow.

## 5. Minimum Viable Product (MVP)

To make the development of an initial working version manageable, the following features should be prioritized:

- [ ] Manual expense registration.
- [ ] Automatic date and time entry.
- [ ] Ability to edit the date and time.
- [ ] Predefined main categories and subcategories.
- [ ] Ability to create custom subcategories.
- [ ] Free-text comments for expenses.
- [ ] Dashboard displaying total expenses for the current month.
- [ ] Expense summaries by main category and subcategory.
- [ ] Persistent data storage and basic data protection.
- [ ] Exportable to CSV or similar
- [ ] Shared expense registration, including individual amounts owed by others and automatic calculation of the user's own share.

Editing and deleting expenses should also be implemented early, even though they are not explicitly described in the original vision. 

Custom selecting a date range and seeing the expenses within this time frame should also be implemented early.

Features such as receipt scanning using a camera, budget goals, notifications, and automated saving suggestions are not part of the core requirements described in the vision and can therefore be considered for future versions.

## 6. Summary

The app's core functionality consists of three main components:

1. **Expense Registration:** Users shall be able to quickly record expenses, including the amount, category, date, time, and an optional comment.
2. **Categorization:** Users shall be able to use predefined categories and create custom subcategories according to their needs.
3. **Expense Analysis:** Users shall be able to view total expenses, analyze spending by category and subcategory, and select custom time periods.

The most important success factor is making expense registration simple enough that users will do it regularly. At the same time, the dashboard must provide an accurate and understandable overview of where their money goes.

# Running the app (PWA)

The app lives in `pwa/` and is a static Progressive Web App: no backend, all data is stored locally in the phone's IndexedDB.

- Try locally: `npx http-server pwa` and open http://localhost:8080.
- Install on a phone: host the `pwa/` folder on any static HTTPS host (e.g. GitHub Pages), open the URL in Chrome/Safari and choose *Add to home screen*. It then works offline.
- Note: clearing site data or uninstalling the app deletes the stored expenses; use *Export period as CSV* for backups.
