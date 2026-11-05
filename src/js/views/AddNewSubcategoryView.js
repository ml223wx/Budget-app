export class AddNewSubCategoryView {
    render(categories, onSubmit) {
        const form = document.createElement('form')

        const select = document.createElement('select')
        categories.forEach(category => {
            const option = document.createElement('option')
            option.value = category.name
            option.textContent = category.name
            select.appendChild(option)
        })

        const input = document.createElement('input')
        input.type = 'text'
        input.placeholder = 'New subcategory'

        const button = document.createElement('button')
        button.type = 'submit'
        button.textContent = 'Add'

        form.append(select, input, button)

        form.addEventListener('submit', async (event) => {
            event.preventDefault()
            await onSubmit(select.value, input.value.trim())
        })

        return form
    }
}