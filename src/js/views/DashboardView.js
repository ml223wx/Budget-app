export class DashboardView {

    render(message) {
        const dashboard = document.createElement('div')
        dashboard.id = 'dashboard'

        const paragraph = document.createElement('p')
        paragraph.textContent = message;

        dashboard.append(paragraph)
        return dashboard;
    }
}