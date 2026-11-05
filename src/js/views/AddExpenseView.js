export class AddExpenseView { 

    constructor(categories) {
        this.categories = categories
    }
    
    render(onCategorySelected, onCreateNewCategory) {
        this.onCategorySelected = onCategorySelected
        this.onCreateNewCategory = onCreateNewCategory
        const form = this.createForm()

        return form
    }

    createForm() {
        const form = document.createElement('form')
        const inputAmount = document.createElement('input')
        inputAmount.type = 'number'
        inputAmount.placeholder = 0
        inputAmount.name = 'expense'
        form.appendChild(inputAmount)

        const inputDate = document.createElement('input')
        inputDate.type = 'date'
        inputDate.name = 'date'
        form.appendChild(inputDate)

        const submitButton = document.createElement('button')
        submitButton.type = 'submit'
        submitButton.textContent = 'Add Expense'
        form.appendChild(submitButton)

        const inputComment = document.createElement('input')
        inputComment.type = 'text'
        inputComment.placeholder = 'Add a comment'
        inputComment.name = 'comment'
        form.appendChild(inputComment)

        const subcategorySelect = document.createElement('select')
        subcategorySelect.name = 'subcategory'
        subcategorySelect.disabled = true

        const placeholder = document.createElement('option')
        placeholder.value = ''
        placeholder.textContent = 'Choose subcategory'
        subcategorySelect.appendChild(placeholder)

        form.appendChild(subcategorySelect)
        
        this.createCategoryButtons(this.categories, form, subcategorySelect)
        this.createNewCategoryButton(form)

        return form
    }

    createCategoryButtons(categories, form, subcategorySelect) {
        categories.forEach(category => {
            const button = document.createElement('button')
            button.type = 'button'
            button.name = 'category-button'
            button.textContent = category.name
            // When this button is clicked, the selected category object will be passed to the callback function.
            console.log('category')
            console.log(category)
            button.addEventListener('click', () => {
                this.onCategorySelected(category)
                const chosenSubcategory = this.showSubcategories(category, subcategorySelect)
            })
            form.appendChild(button)
        })
    }

    showSubcategories(category, subcategorySelect) {
        subcategorySelect.disabled = false
        subcategorySelect.replaceChildren()
        for (const subcategory of category.subCategories) {
            console.log('subcategory')
            console.log(subcategory)
            const option = document.createElement('option')
            option.value = subcategory
            option.textContent = subcategory
            subcategorySelect.appendChild(option)
        }
    }

    createNewCategoryButton(form) {
        const button = document.createElement('button')
        button.type = 'button'
        button.name = 'new-category-button'
        button.textContent = 'Add new category'
        button.addEventListener('click', () => this.onCreateNewCategory('Test new category'))
        form.appendChild(button)
    }
 }