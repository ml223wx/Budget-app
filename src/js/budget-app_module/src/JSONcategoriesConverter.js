import { Category } from "./Category.js"


export class JSONCategoriesConverter {
  constructor (categories) {
    this.categories = categories.map(
  category => new Category(category.name, category.subCategories)
    )
  }

  getCategories() {
    return this.categories
  }

}
