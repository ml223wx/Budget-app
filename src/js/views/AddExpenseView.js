export class AddExpenseView { 

    constructor(categories) {
        this.categories = categories
    }
    
    render(onCategorySelected) {
        this.onCategorySelected = onCategorySelected
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

        this.createCategoryButtons(this.categories, form)

        return form
    }

    createCategoryButtons(categories, form) {
        categories.forEach(category => {
            const button = document.createElement('button')
            button.type = 'button'
            button.name = 'category-button'
            button.textContent = category.name
            // When this button is clicked, the selected category will be passed to the callback function.
            button.addEventListener('click', () => this.onCategorySelected(category.name))
            form.appendChild(button)
        })
    }
 }