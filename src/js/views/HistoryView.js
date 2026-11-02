export class HistoryView {

    render(databaseContent, onExpenseItemSelected) {
        this.onExpenseItemSelected = onExpenseItemSelected

        const pageContent = document.createElement('div')
        this.createExpensePostButtons(databaseContent, pageContent)
        return pageContent
    }


    createExpensePostButtons(historyContent, pageContent) {
            historyContent.forEach(databasePost => {
                const button = document.createElement('button')
                button.type = 'button'
                button.name = 'expense-item-button'
                button.textContent = databasePost.amount + ' - ' + databasePost.category + ' - ' + databasePost.date
                // // When this button is clicked, the selected expense will be passed to the callback function.
                button.addEventListener('click', () => this.onExpenseItemSelected(databasePost))
                pageContent.appendChild(button)
            })
        return pageContent
    }
}