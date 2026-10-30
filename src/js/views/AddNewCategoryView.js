export class AddNewCategoryView {
    // constructor(categoryName) {
    //     this.categoryName = categoryName
    // }

    render(onNewCategoryName) {
        const form = document.createElement('form')
        const label = document.createElement('label')
        label.textContent = 'Add new category wohoo:'
        const input = document.createElement('input')
        input.type = 'text'
        input.name = 'category'
        const button = document.createElement('button')
        button.type = 'submit'
        button.textContent = 'Add'
        form.appendChild(label)
        form.appendChild(input)
        form.appendChild(button)

        form.addEventListener('submit', async (event) => {
            event.preventDefault()
            await onNewCategoryName(input.value)
        })

        return form
    }
}