/**
 * A category of purchases.
 */
export class Category {
  constructor(name, subCategories) {
    this.name = name
    this.subCategories = subCategories
  }

  addSubCategory(subCategoryName){
    this.subCategories.push(subCategoryName)
  }

  hasSubcategory(subCategoryName){
    for (let i = 0; i < this.subCategories.length; i++) {
      if (this.subCategories[i] === subCategoryName) {
        return true
      }
      return false
    }
  }
}
