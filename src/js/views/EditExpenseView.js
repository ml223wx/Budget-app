export class EditExpenseView {
    constructor(expenseItem) {
        this.expenseItem = expenseItem
    }

    render(expenseItem, categories, onSave) {
        console.log('categories:')
        console.log(categories)
        const pageContent = document.createElement('div')

        const amountInput = document.createElement('input')
        amountInput.type = 'number'
        amountInput.value = expenseItem.amount

        const categorySelect = document.createElement('select')
        categories.forEach(category => {
            const option = document.createElement('option')
            option.value = category.name
            option.textContent = category.name
            option.selected = category.name === expenseItem.category
            categorySelect.appendChild(option)
        })

        const dateInput = document.createElement('input')
        dateInput.type = 'date'
        dateInput.value = expenseItem.date.toISOString().slice(0, 10)

        const commentInput = document.createElement('input')
        commentInput.type = 'text'
        commentInput.value = expenseItem.comment || ''

        const saveButton = document.createElement('button')
        saveButton.textContent = 'Save'
        saveButton.addEventListener('click', () => {
            onSave({
                ...expenseItem,
                amount: amountInput.value,
                category: categorySelect.value,
                date: dateInput.value,
                comment: commentInput.value
            })
        })

        pageContent.appendChild(amountInput)
        pageContent.appendChild(categorySelect)
        pageContent.appendChild(dateInput)
        pageContent.appendChild(saveButton)
        pageContent.appendChild(commentInput)
        return pageContent
    }
}