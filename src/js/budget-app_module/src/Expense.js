/**
 * The user's expense representing a purchase.
 */
export class Expense {
  constructor(amount, date, category, subCategory, comment) {
    this.amount = amount
    this.date = date
    this.category = category
    this.subCategory = subCategory
    this.comment = comment
  }
}
